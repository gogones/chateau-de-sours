import { useEffect, useRef, useState } from 'react'

import CSS from './custom-cursor.module.css'


export const CustomCursor = ({ active, pressed }) => {

    const cursorRef = useRef(null)

    useEffect( () => {
        document.addEventListener('mousemove', e => {
            const { clientX, clientY } = e
            const mouseX = clientX - cursorRef.current.clientWidth / 2
            const mouseY = clientY - cursorRef.current.clientHeight / 2
            cursorRef.current.style.transform = `translate3d( ${mouseX}px, ${mouseY}px, 0 )`
        })

    }, [])

    return (
        <div className={`
            ${CSS.customCursor} 
            ${CSS.drag}
            ${ active ? CSS.active : '' }
            ${ pressed ? CSS.pressed : '' }
        `} 
        ref={cursorRef}><span>DRAG</span></div>
    )
}




export const CustomCursorArea = ({ children }) => {

    const cursorAreaRef = useRef(null)

    useEffect( () => {
        cursorAreaRef.current.addEventListener('mouseenter', e => {
            console.log('hello')
        })
        
        cursorAreaRef.current.addEventListener('mouseleave', e => {
            console.log('goodbye')
        })

        cursorAreaRef.current.addEventListener('mousedown', e => {
            console.log('pressed')
        })

        cursorAreaRef.current.addEventListener('mouseup', e => {
            console.log('released')
        })
    }, [])

    return (
        <div className={CSS.cursorArea} ref={cursorAreaRef}>
            { children }
        </div>
    )
}