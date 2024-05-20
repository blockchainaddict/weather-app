function Card({img, title, subtitle, content, route}) {
  return (
      <a className="card" href={route}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={img}
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/assets/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{subtitle}</p>
            </div>
          </div>

          <div className="content">
            {content}
          </div>
        </div>
      </a>
  );
}

export default Card;
