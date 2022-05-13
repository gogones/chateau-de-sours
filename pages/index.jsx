import React, { useEffect, useState } from 'react'
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
import Head from 'next/head'
import Header from '../fuselage/global/header/header'
import FooterBar from '../fuselage/global/footer-bar/footer-bar'
import { CustomCursor } from '../fuselage/components/custom-cursor/custom-cursor'
import Hero from "../fuselage/components/hero/hero";
import OverviewIntro from "../fuselage/components/overview-intro/overview-intro";
import StickyVideo from "../fuselage/components/sticky-video/sticky-video";
import OverviewText from "../fuselage/components/overview-text/overview-text";
import OurValue from "../fuselage/components/our-value/our-value";
import Challenge from "../fuselage/components/challenge/challenge";
import Solution from "../fuselage/components/solution/solution";
import SolutionVideo from "../fuselage/components/solution-video/solution-video";
import FloatingPhones from "../fuselage/components/floating-phones/floating-phones";
import GridVideo from "../fuselage/components/grid-video/grid-video";
import DraggableSlideshow from "../fuselage/components/draggable-slideshow/draggable-slideshow";
import HistoryVideo from "../fuselage/components/history-video/history-video";
import TwoColumns from "../fuselage/components/two-columns/two-columns";
import useBreakpoints from "@thebiltheory/usebreakpoints";
import {breakpoints} from "../fuselage/utils/breakpoints";

export default function Home() {
	const [value, currentBreakpoint] = useBreakpoints(
		Object.keys(breakpoints),
		Object.values(breakpoints)
	);

	const [isMobile, setIsMobile] = useState();
	const [ cursorActive, setCursorActive ] = useState(false)
	const [ cursorPressed, setCursorPressed ] = useState(false)

	useEffect(() => {
		let fadeUps = gsap.utils.toArray('.fadeUp')

		fadeUps.forEach( item => {
			gsap.from( item, {
				scrollTrigger: {
					trigger: item,
					start: 'top 80%',
					end: 'top 65%',
					scrub: .25
				},
				opacity: 0, y: 50
			})
		})

	}, [])

	React.useEffect(() => {
		if (value && currentBreakpoint <= breakpoints.sm) {
			setIsMobile(true)
		} else if (value && currentBreakpoint > breakpoints.sm) {
			setIsMobile(false)
		}
	},[currentBreakpoint, value])

	return (
		<>
			<Head>
				<title>Base Creative</title>
				<meta name="description" content="Hong Kong design agency" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<CustomCursor active={cursorActive} pressed={cursorPressed} />

			<Header/>

			<main>
				<Hero />

				<OverviewIntro />

				<StickyVideo />

				<OverviewText />

				<OurValue />

				<Challenge />

				<Solution />

				<SolutionVideo />

				<FloatingPhones />

				<section className="block bg-white">
					<div className="container desktopPaddingLeft">
						<p className='fs-0 fw-500 lh-2 maxw-65 | fadeUp'>Inspired by ecosystem and equilibrium, we highlighted the harmony of all the moving parts</p>
					</div>
				</section>

				<GridVideo />

				<section className="block bg-default">
					<div className="container columns-2 desktop-gap-md">
						<div></div>
						<div>
							<p className='fs-1 fw-500 lh-2 | fadeUp'>Photographs selected were critically assessed to ensure they captured the emotion of each unique features of Château de Sours.</p>
						</div>
					</div>
				</section>

				<DraggableSlideshow setCursorActive={setCursorActive} setCursorPressed={setCursorPressed} />

				<section className="block bg-default">
					<div className="container columns-2 desktop-gap-md desktopPaddingLeft">
						<div className='maxw-30'>
							<p className='h3 fw-500'>A writing style with equally vivid, concise natural tone void of pretention</p>
							<p className='mt-sm'>Our approach to copywriting followed the same principles we applied to the website’s design - helping bring to life the Château de Sours brand through words and express its vision for sustainable living, working and growing and its continuing eﬀorts to initiate innovation in winemaking.</p>
						</div>
					</div>
				</section>

				<HistoryVideo />

				<TwoColumns />

				<FooterBar/>
			</main>
		</>
	)

}
