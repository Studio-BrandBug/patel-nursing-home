import Image from 'next/image';

const About = ({ imgPosition, heading, headingH2, src, para, noShadow, para2, para3, para4 }) => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10  align-items-center">
      <div className={`col-lg-6 position-relative ${imgPosition === 'right' ? 'order-lg-2' : ''} `}>
        <div
          className="shape bg-dot primary rounded rellax w-18 h-18"
          style={{
            top: '-2rem',
            left: '0rem',
            zIndex: 0
          }}
        />
        <figure className={`rounded ${noShadow ? '' : 'shadow-lg'}`}>
          <Image src={src} alt={`${heading} | Patel Nursing Home`} layout="fill" className="position-static" />
        </figure>
      </div>

      <div className="col-lg-6">
      {headingH2 && <h2 className="display-2 mb-3 d-none d-md-block">{headingH2}</h2>}
        {heading && <h2 className="display-2 mb-3">{heading}</h2>}
        <p className="text-justify">{para}</p>
        {para2 && <p className="text-justify">{para2}</p>}
        {para3 && <p className="text-justify">{para3}</p>}
        {para4 && <p className="text-justify">{para4}</p>}

      </div>
    </div>
  );
};

export default About;
