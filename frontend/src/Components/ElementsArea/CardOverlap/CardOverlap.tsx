import './CardOverlap.scss';

type CardProps = {
  image: string;
  title: string;
  description: string;
};

function CardOverlap({ image, title, description }: CardProps): JSX.Element {
  return (
    <div className="CardOverlap">
            <div className="card__overlay" />
      <img src={image} alt={title} className="card__image" />
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
}

export default CardOverlap;
