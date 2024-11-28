import style from '../Main/Main.module.css'

export default function Main() {
    return (
        <main>
            <section className={style.section}>
                <div className="container">
                    <h1 className={style.section_title}>Il mio blog</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            card
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}