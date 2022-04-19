type Gender = 'male' | 'female'

export type Doctor = {
	id: string
	name: string
	gender: Gender
	photoUrl: string
	birthDate: string
	city: string
	specialty: string
	address: string
	phone: string
	email: string
	password: string
}

export type Institution = {
	id: string
	name: string
	address: string
	phone: string
	type: string
	city: string
	imageUrl: string
}

export type Specialty = {
	id: string
	name: string
	imageUrl: string
}

export type City = Specialty

export type SearchQuery = {
	name: string
	specialty: string
	city: string
	title: string[]
	gender: string[]
	availability: string[]
	entity: string[]
}

export type SearchResult = {
	doctors: Doctor[]
	institutions: Institution[]
	doctorsLength: number
	institutionsLength: number
}
