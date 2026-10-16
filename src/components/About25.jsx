import Image from 'next/image';
import NextLink from 'components/NextLink';
const About25 = () => {
  return (
    <section id="about">
      <div className="wrapper primary-bg-soft  ">
        <div className="container py-14 py-md-16">
          <div id="dr-dh" className="row gx-lg-8 gx-xl-12 gy-10  align-items-center">
            <div className={`col-lg-6 position-relative order-lg-2`}>
              <figure className="rounded shadow-lg">
                <Image
                  src="/img/about/dr-d-h-patel.webp"
                  alt={`Dr. D. H. Patel| Patel Nursing Home`}
                  layout="fill"
                  className="position-static"
                />
              </figure>
            </div>

            <div className="col-lg-6">
              <h2 className="display-2 mb-3">Dr. D. H. Patel </h2>
              <p className="text-justify">
              One of the respected consultants at Patel Nursing Home is Dr. D. H. Patel, who is renowned for his vast experience and kind approach to patient care. With a strong dedication to offering all-encompassing medical care, Dr. Patel has established a stellar reputation in his industry. His ability to accurately diagnose and carefully treat a wide range of medical conditions has earned him great respect. He is regarded as a reliable healthcare provider neighborhood by his patients, who value his thoroughness, patience, and commitment to their wellbeing. Dr. D. H. Patel maintains the greatest standards of medical care at Patel Nursing Home, making sure that each patient gets the consideration and care they need.
              </p>
              <NextLink
                title="Know More"
                href="/dr-d-h-patel"
                className="btn secondary-bg text-white mt-2 mb-10 mb-md-0"
              />
            </div>
          </div>

          <div id="dr-gaurav" className="row gx-lg-8 gx-xl-12 gy-10  align-items-center mt-md-10 mb-18 mb-md-0">
            <div className={`col-lg-6 position-relative `}>
              <figure className="rounded shadow-lg">
                <Image
                  src="/img/about/dr-gaurav-d-patel.webp"
                  alt={`Dr. Gaurav D. Patel | Patel Nursing Home`}
                  layout="fill"
                  className="position-static"
                />
              </figure>
            </div>

            <div className="col-lg-6 order-lg-2">
              <h2 className="display-2 mb-3">Dr. Gaurav D. Patel</h2>
              <p className="text-justify">
              With a remarkable background that includes both an MS and a DrNB in Surgical Oncology, Dr. Gaurav D. Patel is a highly skilled consultant at Patel Nursing Home. His dedication to delivering individualized, patient-centered care is equally as strong as his proficiency in cancer surgery. In order to ensure the best results for his patients, Dr. Patel is renowned for his careful approach to treatment, utilizing the most recent advancements in surgical techniques. In order to provide the best possible treatment options, he is committed to remaining at the forefront of oncology care and is always expanding his knowledge and skill set. Dr. Gaurav D. Patel is a cornerstone of medical excellence at Patel Nursing Home, offering those in need compassionate care.
              </p>
              <NextLink
                title="Know More"
                href="/dr-gaurav-d-patel"
                className="btn secondary-bg text-white mt-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About25;
