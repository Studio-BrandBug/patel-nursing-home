import { Fragment } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import PageProgress from 'components/PageProgress';
import EnquiryForm from 'components/EnquiryForm';
import Head from 'next/head';

const Appointmet = () => {
  return (
    <Fragment>
      <PageProgress />
      <Head>
        <title>Book an Appointment | Patel Nursing Home</title>
        <meta
          name="description"
          content="Schedule your visit at Patel Nursing Home today! Our caring staff is ready to assist you. Click here to book your appointment now."
        />
        <link rel="canonical" href="https://www.patelnursinghome.in/book-appointment" />
      </Head>
      <Breadcrumb className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 breadcrumbs">
        <div className="overlay"></div>
        <div className="text-center box">
          <h1 className="fs-48 text-main">Book Appointment</h1>
        </div>
      </Breadcrumb>
      <main className="content-wrapper">
        <section className="wrapper bg-light ">
          <EnquiryForm />
        </section>
      </main>
    </Fragment>
  );
};

export default Appointmet;
