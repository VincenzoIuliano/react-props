import style from '../Header/Header.module.css'

export default function Header() {
    return (
        <header className={style.header}>
            <div className="container">
                <p>Il mio Blog</p>
            </div>
        </header>
    )
}