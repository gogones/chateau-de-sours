import { useEffect } from 'react'

import CSS from './flipbook.module.css'

import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Flipbook() {

	useEffect(() => {

		gsap.utils.toArray(".-a-flipbookSlide").forEach((slide, i) => {
			ScrollTrigger.create({
				trigger: slide,
				start: "top top",
				pin: true,
				pinSpacing: false
			});
		});

	}, [])

	return (

		<div className={`${CSS.flipbook} -a-flipbook`}>
			<div className={`${CSS.flipbookSlides} -a-flipbookSlides`}>
				<div className={`${CSS.flipbookSlide} -a-flipbookSlide`}>
					<img src="https://picsum.photos/1920/1080" alt="" />
				</div>
				<div className={`${CSS.flipbookSlide} -a-flipbookSlide`}>
					<img src="https://picsum.photos/1920/1080" alt="" />
				</div>
				<div className={`${CSS.flipbookSlide} -a-flipbookSlide`}>
					<img src="https://picsum.photos/1920/1080" alt="" />
				</div>
			</div>
		</div>

	)
}