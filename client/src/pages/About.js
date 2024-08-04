import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          <h1>About us</h1>

Welcome to Tech-Wolrd, your go-to online store for high-quality Laptops, ipads, mobiles, calulators etc... . Founded in 2023, we aim to bring you the best products at great prices.

Our Promise

Wide Selection: Diverse range of Laptops, ipads, mobiles, calulators etc... .
Quality Assurance: Only the best products make it to our store.
Customer Focused: Excellent customer service.
Fast Shipping: Quick delivery to your door.
Join the Tech-World community and follow us on social media for updates and offers. <br></br>Thank you for choosing us!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
