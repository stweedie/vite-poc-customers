<template>
	<label
		:for="id"
		class="form-label"
	>
		{{ label }}
	</label>
	<input
		:type="type"
		class="form-control"
		:id="id"
		:value="inputValue"
	/>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "LSimpleInput",
	props: {
		id: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: false,
			default: "text"
		},
		value: {
			type: [String, Number],
			required: false,
			default: ""
		},
		label: {
			type: String,
			required: true
		}
	},
	computed: {
		inputValue: {
			get() {
				return this.value;
			},
			set(value: string | number) {
				this.$emit("input", value);
			}
		}
	}
})
</script>
