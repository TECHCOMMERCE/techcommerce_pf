import s from "../assets/styles/Card.module.css";

const Card = ({img, name, price}) => {
    return (
        <div className={s.container}>
            <div className={s.left}>
                <img className={s.img} src={img}/>
                <span className={s.name}>{name}</span>
            </div>

            <span className={s.price}>$<span className={s.number}>{price}</span></span>


        </div>
    )
}

export default Card
