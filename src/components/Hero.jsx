const Hero = () => {
  return (
    <div className="wrapper">
      <div className="swiper-hero">
        <div
          className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
          style={{
            backgroundImage: 'url("/img/hero-bg.webp")',
            backgroundPosition: 'center center'
          }}
        >
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-7 text-center text-lg-start justify-content-center align-self-center align-items-start">
                <p className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                  Multi-specialty Hospital
                </p>

                <p className="fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                  Delivering Exceptional Medical Care Across a Wide Range of Specialties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="divider text-white mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70">
            <path fill="currentColor" d="M1440,70H0V45.16a5762.49,5762.49,0,0,1,1440,0Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
