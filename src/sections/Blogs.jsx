import React from "react";
import Blog from "../components/Blog";
import Button from "../components/Button";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import BlogImage1 from "../assets/blogImage1.jpg";
import BlogImage2 from "../assets/blogImage2.jpg";
import BlogImage3 from "../assets/blogImage3.jpg";
import "../styles/sections/Blogs.scss";
import { textAnimation, cardAnimation } from "../utils/Animations";

function Blogs() {
  const [element, controls] = useScroll();

  return (
    <div className="blogs-container" id="blog" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title title="Financial Consultancy Services" color="#1A73E8" lineCenter={true} />
          <p>We work with businesses and financiers with the aim of forging and establishing long lasting working relationships. Below are the various services.</p>
        </motion.div>
        <div className="blogs">
          <Blog
            image={BlogImage1}
            title="Investor Sourcing & Investor introduction"
            subTitle="Through our financial product we link businesses with potential
            investors/financiers. We have a pool of investors both locally and
            offshore that are ready to come in as financial partners in form of
            debt or equity."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage2}
            title="Kickstart Programs"
            subTitle="Our satisfaction comes from seeing a business idea comes to
            reality. Entrepreneurship is a journey, that is why we want to
            walk with you in your journey as you start. We will help you
            identify your strengths, come up with your business idea, guide
            you to officially register your business, develop systems and
            structures, come up with a marketing strategy amongst other
            services."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage3}
            title="Investor Ready Programs"
            subTitle="In conjucton with various entrepreneurship institutions, we organise
            trainings that prepare businesses to be investor ready."
            variants={cardAnimation}
            animate={controls}
          />



        </div>

      </div>
    </div>
  );
}

export default Blogs;
