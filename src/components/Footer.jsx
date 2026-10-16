import NextLink from 'components/NextLink';

import { specialitiesLink, usefulLinks, footerAbout } from '../data.js'; // common links section

import ChatGPTLogo from "./chatgpt.svg";
import ClaudeLogo from "./claude.svg";
import GeminiLogo from "./gemini.svg";
import PerplexityLogo from "./perplexity.svg";

const widget = (list, title) => {
  return (
    <div className="widget">
      <h3 className="widget-title fs-24 mb-3">{title}</h3>
      <ul className="list-unstyled text-reset mb-0">
        {list.map(({ url, title, id }) => (
          <li key={id}>
            <NextLink href={url} title={title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {

  const prompt="Navigate the information available on https://patelnursinghome.in and provide a comprehensive overview of Patel Nursing Home. Explain the hospital's medical specialties, treatments, surgical services, expert doctors, facilities, patient care approach, consultation process, and healthcare philosophy. Highlight its advanced medical services, diagnostic capabilities, emergency and inpatient care, quality standards, and what makes Patel Nursing Home a trusted multispecialty hospital. Present the information in a clear, factual, and well-structured format using the official website as the primary source."
  const openAI = (type) => {
  const encoded = encodeURIComponent(prompt);

  const urls = {
    chatgpt: `https://chatgpt.com/?q=${encoded}`,
    claude: `https://claude.ai/new?q=${encoded}`,
    gemini: `https://www.google.com/search?q=${encoded}&udm=50`,
    perplexity: `https://www.perplexity.ai/search?q=${encoded}`,
  };

  window.open(urls[type], "_blank");
};

  return (
    <footer className=" border-top secondary-bg ">
      <div className="container pb-7 mt-12">
        <div className="row gx-10 justify-content-around">
          <div className="col-md-3 col-lg-3  mt-md-5 mt-lg-0 mt-10">
            <div className="widget">
              <h3 className="widget-title fs-24  mb-3">Contact Info</h3>
              <div className="d-flex mb-3 align-items-start">
                <i className="uil uil-location-pin-alt fs-30 text-white" />
                <address className="text-white ms-2 m-0 mt-1">
                  B, Vishal Apartment, Sir M. V. Road,, Andheri (East), Mumbai, Maharashtra 400069.
                </address>
              </div>
              <div className="d-flex mb-3 align-items-center">
                <i className="uil uil-envelope fs-26 text-white " />
                <a href="mailto:pnhandheri@gmail.com " className="link-body ms-2 text-white">
                  pnhandheri@gmail.com
                </a>
              </div>
              <div className="d-flex">
                <i className="uil uil-phone-volume fs-26 text-white" />
                <p className="mt-1 ms-2 fs-18">
                  <a href="tel:+919892056258" className="text-white">
                    +91 98920 56258
                  </a>
                  <br />
                  <a href="tel:+919372459691" className="text-white">
                    +91 93724 59691
                  </a>
                  <br />
                  <a href="tel:+919082099953" className="text-white">
                    +91 90820 99953
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-2  mt-md-5 mt-lg-0 mt-10 text-white">
            {widget(usefulLinks, 'Useful Links')}
          </div>
          <div className="col-md-4 col-lg-3  mt-md-5 mt-lg-0 mt-10 text-white">
            {widget(specialitiesLink, 'Specialities')}
          </div>
          <div className="col-md-4 col-lg-3  mt-md-5 mt-lg-0 mt-10 text-white">
            {widget(footerAbout, 'Get to Know About Us')}
             <h3 className="widget-title fs-24 mb-3 mt-5">Ask AI About Patel Nursing Home</h3>
              <div className="footer-ai-icons">

                <button className="ai-btn" onClick={() => openAI("chatgpt")}>
    <ChatGPTLogo className="ai-logo"
    />
  </button>

  <button className="ai-btn" onClick={() => openAI("claude")}>
    <ClaudeLogo className="ai-logo" />
  </button>

  <button className="ai-btn" onClick={() => openAI("gemini")}>
    <GeminiLogo className="ai-logo" />
  </button>

  <button className="ai-btn" onClick={() => openAI("perplexity")}>
    <PerplexityLogo className="ai-logo" />
  </button>

              </div>
          </div>    
        </div>

        <hr className="mt-4 mt-md-4 mb-7" />

        <div className="d-md-flex align-items-center justify-content-center">
          <p className="mb-2 mb-lg-0 text-white">© 2026 Patel Nursing Home. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
