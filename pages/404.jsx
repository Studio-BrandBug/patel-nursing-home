import { Fragment } from 'react'; // -------- custom component -------- //
import Image from 'next/image';
import NextLink from 'components/NextLink';
import PageProgress from 'components/PageProgress';

const NotFound = () => {
  return (
    <Fragment>
      <PageProgress />
      <main className="content-wrapper">
        <section className="wrapper bg-light">
          <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
            <div className="row justify-content-center">
              <div className=" col-md-8 d-flex justify-content-center">
                <Image
                  width={550}
                  height={350}
                  src="/img/404.webp"
                  className="mb-10"
                  alt="Page Not Found | Patel Nursing Home"
                />
              </div>

              <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
                <h1 className="mb-3">Page Not Found</h1>
                <p className="lead mb-7 px-md-12 px-lg-5 px-xl-7 fs-18">
                  Oops! Looks like you’ve hit a dead end. Please Check The Page url.
                </p>

                <NextLink title="Go to Homepage" href="/" className="btn primary-bg text-white" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default NotFound;
