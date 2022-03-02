import useCustomerService from "./useCustomerService";
import { Customer } from "@/models";
import { reactive } from "vue";
import ApiError from "@/services/ApiError";
import { AsyncData } from "@/services/AsyncData";

export default function useCustomersList(): AsyncData<Customer[], [], ApiError> {
	const customerService = useCustomerService();

	const value = reactive<AsyncData<Customer[], [], ApiError>>({
		isLoading: true,
		isError: false,
		error: null,
		data: []
	});

	customerService.getCustomers()
		.then(data => {
			console.log("done loading", data);
			value.isLoading = false;
			value.isError = false;
			value.data = data;
			value.error = null;
		})
		.catch(error => {
			value.isError = true;
			value.isLoading = false;
			value.error = error;
			value.data = [];
		});

	return value;
}
