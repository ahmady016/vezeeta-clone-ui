import React from 'react'

import { Container } from 'react-bootstrap'

import useSlider from '../../../__shared/hooks/useSlider'

import img01 from '../../../__images/Slider/01.jpg'
import img02 from '../../../__images/Slider/02.jpg'
import img03 from '../../../__images/Slider/03.jpg'
const images = [img01, img02, img03]

const Slider = ({ children }: any) => {
	const { boxRef } = useSlider({
		hideClass: 'hide-photo-slider',
		speed: 2,
		delay: 5.5,
	})

	return (
		<div ref={boxRef} className="slider-section">
			{images.map((img, i) => (
				<img
					key={i}
					data-slide="true"
					className="back-index w-100 h-100 position-absolute d-none d-sm-block"
					src={img}
					alt=""
				/>
			))}
			<Container className="HeroSlider-Container pt-1 pt-sm-5 container">
				{children}
			</Container>
		</div>
	)
}

export default Slider
