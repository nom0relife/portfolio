import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true.</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Ipsa doloribus porro rerum eos consequatur quidem animi dicta,
          explicabo officia aut. Nulla temporibus illo ipsam ullam
          necessitatibus molestiae impedit placeat maxime.
        </p>
        <button>Contact us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="guy with a camera" />
      </StyledImage>
    </StyledAbout>
  );
};

//styled components

export default AboutSection;
