import { useEffect } from 'react'

import CSS from './hero.module.css'

import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
	useEffect(() => {

		const tl = gsap.timeline();

		tl.from('.-a-posterBackground', {yPercent: 100, opacity: 0})
		  .from('.-a-posterWidget', {yPercent: 100, opacity: 0})
		  .to('.-a-posterForeground', {yPercent: -100, opacity: 0});

		ScrollTrigger.create ({
			animation: tl,
			trigger: '.-a-poster',
			start: 'top top',
			scrub: true,
			pin: true,
			pinSpacer: false
		})

	}, [])

	return (
        <div className={`${CSS.poster} -a-poster`}>
            <div className={`${CSS.posterForeground} -a-posterForeground`}>
                <p>Some text</p>
                <div className={`${CSS.posterWidget} -a-posterWidget`}></div>
            </div>
            <div className={`${CSS.posterBackground} -a-posterBackground`}></div>
        </div>
	)

}