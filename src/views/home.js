import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Enchanted Single Gull</title>
        <meta property="og:title" content="Enchanted Single Gull" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">Page Four Description</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Main Action</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">Services</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Page One</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Page Four</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Page Two</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">Contact</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">Page Two Description</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">About Us</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Page Three</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">Page Three Description</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Secondary Action</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Learn More</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Explore Now</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">Welcome to Our Site</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Discover the best products and services tailored just for you.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">Description for Feature 3</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Feature 3 Title</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">Description for Feature 2</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Feature 1 Title</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">Description for Feature 1</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Feature 2 Title</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">Join Our Community Today</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Sign up now to receive exclusive offers and updates
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Sign Up</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              Experience fast loading times with our optimized website for quick
              access to information.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Our website is designed to look great on any device, whether
              it&apos;s a desktop, tablet, or mobile phone.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">Easy to Customize</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">Responsive Design</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Customize the website easily to fit your brand by changing colors,
              fonts, and images.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Fast Loading Speed</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$29.99/month</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Sign Up Now</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Sign Up Now</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Feature 2 of Basic Plan</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">Feature 2 of Standard Plan</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">$199.99/year</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Sign Up Now</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">Feature 1 of Premium Plan</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Feature 3 of Standard Plan</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Standard Plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">Feature 2 of Premium Plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">Feature 1 of Standard Plan</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">
              Choose the Perfect Plan for You
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic Plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$19.99/month</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">$299.99/year</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">Feature 3 of Basic Plan</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">$99.99/year</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Feature 1 of Basic Plan</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Feature 3 of Premium Plan</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text181">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text182">$9.99/month</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text183">Premium Plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              Create an account on our platform to get started.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              Select your desired items and proceed to checkout.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">Step 2: Explore</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Discover a wide range of products and services available.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">Step 1: Register</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">Step 3: Purchase</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              Sit back and enjoy your purchases with fast delivery.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Step 4: Enjoy</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">Marketing Manager, XYZ Corp.</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">CEO, ABC Inc.</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">John Doe</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">Alice Johnson</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">Jane Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">CTO, PQR Ltd.</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">Michael Brown</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              Read what our satisfied customers have to say about our services.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">Founder, LMN Co.</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              purus feugiat, vestibulum mi nec, ultricies metus.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Our Happy Customers</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Integer nec odio.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              Fusce pharetra convallis urna. Ut varius semper lacus, id placerat
              dui. Cras auctor consequat ligula.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text207">
              123 Main Street, New York, NY 10001
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Contact Us</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text209">
              456 Park Avenue, Los Angeles, CA 90001
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">New York Office</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Los Angeles Office</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text212">FAQ</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text213">Services</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text214">Home</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text215">Terms of Use</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text216">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Contact Us</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
