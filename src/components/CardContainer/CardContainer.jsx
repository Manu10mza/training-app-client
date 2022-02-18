import style from './CardContainer.module.scss';
/*
    PROPS

    cards: Card[] (arreglo de objetos Card definidos abajo)
    
    interface Card{
        title: string,
        img: string (URL),
        disabled?: boolean,
    }

    CardElement: JSX.Element

    CardElement es algún elemento JSX que acepte las props definidas en la interface Card, 
    ej: <InfoCards title="Perro" img="./dog.jpg"/>, <NewsCard title="Rusia invade la Republica Checa" img={imgURL} />

    ----- OJO: al pasar el CardElement, se pasa como un objeto, no como un elemento JSX. -----
    ej: <CardContainer cards={cardArray} CardElement={InfoCards}/>
*/

export default function CardContainer({ cards, CardElement }) {
    return (
        <div className={style.container}>
            {cards.map(card => 
                <CardElement key={card.id} title={card.title} img={card.img} disabled={card.disabled}/>
            )}
        </div>
    );
}
