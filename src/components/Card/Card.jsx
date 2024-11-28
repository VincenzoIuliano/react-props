import Button from '../Button/Button.jsx'
import style from '../Card/Card.module.css'
import imagePost from '../../assets/paesaggio.jpeg'

export default function Card () {
    return (
        <div className={style.card}>
            <img className={style.image} src={imagePost} alt="" />
            <div className={style.card_body}>
                <h3 className={style.card_title}>Titolo del post</h3>
                <p className={style.card_description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam commodi iure quibusdam nam quis laudantium odit odio eius reiciendis corporis!</p>
                <Button />
            </div>
        </div>
    )
}