import React from "react";

function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=1195&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello everyone</h1>
          <p className="mb-5">
            Welcome to Suuqify, your one-stop destination for all your shopping
            needs. Explore our wide range of products and enjoy a seamless
            shopping experience.
          </p>
          <button className="btn btn-success">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
