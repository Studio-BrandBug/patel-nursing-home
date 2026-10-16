// Core
import React, { useState } from 'react';
// BootStrap
import { Alert, Container, Col, Row, Form } from 'react-bootstrap';
// Library
import { useRouter } from 'next/router';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import ltrim from 'validator/lib/ltrim';
import rtrim from 'validator/lib/rtrim';
import isEmail from 'validator/lib/isEmail';

const ContactForm = () => {
  const router = useRouter();
  const to_email = 'pnhandheri@gmail.com ';
  const cc_email = 'arkayappsseo@gmail.com,sales@arkayapps.com';
  const title = `Website Contact Form`;
  const subject = `Contact - Patel Nursing Home`;
  const [error, setError] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [subjects, setSubjects] = useState(null);
  const [message, setMessage] = useState(null);
  const template = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Patel Nursing Home</title>
      <style>
          body {
              line-height: 1.4;
              font-family: sans-serif;
              background-color: #f6f6f6;
          }
  
          p {
              margin: 0;
              margin-bottom: 15px;
              font-size: 14px;
              font-weight: normal;
              font-family: sans-serif;
          }
  
          hr {
              border: 0;
              border-bottom: 1px solid #b9b9b9;
              margin: 10px 0;
          }
  
          .logo {
              margin-top: 1rem;
              margin-bottom: 1rem;
              width: 200px;
              height: auto;
          }
  
          .text-center {
              text-align: center !important;
          }
  
          .content {
              margin: 0 auto;
              display: block;
              max-width: 580px;
              padding: 0 10px;
              box-sizing: border-box;
          }
  
          .innerwrap {
              box-sizing: border-box;
              padding: 20px 20px 10px 20px;
              background: #f2f2f2;
          }
  
          .card-header {
              background: #d12421;
              color: #fff;
              text-align: center;
              padding: 20px;
              font-size: 16px;
          }
  
          .shadow-header {
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
  
          .shadow-body {
              box-shadow: 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
          }
  
          .card-header p {
              color: #fff;
              text-align: center;
              font-size: 16px;
              margin-bottom: unset;
          }
  
          .card-body {
              background: #ffffff;
              border-radius: 3px;
              width: 100%;
              box-sizing: border-box;
              padding: 20px;
              border: 2px solid #d12421 !important;
              border: 0;
          }
  
          .card-body p strong {
              color: #333;
          }
  
          .card-body p strong.heading {
              color: #1563ab;
          }
  
          .copyright {
              color: #999999;
              font-size: 12px;
              text-align: center;
              margin-top: 1rem;
              margin-bottom: 1rem;
          }
      </style>
  </head>
  
  <body>
      <div class="content">
          <div class="text-center">
           <img src="https://patelnursinghome.in/img/logo" alt="logo" class="logo">

          </div>
          <div class="card-header">
              <p>You Received Message From Contact Form!</p>
              </div>
              <div  style={{ boxShadow: '0.5rem 1rem rgba(0,0,0,0.15)' }} class="card-body">
              <p><strong>Name : </strong>${name}</p>
              <p><strong>Subject : </strong>${subjects}</p>
              <p><strong>Message : </strong>${message}</p>
              <hr>
              <p><strong class="heading">Contact Information :</strong></p>
              <div class="innerwrap">
                  <p><strong>Mobile No: </strong>${mobile}</p>
                  <p><strong>Email: </strong>${email}</p>
              </div>
          </div>
          <div class="copyright">
              <p>© 2024 Patel Nursing Home.
              All rights reserved.</p>
          </div>
      </div>
  </body>
  
  </html>`;
  const mailError = <p>{error}</p>;

  const handleName = (e) => {
    const value = e.target.value;
    setName(value);
    setError(null);
  };

  const handleEmail = (e) => {
    var value = e.target.value;
    value = ltrim(rtrim(value));
    setEmail(value);
    if (!isEmail(value)) {
      setError(<Alert variant={'danger'}>Please enter a valid email</Alert>);
    } else {
      setError(null);
    }
  };

  const handleMobile = (value) => {
    setMobile(value);
    setError(null);
  };

  const handleSubject = (e) => {
    setSubjects(e.target.value);
    setError(null);
  };

  const handleMessage = (e) => {
    const value = e.target.value;
    setMessage(value);
    setError(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name === null) {
      setError(<Alert variant={'danger'}>Full Name Required</Alert>);
    } else if (email === null) {
      setError(<Alert variant={'danger'}>Email Required</Alert>);
    } else if (subjects === null) {
      setError(<Alert variant={'danger'}>Subject Required</Alert>);
    } else if (mobile === null) {
      setError(<Alert variant={'danger'}>Phone Required</Alert>);
    } else if (message === null) {
      setError(<Alert variant={'danger'}>Message Required</Alert>);
    } else {
      const formData = new FormData();

      formData.append('title', title);
      formData.append('to_email', to_email);
      formData.append('cc', cc_email);
      formData.append('subject', subject);
      formData.append('template', template);

      const headerConfig = {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json'
        }
      };
      const url = 'https://api.sendmail.adhyaynam.in/send-mail/two';
      axios
        .post(url, formData, headerConfig)
        .then((response) => {
          setName(null);
          setEmail(null);
          setSubjects(null);
          setMobile(null);
          setMessage(null);
          router.push('/');
        })
        .catch((error) => {
          console.log(error.response.data.detail);
          if (error.response) {
            console.log(error.response);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log(error);
          }
          setError(<Alert variant={'danger'}>{'Something Went Wrong, Please Try Again Later!'}</Alert>);
        });
    }
  };

  return (
    <div className="contact-form">
      <Container className="py-10 mt-10 ">
        <Row className="justify-content-center shadow-lg gx-10 gy-10">
          <Col lg={8} md={12} xs={12} className="md-ml-10 rounded contact-form1 mt-0 d-flex align-items-center ">
            <div className="border-0 contact-form1">
              <div className="card-body py-5 contact-form1">
                <h2 className="fs-38 mb-3 text-center">Drop Us a Line</h2>
                <p className="lead fs-18 text-center mb-10">
                  Reach out to us from our contact form and we will get back to you shortly
                </p>
                <form className="contact-form" onSubmit={handleFormSubmit}>
                  <div className="messages"></div>
                  <div className="row gx-4">
                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input
                          required
                          type="text"
                          name="name"
                          id="form_name"
                          onChange={handleName}
                          placeholder="Name"
                          className="form-control"
                        />
                        <label htmlFor="form_name">Full Name *</label>
                        <div className="valid-feedback"> Looks good! </div>
                        <div className="invalid-feedback"> Please enter your first name. </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <PhoneInput
                          name="mobile"
                          country={'in'}
                          value={mobile}
                          required
                          onChange={handleMobile}
                          inputProps={{ minLength: 10, maxLength: 16, required: true }}
                        />
                        <div className="valid-feedback"> Looks good! </div>
                        <div className="invalid-feedback"> Please enter your contact number. </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input
                          name="email"
                          type="email"
                          required
                          className="form-control"
                          value={email}
                          minLength="3"
                          maxLength="50"
                          onChange={handleEmail}
                          placeholder="Email"
                        />
                        <label htmlFor="form_email">Email *</label>
                        <div className="valid-feedback"> Looks good! </div>
                        <div className="invalid-feedback"> Please provide a valid email address. </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input
                          required
                          type="text"
                          name="subject"
                          id="form_subject"
                          onChange={handleSubject}
                          placeholder="Subject"
                          className="form-control"
                        />
                        <label htmlFor="form_subject">Subject*</label>
                        <div className="valid-feedback"> Looks good! </div>
                        <div className="invalid-feedback"> Please enter your reason for contact. </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-4">
                        <textarea
                          name="message"
                          message="message"
                          rows="4"
                          placeholder="Message*"
                          className="form-control"
                          required
                          inputProps={{ minLength: 3, maxLength: 200 }}
                          onChange={handleMessage}
                          style={{
                            height: 150
                          }}
                        />
                        <label htmlFor="form_name">Message *</label>
                      </div>
                    </div>

                    <div className="col-12 text-center">
                      <input type="submit" value="Send message" className="btn primary-bg text-white mb-3" />
                      <p className="text-muted fs-18">
                        <strong>*</strong> These fields are required.
                      </p>
                      <p className="text-muted fs-18">{error}</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Col>
          <Col lg={4} md={8} xs={12} className="effect my-auto mr-auto">
            <div className="contact pb-4 p-5">
              <div className="d-flex mb-3 flex-column">
                <div className="d-flex flex-row align-items-center justify-content-center">
                  <i className="uil uil-location-pin-alt fs-32 text-blue bg-white rounded-circle p-2" />
                  <h3 className="fs-20 lh-0">Address :</h3>
                </div>
                <address className=" ms-2 m-0 text-center">
                  B, Vishal Apartment, Sir M. V. Road,, Andheri (East), Mumbai, Maharashtra 400069.
                </address>
              </div>

              <div className="d-flex flex-column">
                {/* <div className="mb-1">
                  <i className="uil uil-envelope fs-32 text-blue bg-white rounded-circle p-2" />
                </div> */}
                <div className="d-flex flex-row align-items-center justify-content-center">
                  <i className="uil uil-envelope fs-32 text-blue bg-white rounded-circle p-2" />
                  <h3 className="fs-20">Mail :</h3>
                </div>
                <p className=" fs-18 text-center">
                  <a href="mailto:pnhandheri@gmail.com ">pnhandheri@gmail.com </a>
                </p>
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex flex-row align-items-center justify-content-center">
                  <i className="uil uil-phone-volume fs-32 text-blue bg-white rounded-circle p-2" />
                  <h3 className="fs-20">Phone :</h3>
                </div>
                {/* <i className="uil uil-phone-volume fs-30 text-blue bg-white rounded-circle p-2" /> */}
                <p className="fs-18 text-center mail">
                  <a href="tel:+919892056258">+91 98920 56258</a>
                  <br />
                  <a href="tel:+919372459691">+91 93724 59691</a>
                  <br />
                  <a href="tel:+919082099953">+91 90820 99953</a>
                </p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7542958250783!2d72.84983707596743!3d19.11843198209491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c82d62b96a83%3A0x1823800a6fb31b0a!2sPatel%20Nursing%20Home!5e0!3m2!1sen!2sin!4v1724494549660!5m2!1sen!2sin"
                  width="350"
                  height="300"
                  className="border rounded"
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
