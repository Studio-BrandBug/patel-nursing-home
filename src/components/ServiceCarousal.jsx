import { Fragment } from 'react';
import Image from 'next/image';
import Carousel from 'components/Carousel';
import Link from 'next/link';
import { specialities } from '../data';

const ServiceCarousal = () => {
  const breakpoints = {
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
    <Fragment>
      <div className="row mb-10">
        <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center">
          <h2 className="display-4">Specialized Treatments & Services We Offer</h2>
        </div>
      </div>
      <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center ">
        <div className="swiper-container grid-view nav-bottom nav-color mb-14 text-center">
          <Carousel pagination={false} className="overflow-hidden pb-2" breakpoints={breakpoints}>
            {specialities.map((item) => (
                <div className="card shadow-lg" key={item.id}>
                  <figure className="card-img-top ">
                    <Image
                      src={item.sec1Img}
                      alt={`${item.title} | Patel Nursing Home`}
                      layout="fill"
                      className="position-static"
                    />
                  </figure>

                  <div className="card-body p-2">
                    <Link href={item.url} className="link">
                      <h3 className="fs-21 mb-1">{item.title}</h3>
                    </Link>
                  </div>
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    </Fragment>
  );
};

export default ServiceCarousal;
