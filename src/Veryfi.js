import './App.css';
import * as React from "react";
import SignUpButton from './SignUpButton';
function Veryfi()
{
    return(
      <>
       <header className="verify_container">
        <h1 className="logo">VERYFI</h1>
        <button className="get-started-button">
          <div className="get-started-button-inner">
            <div className="get-started-button-text">Get Started</div>
        </div>
      </button>
      </header>
      <div className="verify_content">
        <div className="verify_text">
        <h1 className="title">
            <div className="row1">
             <span className="title-part1">veryfi</span>{" "}
             <span className="title-part2">here</span> <br />
            </div>
            <div className='row2'>
             <span className="title-part3">then</span>{" "}
             <span className="title-part4">buy</span>
            </div>
        </h1>
        <section className="verify_content2">
          <span className='r1'> Seize the best moment to make your next</span>
          <span className='r2'> purchase by
             <span className="highlight_verify ">verifying</span> prices with us
          </span>
      </section> 
      </div>
        <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/67c0f50d248404ee2912c7da982fbd901a5f024deb647f03bad1f63008dc6c36?apiKey=599a36fd9484491d9a74d5ed2ac63035&"
        alt="Descriptive alt text of the image"
        className="verify_img"
        loading="lazy"/>

       <div className="sign-up-container">
          <div className="sign-up-inner-container">
          <SignUpButton />
        </div>
      </div>

      </div>
     </>
    );
}

export default Veryfi;