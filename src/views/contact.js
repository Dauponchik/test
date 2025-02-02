import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import ContactForm3 from '../components/contact-form3'
import Contact14 from '../components/contact14'
import Contact7 from '../components/contact7'
import Footer4 from '../components/footer4'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Enchanted Single Gull</title>
        <meta property="og:title" content="Contact - Enchanted Single Gull" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="contact-text10">Page Four Description</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="contact-text11">Main Action</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text12">Services</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="contact-text13">Page One</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="contact-text14">Home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="contact-text15">Page Four</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="contact-text16">Page Two</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text17">Contact</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="contact-text18">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="contact-text19">Page Two Description</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text20">About Us</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="contact-text21">Page Three</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="contact-text22">Page Three Description</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="contact-text23">Secondary Action</span>
          </Fragment>
        }
      ></Navbar8>
      <ContactForm3
        content2={
          <Fragment>
            <span className="contact-text24">Get in touch with us</span>
          </Fragment>
        }
        action={
          <Fragment>
            <span className="contact-text25">Submit</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text26">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text27">Contact us</span>
          </Fragment>
        }
      ></ContactForm3>
      <Contact14
        link1={
          <Fragment>
            <span className="contact-text28">Start new chat</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text29">
              We are here to assist you. Reach out to us for any inquiries or
              support.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text30">Contact Us</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text31">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <span className="contact-text32">Office</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="contact-text33">
              123 Main Street, City, Country
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="contact-text34">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="contact-text35">Phone</span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="contact-text36">+123-456-7890</span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="contact-text37">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="contact-text38">Live Chat</span>
          </Fragment>
        }
        email1={
          <Fragment>
            <span className="contact-text39">info@example.com</span>
          </Fragment>
        }
      ></Contact14>
      <Contact7
        location2={
          <Fragment>
            <span className="contact-text40">Los Angeles Office</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text41">
              For inquiries or support, please contact our New York office.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="contact-text42">
              456 Park Avenue, Los Angeles, CA 90012
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="contact-text43">
              123 Main Street, New York, NY 10001
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="contact-text44">New York Office</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text45">Contact Us</span>
          </Fragment>
        }
      ></Contact7>
      <Footer4
        link5={
          <Fragment>
            <span className="contact-text46">FAQ</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text47">Services</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="contact-text48">Home</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="contact-text49">Terms of Use</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text50">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text51">Contact Us</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="contact-text52">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="contact-text53">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Contact
