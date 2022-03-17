import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { RiMentalHealthLine } from 'react-icons/ri'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { FaUserMd } from 'react-icons/fa'
import { BiCalendarCheck } from 'react-icons/bi'

const Cards = [
	{
		Icon: RiMentalHealthLine,
		heading: 'All your healthcare needs',
		paragraph:
			'Search and book a clinic visit, home visit, or a teleconsultation. Order your medicine and book a service or operation.',
	},
	{
		Icon: FaUserMd,
		heading: 'Verified patient reviews',
		paragraph:
			'Doctor ratings are from patients who booked and visited the doctor through Vezeeta.',
	},
	{
		Icon: BiCalendarCheck,
		heading: 'Your booking is confirmed',
		paragraph:
			'Your booking is automatically confirmed, as the doctor specifies his working hours and is notified of the booking details.',
	},
	{
		Icon: MdOutlineHealthAndSafety,
		heading: 'Book for free, and pay in the clinic',
		paragraph:
			"The consultation fees stated on Vezeeta are the actual doctor's fees with no extra charges.",
	},
]

const Services = () => {
	return (
		<div className="Services-Section">
			<Container fluid>
				<Row
					style={{ height: '300px' }}
					className="cards m-auto gap-4 gap-md-0 flex-between flex-wrap my-4 my-md-3"
				>
					{Cards.map(({ Icon, heading, paragraph }, i) => (
						<Col
							md={12 / 4}
							className="card-item p-1 align-items-center gap-md-0 gap-4 d-flex d-md-block col-md-3 col-md-3 col-md-3 col-md-3"
							key={i}
						>
							<div className="w-fit-content fs-1 mb-2 text-primary border-bottom border-3 border-danger pb-0">
								<Icon />
							</div>
							<div className="info text-standard">
								<h2 className="fs-4">{heading}</h2>
								<p>{paragraph}</p>
							</div>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	)
}

export default Services
