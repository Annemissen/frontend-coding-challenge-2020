const path = '/api/v2'

export function requestJson<T>(ajax) {
	return request<T>({
		...ajax,
		contentType: 'application/json',
		data: JSON.stringify(ajax.body)
	})
}

export function request<T>(ajax) {
	return new Promise<T>((resolve, reject) => {
		let options = { ...ajax, success: resolve, error: reject }
		fetch(options)
	})
}