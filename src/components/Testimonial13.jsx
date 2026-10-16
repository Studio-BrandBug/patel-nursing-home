import Carousel from 'components/Carousel';

const testimonialList3 = [
  {
    id: 1,
    name: 'Muskan Vishwakarma',
    review: `Very good services. Excellent patient care. Well behaved and experienced staff. All safety measures and precaution. All doctor's And hospital staff is very good. Thanku all staff Patel nursing home,,❤️`
  },
  {
    id: 2,
    name: 'Tejas Makwana',
    review: `Best experience. The doctors provide the best care and are very professional. Reasonably priced. Strongly advised. Excellent service and a helpful attitude from the entire Nurses and staff. Please come for improved care.`
  },
  {
    id: 3,
    name: 'Soni Shinde',
    review: `The service of the staff is excellent, and from time to time daily routine checkups of patients, seniors, and junior Doctors have good treatment, this is my latest experience`
  },
  {
    id: 4,
    name: 'Jyoti Patel',
    review: `Dr Dhirubhai Patel and Dr Gaurav Patel....one of the best doctors.... very knowledgeable, caring, experienced, down to earth person s...
Makes patient s comfortable and listens to patient patiently, understand the problem and give perfect diagnosis and treatment...very supportive...
As the doctor s,so is the nursing staff very caring and always wear smile....homely atmosphere in the hospital..
Thank you Patel Nursing home...`
  },
  {
    id: 5,
    name: 'Saurabh Kumar Dubey',
    review: `Excilent service, excilent treatment from Dr dH Patel and  careful sister also, overall I am happy with hospital and hospital staff and service.`
  },
  {
    id: 6,
    name: 'Gayatri Bhoir',
    review: `Dr. D. H. Patel is very polite and explains the treatment to be followed patiently. Provides comfort through nice approach. Staff is so cooperative.`
  },
  {
    id: 7,
    name: 'Aditya Reelkar',
    review:
      'It is one of the best nursing homes. One of my relatives was not well and we were very satisfied with the treatment and care offered. Dr D H Patel and his team of doctors are excellent. Nursing staff is good and co-operative. Overall a good experience at this nursing home.'
  }
];

const Testimonial13 = () => {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay bg-overlay-300 text-white"
      style={{
        backgroundImage: 'url(/img/testimonial.webp)'
      }}
    >
      <div className="container py-14 py-md-17">
        <div>
          <h2 className="display-4 mb-5 text-white text-center bg-white">Hear from Our Patients</h2>
        </div>
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <div className="swiper-container dots-light dots-closer text-center mb-6">
              <Carousel slidesPerView={1} navigation={false} grabCursor>
                {testimonialList3.map(({ name, image, designation, review, id }) => (
                  <blockquote className="border-0 fs-lg mb-0" key={id}>
                    <p>“{review}”</p>
                    <div className="blockquote-details justify-content-center">
                      <div className="info">
                        <h5 className="mb-1 text-white fs-20 fw-bold">{name}</h5>
                      </div>
                    </div>
                  </blockquote>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial13;
