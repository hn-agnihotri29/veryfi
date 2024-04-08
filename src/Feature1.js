
import './App.css';
import * as React from "react";

export default function Feature1() {
  return (
    <>
      <section className="container2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5697681252fc3fd2259d30886de4a2a9d48d2519f9787a32ae1a86f38d77122d?apiKey=599a36fd9484491d9a74d5ed2ac63035&"
          className="image"
          alt="Phone image"
        />
        <p className="description">
          Find the <span className="highlight">best time</span> <br /> to buy
          your next phone
        </p>
      </section>
    </>
  );
}