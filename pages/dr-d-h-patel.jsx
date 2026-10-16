import { Fragment } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import PageProgress from 'components/PageProgress';
import Head from 'next/head';
import About from 'components/About';
import Services16 from 'components/Services16';
import { drDhiraj } from '../src/data';
import BulletPoints from 'components/BulletPoints';

const DrDHPatel = () => {
  return (
    <Fragment>
      <PageProgress />
      <Head>
        <title>About Dr. D. H. Patel | Patel Nursing Home</title>
        <meta
          name="description"
          content="Learn about Dr. D. H. Patel's expertise and dedication at Patel Nursing Home. Experience quality care at its best. Contact us for appointments!"
        />
        <link rel="canonical" href="https://www.patelnursinghome.in/dr-d-h-patel" />
      </Head>
      <Breadcrumb className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 breadcrumbs">
        <div className="overlay"></div>
        <div className="text-center box">
          <h1 className="fs-48 text-main">Dr. D. H. Patel</h1>
        </div>
      </Breadcrumb>
      <main className="content-wrapper">
        <section className="wrapper bg-white">
          <div className="container py-10 py-md-12">
            <About
              imgPosition="right"
              headingH2="About Dr. D. H. Patel"
              src="/img/about/dr-d-h-patel.webp"
              para="Dr. Dhiraj H. Patel is a highly esteemed general and laparoscopic surgeon with 38 years of dedicated practice at Patel Nursing Home. He began his medical journey with an MBBS from Grant Medical College in 1978, followed by an MS in General Surgery from the same institution in 1982. In 1987, Dr. Patel was honored with a Fellowship from the International College of Surgeons, reflecting his commitment to advancing surgical practice."
              para2="Dr. Patel further enhanced his expertise with advanced laparoscopic surgery training from Kiel University in Germany. His extensive experience spans across multiple renowned hospitals, including Criticare Hospital, Seven Hills Hospital, and BSES Hospital, where he serves as a visiting surgeon. In addition to his clinical work, he provides free medical services at Lions Medical Centre, showcasing his dedication to community service."
              para3="Dr. Patel's professional affiliations include membership in the Andheri Medical Association, where he has been an active committee member, as well as the Association of Medical Consultants, the Association of Surgeons of India, and the Indian Medical Association."
              para4="In recognition of his outstanding contributions to the field, Dr. Patel received the Excellent Surgeon of the Year Award in 2012. On National Doctors Day 2024, he was felicitated by Ravindra Waikar (Member of Parliament) and Deepak Kesarkar (Cabinet Minister for the Ministry of Education and Ministry of Marathi Language), underscoring his esteemed status in the medical community."
            />
          </div>
        </section>
        <section className="wrapper bg-gray">
          <div className="container py-10 py-md-12">
            <BulletPoints
              heading={drDhiraj.sec1Heading}
              arr={drDhiraj.sec1List}
              icon={'uil-award'}
              position={'start'}
            />
          </div>
        </section>
        <section className="wrapper">
          <div className="container py-10 py-md-12">
            <BulletPoints heading={drDhiraj.sec2Heading} arr={drDhiraj.sec2List} icon={'uil-trophy'} />
          </div>
        </section>
        <section className="wrapper bg-gray">
          <div className="container py-10 py-md-12">
            <BulletPoints heading={drDhiraj.sec3Heading} arr={drDhiraj.sec3List} icon={'uil-shield-check'} />
          </div>
        </section>
        <section className="wrapper bg-white">
          <div className="container py-12 py-md-14">
            <Services16
              list={drDhiraj.sec4List}
              heading={drDhiraj.sec4Heading}
            />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default DrDHPatel;
