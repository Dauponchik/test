import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero8 from '../components/hero8'
import Stats2 from '../components/stats2'
import Logos1 from '../components/logos1'
import Features1 from '../components/features1'
import Team1 from '../components/team1'
import Footer4 from '../components/footer4'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Enchanted Single Gull</title>
        <meta property="og:title" content="About - Enchanted Single Gull" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="about-text10">Page Four Description</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-text11">Main Action</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text12">Services</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="about-text13">Page One</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="about-text14">Home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="about-text15">Page Four</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="about-text16">Page Two</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text17">Contact</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="about-text18">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="about-text19">Page Two Description</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text20">About Us</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="about-text21">Page Three</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="about-text22">Page Three Description</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text23">Secondary Action</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero8
        content1={
          <Fragment>
            <span className="about-text24">
              Choose from different plans and features
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text25">Register Now</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text26">
              Explore Our Products and Services
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-text27">Learn More</span>
          </Fragment>
        }
      ></Hero8>
      <Stats2
        stat1={
          <Fragment>
            <span className="about-text28">Responsive Design</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text29">Easy Customization</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text30">Fast Loading Speed</span>
          </Fragment>
        }
        stat3={
          <Fragment>
            <span className="about-text31">Loading Speed</span>
          </Fragment>
        }
        stat4={
          <Fragment>
            <span className="about-text32">Customer Satisfaction</span>
          </Fragment>
        }
        stat2Description={
          <Fragment>
            <span className="about-text33">
              Users can easily customize their products and services to suit
              their needs.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text34">Key Stats</span>
          </Fragment>
        }
        stat4Description={
          <Fragment>
            <span className="about-text35">
              Our satisfied customers testify to the quality of our products and
              services.
            </span>
          </Fragment>
        }
        stat2={
          <Fragment>
            <span className="about-text36">Customization Options</span>
          </Fragment>
        }
        stat3Description={
          <Fragment>
            <span className="about-text37">
              Experience lightning-fast loading speeds for a seamless user
              experience.
            </span>
          </Fragment>
        }
        stat1Description={
          <Fragment>
            <span className="about-text38">
              Our products and services are designed to be fully responsive on
              all devices.
            </span>
          </Fragment>
        }
      ></Stats2>
      <Logos1
        heading1={
          <Fragment>
            <span className="about-text39">
              Trusted by the world&apos;s best companies social proof to build
              credibility
            </span>
          </Fragment>
        }
      ></Logos1>
      <Features1
        mainAction={
          <Fragment>
            <span className="about-text40">Easy Customization</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="about-text41">Variety of Plans</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="about-text42">Responsive Design</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="about-text43">
              Our products are designed to adapt seamlessly to any device,
              providing a consistent user experience.
            </span>
          </Fragment>
        }
        slogan={
          <Fragment>
            <span className="about-text44">Tailored to Suit Your Needs</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="about-text45">Testimonials</span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about-text46">
              Read what our satisfied customers have to say about their
              experience with our products and services.
            </span>
          </Fragment>
        }
        sectionDescription={
          <Fragment>
            <span className="about-text47">
              Explore the key features that make our products and services stand
              out from the rest.
            </span>
          </Fragment>
        }
        secondaryAction={
          <Fragment>
            <span className="about-text48">Fast Loading Speed</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about-text49">
              Choose from a range of plans and pricing options to find the
              perfect fit for your requirements.
            </span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="about-text50">Features</span>
          </Fragment>
        }
      ></Features1>
      <Team1
        member5Content={
          <Fragment>
            <span className="about-text51">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        member2Content={
          <Fragment>
            <span className="about-text52">
              Jane is a creative genius who brings our brand to life with her
              innovative ideas.
            </span>
          </Fragment>
        }
        member8Content={
          <Fragment>
            <span className="about-text53">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text54">Our Amazing Team</span>
          </Fragment>
        }
        member3Job={
          <Fragment>
            <span className="about-text55">Head of Operations</span>
          </Fragment>
        }
        member4Content={
          <Fragment>
            <span className="about-text56">
              Emily goes above and beyond to ensure our customers are always
              happy.
            </span>
          </Fragment>
        }
        member2Job={
          <Fragment>
            <span className="about-text57">Marketing Director</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text58">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        member8={
          <Fragment>
            <span className="about-text59">Full name</span>
          </Fragment>
        }
        member7={
          <Fragment>
            <span className="about-text60">Full name</span>
          </Fragment>
        }
        member7Content={
          <Fragment>
            <span className="about-text61">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        member8Job={
          <Fragment>
            <span className="about-text62">Job title</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="about-text63">We’re hiring!</span>
          </Fragment>
        }
        member2={
          <Fragment>
            <span className="about-text64">Jane Smith</span>
          </Fragment>
        }
        member6Job={
          <Fragment>
            <span className="about-text65">Job title</span>
          </Fragment>
        }
        member3Content={
          <Fragment>
            <span className="about-text66">
              Michael ensures smooth operations and efficiency in everything we
              do.
            </span>
          </Fragment>
        }
        actionContent={
          <Fragment>
            <span className="about-text67">Open positions</span>
          </Fragment>
        }
        member6={
          <Fragment>
            <span className="about-text68">Full name</span>
          </Fragment>
        }
        member5={
          <Fragment>
            <span className="about-text69">Full name</span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="about-text70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        member4Job={
          <Fragment>
            <span className="about-text71">Customer Support Manager</span>
          </Fragment>
        }
        member1Job={
          <Fragment>
            <span className="about-text72">CEO &amp; Founder</span>
          </Fragment>
        }
        member1={
          <Fragment>
            <span className="about-text73">John Doe</span>
          </Fragment>
        }
        member4={
          <Fragment>
            <span className="about-text74">Emily Brown</span>
          </Fragment>
        }
        member7Job={
          <Fragment>
            <span className="about-text75">Job title</span>
          </Fragment>
        }
        member3={
          <Fragment>
            <span className="about-text76">Michael Johnson</span>
          </Fragment>
        }
        member1Content={
          <Fragment>
            <span className="about-text77">
              John is the visionary behind our company, leading with passion and
              dedication.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text78">
              Meet the talented individuals who make it all happen.
            </span>
          </Fragment>
        }
        member6Content={
          <Fragment>
            <span className="about-text79">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        member5Job={
          <Fragment>
            <span className="about-text80">Job title</span>
          </Fragment>
        }
      ></Team1>
      <Footer4
        link5={
          <Fragment>
            <span className="about-text81">FAQ</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text82">Services</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="about-text83">Home</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="about-text84">Terms of Use</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text85">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text86">Contact Us</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="about-text87">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="about-text88">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default About
