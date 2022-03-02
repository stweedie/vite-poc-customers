import { createRouter, createWebHistory } from "vue-router";
import CustomersList from "./components/CustomersList.vue";
import EditCustomer from "./components/EditCustomer.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [{
		path: "/",
		component: CustomersList
	}, {
		path: "/:customerId",
		component: EditCustomer
	}]
});

export default router;
