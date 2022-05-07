import CSS from './footer-bar.module.css'

export default function FooterBar () {
    return (
        <footer className={`${CSS.footerBar} block | py-sm`}>
            <div className={`${CSS.footerBarContainer} container`}>

                <section>
                    <p className={`${CSS.footerBarMission} fw-600 fs-sm`}>brand-led<br/>business growth</p>
                </section>

                <section className={`${CSS.footerBarLinks} fs-xs`}>
                    &copy; Base Creative 2021&emsp;
                    <a href="#">Privacy Policy</a>&emsp;
                    <a href="#">Terms of Use</a>
                </section>
                
            </div>
        </footer>
    )
}