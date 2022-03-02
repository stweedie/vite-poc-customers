<template>
	<template v-if="customer">
		<form @submit.prevent="submit">
			<div class="mb-3">
				<l-simple-input
					id="customer-first-name"
					v-model="customer.firstName"
					label="First Name"
				/>
			</div>
			<div class="mb-3">
				<l-simple-input
					id="customer-last-name"
					v-model="customer.lastName"
					label="Last Name"
				/>
			</div>
			<div class="mb-3">
				<label for="customer-email" class="form-label">Email</label>
				<input
					type="email"
					class="form-control"
					id="customer-email"
					v-model="customer.email"
				/>
			</div>
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</template>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Customer } from "@/models";
import CustomersService from "@/services/CustomersService";

import LSimpleInput from "./SimpleInput.vue";

type DataProps = {
  isLoading: Boolean;
  customer: Customer | null;
  customersService: CustomersService;
};

export default defineComponent({
	name: "EditCustomer",
	components: {
		LSimpleInput
	},
  data(): DataProps {
    return {
      isLoading: true,
      customer: null,
      customersService: new CustomersService(),
    };
  },
  async mounted() {
    this.customer = await this.customersService.getCustomer(
      +this.$route.params.customerId
    );
    this.isLoading = false;
  },
  methods: {
    submit() {
      console.log("submitted");
    },
  },
});
</script>
