import React from 'react'

import { AVAILABILITIES, ENTITIES, FilterCheckboxListProps, FiltersSidebarProps, GENDER, TITLES } from '../types'

import { CgGenderMale } from 'react-icons/cg'
import { RiCalendarLine } from 'react-icons/ri'
import { BsBuilding } from 'react-icons/bs'
import { HiOutlineAcademicCap } from 'react-icons/hi'

import { Card, Form, ListGroup } from 'react-bootstrap'

const FilterCheckboxList: React.FC<FilterCheckboxListProps> = ({ name, items, setFilters }) => {
  const [checkedValues, setCheckedValues] = React.useState<string[]>([])
  const handleCheckboxChange = React.useCallback(e => {
      const { value, checked } = e.target
      checked
        ? setCheckedValues(values => [...values, value])
        : setCheckedValues(values => values.filter(item => item !== value));
  }, [])

  React.useEffect(() => {
    if(checkedValues.length > 0) {
      console.log(`🚀: ${name} checkedValues`, checkedValues)
      setFilters((filters) => ({
        ...filters,
        [name]: checkedValues
      }))
    }
  }, [name, checkedValues, setFilters])

  return (
    <Form>
      {items.map((item: string, index: number) => (
        <Form.Group key={item} controlId={`${name}-${index+1}`}>
          <Form.Check
            type="checkbox"
            label={item}
            name={name}
            value={item}
            checked={checkedValues.includes(item)}
            onChange={handleCheckboxChange}
          />
        </Form.Group>
      ))}
    </Form>
  )
}

const FiltersSidebar: React.FC<FiltersSidebarProps> = ({ setFilters }) => {
	return (
		<Card border="primary">
			<Card.Header className="bg-primary text-white">Filters Sidebar</Card.Header>
			<Card.Body>
				<ListGroup as="ul" variant="flush">
          <ListGroup.Item as="li" className="px-0 mb-3">
            <Card border="light">
              <Card.Header>
                <HiOutlineAcademicCap size={24} />
                <span className="px-2">Title</span>
              </Card.Header>
              <Card.Body>
                <FilterCheckboxList name="title" items={TITLES} setFilters={setFilters} />
              </Card.Body>
            </Card>
          </ListGroup.Item>
					<ListGroup.Item as="li" className="px-0 mb-3">
            <Card border="light">
              <Card.Header>
                <CgGenderMale size={25} />
                <span className="px-2">Gender</span>
              </Card.Header>
              <Card.Body>
                <FilterCheckboxList name="gender" items={GENDER} setFilters={setFilters} />
              </Card.Body>
            </Card>
          </ListGroup.Item>
					<ListGroup.Item as="li" className="px-0 mb-3">
            <Card border="light">
              <Card.Header>
                <RiCalendarLine size={22} />
                <span className="px-2">Availability</span>
              </Card.Header>
              <Card.Body>
                <FilterCheckboxList name="availability" items={AVAILABILITIES} setFilters={setFilters} />
              </Card.Body>
            </Card>
          </ListGroup.Item>
					<ListGroup.Item as="li" className="px-0 mb-3">
            <Card border="light">
              <Card.Header>
                <BsBuilding size={22} />
                <span className="px-2">Entity</span>
              </Card.Header>
              <Card.Body>
                <FilterCheckboxList name="entity" items={ENTITIES} setFilters={setFilters} />
              </Card.Body>
            </Card>
          </ListGroup.Item>
				</ListGroup>
			</Card.Body>
		</Card>
	)
}

export default FiltersSidebar
