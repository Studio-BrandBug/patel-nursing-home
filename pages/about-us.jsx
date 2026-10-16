import { Fragment } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import PageProgress from 'components/PageProgress';
import Head from 'next/head';
import Facts3 from 'components/Facts3';
import About from 'components/About';
import About25 from 'components/About25';
import Services16 from 'components/Services16';
import { services } from '../src/data';

const AboutUS = () => {
  return (
    <Fragment>
      <PageProgress />
      <Head>
        <title>About Patel Nursing Home | Consultant Surgeon</title>
        <meta
          name="description"
          content="Experience top-notch healthcare at Patel Nursing Home. Our consultant surgeons in Mumbai, are here to help. Get in touch to schedule appointment!"
        />
        <link rel="canonical" href="https://www.patelnursinghome.in/about-us" />
      </Head>
      <Breadcrumb className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 breadcrumbs">
        <div className="overlay"></div>
        <div className="text-center box">
          <h1 className="fs-48 text-main">About Patel Nursing Home</h1>
        </div>
      </Breadcrumb>
      <main className="content-wrapper mt-15">
        <section className="wrapper bg-white">
          <div className="container py-10 py-md-12">
            <About
              imgPosition="right"
              headingH2="Consultant Surgeon"
              src="/img/multispeciality-hospital-in-andheri-easts.webp"
              para="Patel Nursing Home is renowned for its dedication to quality when it comes to surgical proficiency. With years of experience and a proven track record of positive results, our consultant surgeons are among the best in the business. You can have confidence knowing that skilled professionals are taking care of your safety and well-being, whether you need a simple procedure or a complicated surgery. Using the most recent methods and tools to ensure accuracy and effectiveness, our surgical team is skilled in carrying out a variety of procedures. Our surgeons take the time to listen to your worries and help you through each step of the procedure because we believe in putting the needs of the patient first. This ensures that you get the best care possible."
            />
          </div>
        </section>
        <section className="wrapper mb-10 mb-md-12">
          <div className="container">
            <Facts3 />
          </div>
        </section>
        <About25 />
        <section className="wrapper bg-white">
          <div className="container py-12 py-md-14">
            <Services16 list={services} heading="Why We're Your Best Choice for Care" subHeading="Why Choose" />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default AboutUS;
