import { Users, Products } from './_private/db'

export class EntityStore {
	getUser(id: number) {
		const user = Users.find(e => e.id === id)
		return new Promise<typeof user>((resolve, reject) => {
			if (user !== undefined) {
				setTimeout(() => resolve(user), Math.random() * 30 + 30);
			} else {
				setTimeout(() => reject(new Error('USER_NOT_FOUND')), Math.random() * 30 + 30);
			}
		})
	}

	getProduct(id: number) {
		const product = Products.find(e => e.id === id)
		return new Promise<typeof product>((resolve, reject) => {
			if (product !== undefined) {
				setTimeout(() => resolve(product), Math.random() * 30 + 30);
			} else {
				setTimeout(() => reject(new Error('PRODUCT_NOT_FOUND')), Math.random() * 30 + 30);
			}
		})
	}
}
