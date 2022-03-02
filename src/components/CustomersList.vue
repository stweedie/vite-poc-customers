<template>
  <!-- <table class="table">
    <thead>
      <tr>
        <th>First</th>
        <th>Last</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="customer of data" :key="customer.id">
        <td>{{ customer.firstName }}</td>
        <td>{{ customer.lastName }}</td>
        <td>{{ customer.email }}</td>
        <td>
          <router-link :to="`/${customer.id}`">Edit</router-link>
        </td>
      </tr>
    </tbody>
  </table> -->
  <l-table :data="data">
    <template v-slot:header>
      <tr>
        <th>First</th>
        <th>Last</th>
        <th>Email</th>
        <th></th>
      </tr>
    </template>
    <template #body="{ item }">
      <td>{{ item.firstName }}</td>
      <td>{{ item.lastName }}</td>
      <td>{{ item.email }}</td>
      <td>
        <router-link :to="`/${item.id}`">Edit</router-link>
      </td>
    </template>
  </l-table>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useCustomersList from "./useCustomersList";
import { LTable } from "@stweedie/component-library-poc";

export default defineComponent({
  components: {
    LTable,
  },
  data() {
    const values = useCustomersList();
    console.log(values);
    return values;
  },
  watch: {
    isLoading(value) {
      console.log("isLoading", value);
    },
    isError(value) {
      console.log("isError", value);
    },
  },
});
</script>
