import React from "react";

function About() {
  return (
    <div className="text-center text-2xl  text-base-800 p-4">
      <h1 className="text-3xl font-bold text-green-800">About Suuqify</h1>
      <p>
        Suuqify is a leading e-commerce platform that provides a seamless
        shopping experience for customers. it offers a wide range of products at
        competitive prices, ensuring customer satisfaction with every purchase.
      </p>
      <img
        src="https://plus.unsplash.com/premium_photo-1683121817275-85d1dcf9e4c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        alt="Suuqify"
        className="mx-auto my-4 rounded-lg shadow-lg"
      />
      <p>
        Our mission is to make online shopping convenient and enjoyable for
        everyone. We strive to provide excellent customer service, fast
        delivery, and a secure shopping environment.
      </p>
    </div>
  );
}

export default About;
