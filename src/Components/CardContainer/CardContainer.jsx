import Card from "../Card/Card";
import cardData from "../../Data/cardData";

export default function CardContainer() {
  return (
    <div className="card-container">
      {cardData.map((card, index) => {
        return (
          <Card
            key={index}
            img={card.img}
            title={card.title}
            subtitle={card.subtitle}
            content={card.content}
            route={card.route}
          />
        );
      })}
    </div>
  );
}
