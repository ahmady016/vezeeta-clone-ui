export type Specialty = {
  id: string
  name: string
  imageUrl: string
}

export type City = {
  id: string
  name: string
  imageUrl: string
}

export type TopItemsProps = {
  items: Specialty[] | City[]
  title: string
}
