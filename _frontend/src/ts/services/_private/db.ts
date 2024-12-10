// this contains the mock backend db, and should not be referenced

interface User {
	type: 'user';
	id: number;
	name: string;
}

interface Product {
	type: 'product';
	id: number;
	name: string;
	unitPrice: number;
}

const names = [
	"Juel Hviid",
	"Lauritz Foged",
	"Ida Frandsen",
	"Mike Meier",
	"Anne-Marie Esbensen",
	"Louis Hyldgaard Hansen-Kristoffersen",
	"Bendt Meyer-Thorup Rasmussen",
	"Marinus Damm",
	"Lena Klausen",
	"Laurits Østergaard",
	"Mia Kirkegaard",
	"Mie Graversen",
	"Fritz Schou Ali",
	"Betty Villumsen",
	"Nick Thrane",
	"Thea Friis Hvid",
	"Jørn Nørregaard Smed",
	"Maj Brandt Nilsson",
	"Ketty Berg Korsgaard",
	"Sofie Hauge",
	"Nicklas Busk",
	"Leif Duus",
	"Johnny Thorup",
	"Dora Juul",
	"Adam Ravn Bødker-Carlsson"
];

export const Users: User[] = names.map((name, it) => ({
	type: 'user',
	id: it + 1,
	name
}));

export const Products: Product[] = [
	{
		type: 'product',
		id: 1,
		name: 'Cats and their secret hobbies',
		unitPrice: 79.95
	},
	{
		type: 'product',
		id: 2,
		name: 'Cat psychology today',
		unitPrice: 89.95
	},
	{
		type: 'product',
		id: 3,
		name: 'Curious tails and other short stories',
		unitPrice: 79.95
	},
	{
		type: 'product',
		id: 4,
		name: 'Culinary cooking for cats',
		unitPrice: 39.95
	},
	{
		type: 'product',
		id: 5,
		name: 'The cat whisperer',
		unitPrice: 49.95
	},
	{
		type: 'product',
		id: 6,
		name: 'Business cat insights - buying a boat',
		unitPrice: 59.95
	}
]
