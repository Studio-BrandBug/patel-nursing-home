import Counter2 from 'components/Counter2'; // -------- data -------- //

export const factList2 = [
  {
    id: 1,
    amount: 20,
    title: 'Years Of Experience'
  },
  {
    id: 2,
    amount: 12000,
    title: 'Patients Treated'
  },
  {
    id: 3,
    amount: 10,
    title: 'Expert Team'
  },
  {
    id: 4,
    amount: 10000,
    title: 'Specialized Treatments'
  }
];

const Facts3 = () => {
  return (
    <div className="row">
      <div className="col-xl-12 mx-auto">
        <div
            className=" image-wrapper bg-image text-white rounded"
            style={{
              backgroundImage: 'url(/img/testimonial.webp)'
            }}
          >
          <div className="card-body p-9 p-xl-10">
            <div className="row align-items-center counter-wrapper gy-4 text-center">
              {factList2.map((item) => (
                <Counter2 key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts3;
