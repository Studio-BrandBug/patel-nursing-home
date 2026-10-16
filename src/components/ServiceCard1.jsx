
const ServiceCard1 = props => {
  const {
    title,
    description,
    Icon,
    cardClassName = '',
    iconClassName
  } = props;
  return <div className="col-md-6 col-xl-4 text-center">
      <div className={`card shadow-lg ${cardClassName}`}>
        <div className="card-body">
          {Icon &&<Icon className={iconClassName} />}
          {title &&<h4>{title}</h4>}
          <p className="mb-2">{description}</p>
        </div>
      </div>
    </div>;
};

export default ServiceCard1;