import Button from '../Button/Button.jsx'
import style from '../Card/Card.module.css'
import imagePost from '../../assets/paesaggio.jpeg'

export default function Card (props) {
    console.log(props);
    
    const card_tags = props.post.tags ? props.post.tags.join(', ') : ''
    console.log(card_tags);
    

    return (
        <div className={style.card}>
            <img className={style.image} src={imagePost} alt="" />
            <div className={style.card_body}>
                <h3 className={style.card_title}>{props.post.title}</h3>
                <h4 className={style.card_tags}>Tags: {card_tags}</h4>
                <p className={style.card_description}>{props.post.content}</p>
                <Button />
            </div>
        </div>
    )
}