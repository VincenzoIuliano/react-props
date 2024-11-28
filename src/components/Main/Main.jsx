import Card from '../Card/Card'
import style from '../Main/Main.module.css'
import {posts} from '../../posts.js'


export default function Main() {
    
    // const tags = props.tags.join(', ')

    return (
        <main>
            <section className={style.section}>
                <div className="container">
                    <div className="row">
                        {posts.map((post) => (
                            <div key={post.id} className="col-6">
                                <Card title={post.title} content={post.content} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}