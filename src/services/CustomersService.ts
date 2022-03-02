import { createFakeCustomerList } from "@/mocks/CustomerMock";
import { Customer } from "@/models";

export default class CustomersService {
	private _customers: Customer[];
	constructor() {
		this._customers = createFakeCustomerList();
	}

	private waitFor(time: number): Promise<void> {
		return new Promise((resolve, reject) => {
			setTimeout(resolve, time);
		});
	}

	async getCustomers(): Promise<Customer[]> {
		await this.waitFor(2000);
		return await Promise.resolve(this._customers.map(f => ({ ...f })));
	}

	async getCustomer(id: number): Promise<Customer | null> {
		// await this.waitFor(2000);
		const customer = this._customers[id - 1];
		return await Promise.resolve(customer ? { ...customer } : null);
	}
}
