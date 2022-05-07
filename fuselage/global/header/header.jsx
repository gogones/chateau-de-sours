import { useState } from 'react'

import CSS from './header.module.css'

export default function Header () {

    const [menuActive, setMenuActive] = useState(false)

    return (
        <>
            <header id="stickyHeader" className={CSS.header}>

                <div className={`${CSS.navToggle} ${ menuActive ? CSS.active : '' }`} id="navToggle" onClick={ () => setMenuActive( !menuActive ) }>
                    <span className={CSS.top}></span>
                    <span className={CSS.bottom}></span>
                </div>
                
                <div className={CSS.headerContainer}>

                    <section>
                        <a href="#">
                            <span className={CSS.logo}><span>BASE</span>CREATIVE</span>
                        </a>
                    </section>

                    <section className={`${CSS.navOverlay} ${ menuActive ? CSS.open : '' }`} id="navOverlay">
                        <div className={CSS.navOverlayBubble}></div>
                        
                            <ul className={CSS.mainMenu}>
                                <li><a className={CSS.menuLink} href="#">Work</a></li>
                                <li><a className={CSS.menuLink} href="#">Services</a></li>
                                <li><a className={CSS.menuLink} href="#">About</a></li>
                                <li><a className={CSS.menuLink} href="#">News &amp; Insights</a></li>
                                <li><a className={CSS.menuLink} href="#">Contact</a></li>
                            </ul>

                            <div className={CSS.mainMenuActions}>
                                <p><strong>Hong Kong</strong><br/>
                                    15th Floor,	The Hennessy<br/>
                                    256 Hennessy Road<br/>
                                    Wan Chai, Hong Kong</p>
                                <p>
                                    Telephone<br/>
                                    +852 2868 2793<br/>
                                    +852 3585 0792
                                </p>
                                <p>
                                    <strong>Say hello</strong><br/>
                                    <a className="uLink-thin" href="#">hello@basecreate.com</a>
                                </p>
                            </div>
                        
                    </section>

                </div>

            </header>
            <div className={CSS.headerShim}></div>
        </>
    )
}