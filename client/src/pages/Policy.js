import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Data Collection Transparency</p>
          <p>Usage of Collected Data</p>
          <p>Data Sharing Policy</p>
          <p>User Control and Rights</p>
          <p>Data Security Measures</p>
          <p>Cookies and Tracking</p>
          <p>Policy Updates</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
