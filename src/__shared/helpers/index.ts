export const toTitleCase = (str: string) => {
	return str.split(' ')
						.map(word => word.charAt(0).toUpperCase() + word.slice(1))
						.join(' ')
}

export const toQueryString = (values: { [s: string]: string } | ArrayLike<string>) => {
	return Object.entries(values)
		.map(([key, value]) => {
			if(Array.isArray(value))
				return value.map(item => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`)
										.join('&')
			else
				return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
		})
		.join('&')
}
