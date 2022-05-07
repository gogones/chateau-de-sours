import { useRef } from 'react'
import { useDraggable } from "react-use-draggable-scroll"

import CSS from './h-scroller.module.css'

export const HScroller = ({ children }) => {

    const ref = useRef()
	const { events } = useDraggable(ref)

    return <div className={CSS.container} {...events} ref={ref} >{ children }</div>

}