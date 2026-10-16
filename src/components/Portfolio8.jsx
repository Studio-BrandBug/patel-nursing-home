import Link from 'next/link';
import Image from 'next/image'; 
import { specialities } from 'data';

const Portfolio8 = () => {
  return (
    <section className="wrapper bg-gray">
      <div className="container py-10 py-md-12">
        <div className="row mb-8 text-center">
          <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
            <h3 className="mb-1 fs-14 text-second text-uppercase">Specilities</h3>
            <h2 className="display-4 mb-3">Comprehensive Multi-Specialty Care</h2>
          </div>
        </div>

        <div className="grid grid-view projects-masonry">
          <div className="row gx-md-8 gy-10 gy-md-13 isotope justify-content-center">
            {specialities.map(({ id, sec1Img, title, url }) => (
              <div className="project item col-md-6 col-xl-2 product" key={id}>
                <figure className="lift rounded mb-6">
                      <Image
                        width={1300}
                        height={1132}
                        src={sec1Img}
                        alt={`${title} | Patel Nursing Home`}
                        style={{
                          width: '100%',
                          height: 'auto'
                        }}
                      />
                </figure>

                <div className="project-details d-flex justify-content-center flex-column">
                  <div className="post-header">
                    <Link href={`/${url}`} className='link'><h3 className="text-center">{title}</h3></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio8;
