import CSS from './arrow-button.module.css'

export default function ArrowButton ({ url, label }) {
    return <a href={ url } className={CSS.arrowButton}>{ label }</a>
}