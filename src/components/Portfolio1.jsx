import Image from 'next/image';
import Carousel from 'components/Carousel'; // -------- data -------- //

const portfolioList1 = [
  '/img/hospital/hospital-tour-10.webp',
  '/img/hospital/hospital-tour-7.webp',
  '/img/hospital/hospital-tour-8.webp',
  '/img/hospital/hospital-tour-9.webp',
  '/img/hospital/hospital-tour-4.webp',
  '/img/hospital/hospital-tour-5.webp',
  '/img/hospital/hospital-tour-6.webp'
];

const Portfolio1 = () => {
  const carouselBreakpoints = {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    }
  };
  return (
    <div className="container-fluid px-md-6">
      <div className="row">
        <div className="col-lg-10 col-xl-8 mx-auto text-center mb-10">
          <h3 className="mb-1 fs-14 text-second text-uppercase ">Hospital</h3>
          <h2 className="display-4 mb-3">A Glimpse Inside Our Hospital </h2>
        </div>
      </div>
      <div className="swiper-container blog grid-view mb-12 mb-md-14">
        <Carousel grabCursor breakpoints={carouselBreakpoints}>
          {portfolioList1.map((item) => (
            <figure className="rounded" key={item}>
              <Image
                width={900}
                height={650}
                src={item}
                alt="Hospitals Tour | Patel Nursing Home"
                style={{
                  width: '100%',
                  height: 'auto'
                }}
              />
            </figure>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Portfolio1;
