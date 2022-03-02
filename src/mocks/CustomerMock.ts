import { Customer } from "@/models";

let id = 0;

const names = [
	{ first: "Ricky", last: "Reed" },
	{ first: "Dewayne", last: "Kemp" },
	{ first: "Marcelo", last: "Dunn" },
	{ first: "Kelvin", last: "Perez" },
	{ first: "Lee", last: "Kane" },
	{ first: "Abraham", last: "Medina" },
	{ first: "Hilary", last: "Phelps" },
	{ first: "Maude", last: "Velazquez" },
	{ first: "Tamera", last: "Salazar" },
	{ first: "Billie", last: "Hernandez" },
	{ first: "Elva", last: "Lin" },
	{ first: "Corine", last: "Farley" },
	{ first: "Henrietta", last: "Mckay" },
	{ first: "Vanessa", last: "Brewer" },
	{ first: "Irene", last: "Khan" },
	{ first: "Freda", last: "Boyer" },
	{ first: "Iris", last: "Meyers" },
	{ first: "Joanna", last: "Mahoney" },
	{ first: "Albert", last: "Skinner" },
	{ first: "Waldo", last: "Figueroa" },
	{ first: "Marlin", last: "Hammond" },
	{ first: "Brandon", last: "Tucker" },
	{ first: "Napoleon", last: "Sims" },
	{ first: "Andy", last: "Cameron" }
]

export function createFakeCustomer(id: number): Customer {
	const value = names[id++ % names.length];
	return {
		id,
		firstName: value.first,
		lastName: value.last,
		email: `${value.first}.${value.last}@gmail.com`
	};
}

export function createFakeCustomerList(): Customer[] {
	return names.map((_, idx) => createFakeCustomer(idx + 1));
}
