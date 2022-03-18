import * as React from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { TopItemsProps } from './types'

import 'swiper/scss'
import 'swiper/scss/navigation'
import './index.scss'

function TopItems({ title, items }: TopItemsProps) {
	return (
		<>
			<h3>{title}</h3>
			<Swiper
				style={{ width: '85%', margin: 'auto' }}
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={4}
				navigation
				scrollbar={{ draggable: true }}
				onSlideChange={() => console.log('slide change')}
			>
				{items.map((item) => (
					<SwiperSlide key={item.id}>
						<img src={item.imageUrl} alt={item.name} />
						<br />
						<span>{item.name}</span>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default TopItems
