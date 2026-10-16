import { Fragment } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import PageProgress from 'components/PageProgress';
import { fecilities } from '../src/data';
import Head from 'next/head';
import ServiceCarousal from 'components/ServiceCarousal';

const Facilities = () => {
  const midIndex = Math.ceil(fecilities.length / 2);
  const leftItems = fecilities.slice(0, midIndex);
  const rightItems = fecilities.slice(midIndex);
  return (
    <Fragment>
      <PageProgress />
      <Head>
        <title>Our Premier Facilities | Patel Nursing Home</title>
        <meta
          name="description"
          content="Patel Nursing Home offers premier facilities designed for comfort and care. Trust us to provide a nurturing environment for your family members. Contact us now!"
        />
        <link rel="canonical" href="https://www.patelnursinghome.in/facilities" />
      </Head>
      <Breadcrumb className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 breadcrumbs">
        <div className="overlay"></div>
        <div className="text-center box">
          <h1 className="fs-48 text-main">Our Premier Facilities</h1>
        </div>
      </Breadcrumb>
      <main className="content-wrapper">
        <section className="wrapper bg-gray">
          <div className="container py-10 py-md-12">
            <h2 className="display-4 text-center">Premier Facilities We Provides</h2>
            <div className="row gx-lg-8 gx-xl-12 gy-10 mt-5">
              <div className="col-md-6">
                {leftItems.map((item) => (
                  <div key={item.no} className="card-body p-1">
                    <div className="d-flex align-items-center mb-1">
                      <div>
                        <span
                          className="icon btn btn-circle btn-md btn-soft-primary border pe-none me-4"
                          style={{ width: '2rem', height: '2rem' }}
                        >
                          {item.no}
                        </span>
                      </div>
                      <div>
                        <h4 className="m-0">{item.text}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="col-md-6">
                {rightItems.map((item) => (
                  <div key={item.no} className="card-body p-1">
                    <div className="d-flex align-items-center mb-1">
                      <div>
                        <span
                          className="icon btn btn-circle btn-md btn-soft-primary border pe-none me-4"
                          style={{ width: '2rem', height: '2rem' }}
                        >
                          {item.no}
                        </span>
                      </div>
                      <div>
                        <h4 className="m-0">{item.text}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper ">
          <div className="container py-10 py-md-12 ">
            <ServiceCarousal />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Facilities;
