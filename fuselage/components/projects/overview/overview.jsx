import { useEffect } from 'react'

import CSS from './overview.module.css'

import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Overview() {

	useEffect(() => {

		gsap.to(".-a-overviewIntroduction", {
			scrollTrigger: {
				trigger: ".-a-overviewIntroduction",
				pin: true,
				start: 'top top',
				scrub: true,
			},
			yPercent: -100
		});

	}, [])

	return (
		<>
			<div className={`block grid columns-2`}>
				<div className=''>
					<p>Some other content</p>
					<p className='h2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra mauris.</p>
					<p className='h2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<p className='h3'>Brand creation through to development</p>
					<p>Some other content</p>
					<p className='h2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra mauris.</p>
					<p className='h2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<p className='h3'>Brand creation through to development</p>
					<p>Some other content</p>
					<p className='h2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra mauris.</p>
					<p className='h2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<p className='h3'>Brand creation through to development</p>
				</div>
			</div>

			<section className={CSS.overviewSection}>

				<div className={`${CSS.overviewIntroduction} block -a-overviewIntroduction`}>
					<div className=''>
						<p>Eyebrow</p>
						<p className='h2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra mauris.</p>
						<p className='h2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p className='h3'>Brand creation through to development</p>
					</div>
				</div>

				<div className={`${CSS.overviewGallery} -a-overviewGallery`}>
					<img src="https://picsum.photos/1920/1080" alt="" />
					<img src="https://picsum.photos/1920/1080" alt="" />
					<img src="https://picsum.photos/1920/1080" alt="" />
				</div>

			</section>

		</>
	)
}