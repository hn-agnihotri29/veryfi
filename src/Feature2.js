import './App.css';
import * as React from "react";
export default function Feature2() {
  return (
    <>
      <section className="best-deals-container">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d26bec6d899b1e0f9bb9bba48c0f9b50acf031f7a9443e7a8ae470fbb09e1697?apiKey=599a36fd9484491d9a74d5ed2ac63035&"
          alt="Best Deals"
          className="best-deals-image"
        />
        <p className="best-deals-text">
          Get the <span className="best-deals-highlight">best deals</span>
        </p>
      </section>
    </>
  );
}