import { Fragment } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import PageProgress from 'components/PageProgress';
import ContactForm from 'components/ContactForm';
import Head from 'next/head';

const ContactUs = () => {
  return (
    <Fragment>
      <PageProgress />
      <Head>
        <title>Contact Us | Patel Nursing Home</title>
        <meta
          name="description"
          content="We're here for you! Connect with Patel Nursing Home for enquiries about our services. Your peace of mind is our priority. Contact us today for best services."
        />
        <link rel="canonical" href="https://www.patelnursinghome.in/contact-us" />
      </Head>
      <Breadcrumb className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 breadcrumbs">
        <div className="overlay"></div>
        <div className="text-center box">
          <h1 className="fs-48 text-main">Contact Us</h1>
        </div>
      </Breadcrumb>
      <main className="content-wrapper">
        <section className="wrapper bg-light ">
          <ContactForm />
        </section>
      </main>
    </Fragment>
  );
};

export default ContactUs;
