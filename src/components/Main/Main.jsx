import Card from '../Card/Card'
import style from '../Main/Main.module.css'
import {posts} from '../../posts.js'


export default function Main() {
  
    return (
        <main>
            <section className={style.section}>
                <div className="container">
                    <div className="row">
                        {posts.map((post) => (
                            <div key={post.id} className="col-6">
                                <Card  post={post}/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}