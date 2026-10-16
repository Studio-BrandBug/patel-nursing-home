import { Fragment, useEffect } from 'react';
import PageProgress from 'components/PageProgress';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { specialities } from './../src/data';
import { Breadcrumb } from 'react-bootstrap';
import About from 'components/About';
import EnquiryForm from 'components/EnquiryForm';
import BulletPoints from 'components/BulletPoints';

const serviceArr = [
  '/onco-surgery',
  '/medical-oncology',
  '/urology-and-andrology',
  '/orthopedic',
  '/ent',
  '/pulmonology',
  '/pediatrics',
  '/general-surgery-and-minimal-invasive-surgery',
  '/general-medicine-and-infectious-disease',
  '/infectious-disease',
  '/gynecology',
  '/plastic-surgery',
  '/nephrology'
];

const Specialities = () => {
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    if (!slug) return;

    const path = `/${slug}`;
    if (!serviceArr.includes(path)) {
      router.replace('/404');
    }
  }, [slug, router]);
  const slugToMatch = slug;
  const matchedSpeciality = specialities.find((service) => service.url === slugToMatch);
  const canonicalUrl = `https://www.patelnursinghome.in/${slug}`;
  const defaultSpeciality = specialities[0];
  const speciality = matchedSpeciality || defaultSpeciality;

  const convertString = (input) => {
    return input.replace(' / ', ' (') + ')';
  };

  return (
    <Fragment>
      <PageProgress />
      <Head>
        <title>{speciality.metaTitle}</title>
        <meta name="description" content={speciality.description} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Breadcrumb className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 breadcrumbs">
        <div className="overlay"></div>
        <div className="text-center box">
          <h1 className="fs-48 text-main">{speciality.title}</h1>
        </div>
      </Breadcrumb>
      <main className="content-wrapper">
        {/* Section 1 */}
        <section className="wrapper bg-white">
          <div className="container py-10 py-md-12">
            <About
              imgPosition="left"
              headingH2={speciality.title}
              src={speciality.sec1Img}
              para={speciality.sec1Para1}
              para2={speciality.sec1Para2}
              para3={speciality.sec1Para3}
            />
          </div>
        </section>
        {/* Section 2 */}
        <section className="wrapper bg-gray">
          <div className="container py-10 py-md-12">
            <BulletPoints heading="Specialized Treatments & Services We Offer" arr={speciality.sec2List} />{' '}
          </div>
        </section>
        {/* Section 3 */}
        <section className="wrapper bg-light ">
          <EnquiryForm />
        </section>
      </main>
    </Fragment>
  );
};

export default Specialities;
