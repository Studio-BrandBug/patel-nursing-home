import { Fragment } from 'react';
import Hero from 'components/Hero';
import About from 'components/About';
import Portfolio8 from 'components/Portfolio8';
import Portfolio1 from 'components/Portfolio1';
import Testimonial13 from 'components/Testimonial13';
import PageProgress from 'components/PageProgress';
import useProgressbar from 'hooks/useProgressbar';
import EnquiryForm from 'components/EnquiryForm';
import Head from 'next/head';
import { doctors } from '../src/data';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  useProgressbar();
  return (
    <Fragment>
      <PageProgress />
      <Head>
        <title>Multispeciality Hospital | Patel Nursing Home</title>
        <meta
          name="description"
          content="Patel Nursing Home is your trusted multispeciality hospital in Mumbai. Get quality medical care from experienced professionals. Book appointment!"
        />
        <link rel="canonical" href="https://patelnursinghome.in" />
      </Head>
      <main className="content-wrapper overflow-hidden">
        <Hero />
        <section className="wrapper bg-white">
          <div className="container py-10 py-md-12">
            <About
              imgPosition="left"
              heading="Multispecialty Hospital"
              src="/img/multispeciality-hospital-in-andheri-easts.webp"
              para="Patel Nursing Home, is a top multispecialty hospital committed to offering top-notch medical care in a variety of medical specialties. Modern technology is present throughout our facility, and our team of highly qualified professionals is dedicated to providing each patient with individualized care. We provide a wide range of services to meet the various healthcare needs of our community, from simple checkups to intricate surgeries. We ensure that you receive the best care possible in a welcoming and caring environment thanks to our patient-centric approach and cutting-edge infrastructure. Patel Nursing Home is your go-to healthcare provider for specialized care as well as preventive care."
            />
          </div>
        </section>
        <Portfolio8 />
        <section className="wrapper">
          <div className="container py-10 py-md-12 ">
            <div className="row">
              <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center mb-10">
                <h2 className="display-4">Meet The Director and Co-Director</h2>
              </div>
            </div>
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center justify-content-center">
              {doctors.map((item) => (
                <div className="  col-md-5" key={item.id}>
                  <figure className="card-img-top shadow-lg">
                    <Image
                      className="img-fluid"
                      width={250}
                      height={250}
                      src={item.img}
                      alt={`${item.name} | Patel Nursing Home`}
                    />
                  </figure>

                  <div className=" p-2 shadow-lg rounded">
                    <Link href={item.url} className="link">
                      <h3 className="fs-24 mb-1 text-center">{item.name}</h3>
                    </Link>
                    <p className="text-justify p-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Testimonial13 />
        <section className="wrapper bg-light">
          <div className="container py-10 py-md-12">
            <About
              imgPosition="left"
              noShadow="true"
              heading="Our Certificates & Achievements "
              src="/img/achivements.webp"
              para="Patel Nursing Home, established in 1985, is well-known for its expertise in medical field as evidenced by ISO 9001:2015 QMS accreditation, which demonstrates our dedication to quality management and patient care. Our eminent doctors are highly trained, with remarkable accomplishments such as specialized training, professional recognition, and certificates in their respective disciplines. For example, Dr. Dhiraj H. Patel, Director of our hospital, has been recognized for his outstanding contributions to general and laparoscopic surgery, receiving the 'Excellent Surgeon of the Year' award in 2012 and being honored by prominent figures such as Ravindra Waikar and Deepak Kesarkar on National Doctors' Day 2024. Similar we have dedicated Onco-Surgeon Dr Gaurav Patel who heads the cancer department in our hospital with his expertise brings multi-disciplinary personlised approach to cancer tailored for each patient. Our General Medicine and Infectious Disease team is well-known for its sophisticated diagnostic skills and excellent treatment plans for bacterial, viral, fungal, and parasitic illnesses. Patel Nursing Home is committed to maintaining the best levels of care and patient safety, making it the top choice for multi- speciality services."
            />
          </div>
        </section>
        <section className="wrapper bg-gray">
          <div className="container py-12 py-md-14">
            <Portfolio1 />
          </div>
        </section>
        <section className="wrapper bg-light ">
          <EnquiryForm />
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
