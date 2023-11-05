import React from "react";
import person from "../../../Assets/img/modern-empty-cafe-restaurant_7081-1149.webp";
import parts from "../../../Assets/img/logo.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        
        <div className="w-2/3">
          <p className="text-3xl font-bold text-orange-600">About Us</p>
          {/* <h1 className="my-5 text-5xl font-bold">
                        We are qualified <br />
                        & of experience <br />
                        in this field</h1> */}
          <p className="py-6">
            Welcome to JUFeast, your go-to solution for efficient and
            streamlined coupon management. At Hall, we understand the
            significance of providing seamless and cost-effective solutions to
            businesses seeking to enhance their customer engagement through
            coupons and promotions. Our platform is designed to empower
            businesses of all sizes, from local startups to established
            enterprises, with the tools they need to effectively manage and
            optimize their coupon campaigns.
          </p>
          <p className="text-3xl font-bold text-orange-600">Our Mission</p>
          <p className="py-2">
            Our mission is simple yet profound: to revolutionize the way
            businesses manage and distribute coupons. We strive to be at the
            forefront of coupon management technology, enabling our clients to
            effortlessly create, distribute, and track their coupon campaigns,
            while ensuring a delightful experience for their customers. At Hall,
            we are committed to driving success for businesses by offering a
            user-friendly, reliable, and innovative coupon management system.
            <ul className="list-disc text-[green] font-bold mx-4 my-2"></ul>
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
