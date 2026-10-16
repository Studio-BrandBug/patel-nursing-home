import ServiceCard1 from 'components/ServiceCard1';


const Services16 = ({list, heading, subHeading}) => {
  return (
    <div className="row gx-md-15 gy-5  justify-content-center">
      <div className='text-center mb-10'>
        {subHeading && <h3 className="mb-1 fs-14 text-second text-uppercase ">{subHeading}</h3>}
        <h2 className="display-4 mb-3">{heading}</h2>
      </div>
      {list.map(({ id, Icon, ...item }) => (
        <ServiceCard1 {...item} key={id} linkUrl="#" Icon={Icon} />
      ))}
    </div>
  );
};

export default Services16;
