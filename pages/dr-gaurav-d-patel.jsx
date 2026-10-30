import { Fragment } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import PageProgress from 'components/PageProgress';
import Head from 'next/head';
import About from 'components/About';
import { drGaurav } from '../src/data';
import BulletPoints from 'components/BulletPoints';
import Services16 from 'components/Services16';

const DrGauravDPatel = () => {
  return (
    <Fragment>
      <PageProgress />
      <Head>
        <title>About Dr. Gaurav D. Patel | Patel Nursing Home</title>
        <meta
          name="description"
          content="Learn about Dr. Gaurav D. Patel and the exceptional care offered at Patel Nursing Home. Your health is our priority. Book your appointment now!"
        />
        <link rel="canonical" href="https://www.patelnursinghome.in/dr-gaurav-d-patel" />
      </Head>
      <Breadcrumb className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 breadcrumbs">
        <div className="overlay"></div>
        <div className="text-center box">
          <h1 className="fs-48 text-main">Dr Gaurav D Patel</h1>
        </div>
      </Breadcrumb>
      <main className="content-wrapper">
        <section className="wrapper bg-white">
          <div className="container py-10 py-md-12">
            <About
              imgPosition="right"
              headingH2="About Dr. Gaurav D. Patel"
              src="/img/about/dr-gaurav-d-patel.webp"
              para="Dr. Gaurav Patel is one of the best and most trusted surgical oncologists in Mumbai. He brings expertise to provide comprehensive care for patients with cancer, including tumors and related health disorders. His prime focus is on surgery and to give a better quality of life to all his patients."
              para2="Renowned surgeon and consultant Dr. Gaurav practices in the prestigious Bombay Hospital & Medical Research Center, Marine lines, Mumbai, as well as the Patel Nursing Home in Andheri. He is extremely skilled and specialized in carrying out cancer surgery treatments, from the simplest to the most complex surgeries, and has over ten years of expertise."
              para3="Dr Gaurav Patel actively contributes towards the DrNB Surgical program in training and guiding young postgraduates in Bombay Hospital. He has various publications on interesting cancer topics in renowned national and international journals"
            />
          </div>
        </section>
        <section className="wrapper bg-gray">
          <div className="container py-10 py-md-12">
            <BulletPoints
              heading={drGaurav.sec1Heading}
              arr={drGaurav.sec1List}
              icon={'uil-award'}
              position={'start'}
            />
          </div>
        </section>
        <section className="wrapper">
          <div className="container py-10 py-md-12">
            <BulletPoints heading={drGaurav.sec2Heading} arr={drGaurav.sec2List} icon={'uil-trophy'} />
          </div>
        </section>
        <section className="wrapper bg-gray">
          <div className="container py-10 py-md-12">
            <BulletPoints heading={drGaurav.sec3Heading} arr={drGaurav.sec3List} icon={'uil-shield-check'} />
          </div>
        </section>
        <section className="wrapper bg-white">
          <div className="container py-12 py-md-14">
            <Services16 list={drGaurav.sec4List} heading={drGaurav.sec4Heading} />
          </div>
        </section>
        <section className="wrapper bg-gray">
          <div className="container py-12 py-md-14">
            <div className="text-center mb-10">
              <h3 className="mb-1 fs-14 text-second text-uppercase ">Book an Appointment</h3>
              <h2 className="display-4 mb-3">Hospital's Timing</h2>
            </div>
            <div className="row gx-md-15 gx-lg-6 gy-5  justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
                <div className="card shadow-lg w-100 flex-grow-1">
                  <div className="card-body">
                    <h3 className="text-center">Bombay Hospital</h3>
                    <div className="d-flex mb-3 justify-content-center">
                      <i className="uil uil-location-pin-alt fs-32 text-blue bg-white" />
                      <address className="mt-2 ms-5">
                        12, Vitthaldas Thackersey Marg, near Liberty cinema, New Marine Lines, Marine Lines, Mumbai,
                        Maharashtra 400020.
                      </address>
                    </div>
                    <div className="d-flex mb-3 ">
                      <i className="uil uil-phone-volume fs-32 text-blue bg-white" />
                      <p className="fs-18 text-center mail mt-2 ms-5">
                        <a href="tel:+919372459691">+91 93724 59691</a>
                        <br />
                        <a href="tel:+919082099953">+91 90820 99953</a>
                      </p>
                    </div>
                    <div className="d-flex mb-3">
                      <i className="uil uil-clock fs-32 text-blue bg-white" />
                      <p className="mt-2 ms-5" style={{ whiteSpace: 'nowrap', fontSize: 'clamp(0.75rem, 1.1vw, 0.9rem)' }}>Monday To Saturday - 10am to 2pm.</p>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1909121.793419098!2d73.03474931270594!3d20.841658034282965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e00d250293%3A0xfebacae0844e5091!2sBombay%20Hospital%20%26%20Medical%20Research%20Centre!5e0!3m2!1sen!2sin!4v1725017961449!5m2!1sen!"
                        width="100%"
                        height="300"
                        className="border rounded"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
                <div className="card shadow-lg w-100 flex-grow-1">
                  <div className="card-body">
                    <h3 className="text-center">Patel Nursing Home</h3>
                    <div className="d-flex mb-3 justify-content-center">
                      <i className="uil uil-location-pin-alt fs-32 text-blue bg-white" />
                      <address className="mt-2 ms-5">
                        B, Vishal Apartment, Sir M. V. Road,, Andheri (East), Mumbai, Maharashtra 400069.
                      </address>
                    </div>
                    <div className="d-flex mb-3">
                      <i className="uil uil-phone-volume fs-32 text-blue bg-white" />
                      <p className="fs-18 text-center mail mt-2 ms-5">
                        <a href="tel:+919372459691">+91 93724 59691</a>
                        <br />
                        <a href="tel:+919082099953">+91 90820 99953</a>
                      </p>
                    </div>
                    <div className="d-flex mb-3 ">
                      <i className="uil uil-clock fs-32 text-blue bg-white" />
                      <p className="mt-2 ms-5" style={{ whiteSpace: 'nowrap', fontSize: 'clamp(0.75rem, 1.1vw, 0.9rem)' }}>Monday To Saturday - 5pm to 7:30pm.</p>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7542958250783!2d72.84983707596743!3d19.11843198209491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c82d62b96a83%3A0x1823800a6fb31b0a!2sPatel%20Nursing%20Home!5e0!3m2!1sen!2sin!4v1724494549660!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        className="border rounded"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
                <div className="card shadow-lg w-100 flex-grow-1">
                  <div className="card-body">
                    <h3 className="text-center">Holy Spirit Hospital</h3>
                    <div className="d-flex mb-3 justify-content-center">
                      <i className="uil uil-location-pin-alt fs-32 text-blue bg-white" />
                      <address className="mt-2 ms-5">
                        Mahakali Caves Rd, Sher E Punjab Colony, Andheri East, Mumbai, Maharashtra 400093.
                      </address>
                    </div>
                    <div className="d-flex mb-3">
                      <i className="uil uil-phone-volume fs-32 text-blue bg-white" />
                      <p className="fs-18 text-center mail mt-2 ms-5">
                        <a href="tel:+919372459691">+91 93724 59691</a>
                        <br />
                        <a href="tel:+919082099953">+91 90820 99953</a>
                      </p>
                    </div>
                    <div className="d-flex mb-3 ">
                      <i className="uil uil-clock fs-32 text-blue bg-white" />
                      <p className="mt-2 ms-5" style={{ whiteSpace: 'nowrap', fontSize: 'clamp(0.75rem, 1.1vw, 0.9rem)' }}>Tuesday To Friday - 3pm to 5pm.</p>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.3399419988805!2d72.86511800716137!3d19.127450765808305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c827a060a6bb%3A0x81664138aa674942!2sHoly%20Spirit%20Hospital%20%26%20Research%20Centre!5e0!3m2!1sen!2sin!4v1793346028142!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        className="border rounded"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default DrGauravDPatel;
