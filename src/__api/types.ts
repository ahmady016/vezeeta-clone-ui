type Gender = 'male' | 'female'

export type WorkTime = {
	from: string
	to: string
}
export type InstitutionBasicInfo = {
	id: string
	name: string
	address: string
}
export type Doctor = {
	id: string
	name: string
	title: string
	gender: Gender
	photoUrl: string
	birthDate: string
	city: string
	specialty: string
	address: string
	phone: string
	email: string
	password: string
	visits: number
	fees: number
	workDays?: string[]
	workTime?: WorkTime
	institution?: InstitutionBasicInfo
}

export type Institution = {
	id: string
	name: string
	address: string
	phone: string
	type: string
	city: string
	imageUrl: string
	visits: number
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

export type Message = {
	id: string
	name: string
	gender: Gender
	mobile: string
	email: string
	comment: string
}
