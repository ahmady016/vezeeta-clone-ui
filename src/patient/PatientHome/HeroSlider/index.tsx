import React from 'react'

import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { IoIosCall } from 'react-icons/io'

import Slider from './Slider'

import './index.scss'

const HeroSlider = () => {
	return (
		<Slider>
			<div className="address">
				<h1 className="text-secondary fs-5 fs-sm-1 mt-4  mt-sm-0 lh-1 lh-sm-2">
					<span className="d-block d-sm-inline-block">Better Healthcare</span>
					for a Better Life
				</h1>
				<h2 className="text-secondary fs-4 fw-normal d-none d-sm-block">
					Book online or call <IoIosCall color="#F00" />
					<span className="fw-bold text-secondary">123-456</span>
				</h2>
			</div>

			<span
				className="arrow-btn m-auto w-fit-content d-none d-sm-block text-white cu-pointer"
				onClick={() => window.scroll(0, window.innerHeight)}
			>
				<MdOutlineKeyboardArrowDown fontSize={65} />
			</span>
		</Slider>
	)
}

export default HeroSlider
