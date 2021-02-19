import React from "react";
// import icaons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import styled from "styled-components";
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";

const ServicesSection = () => {
  return (
    <StyledServices>
      <StyledDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <ServiceCards>
          <ServiceCard>
            <div className="icon">
              <img src={clock} alt="clock-img" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </ServiceCard>

          <ServiceCard>
            <div className="icon">
              <img src={teamwork} alt="teamwork-img" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </ServiceCard>

          <ServiceCard>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm-img" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </ServiceCard>
          <ServiceCard>
            <div className="icon">
              <img src={money} alt="omney-img" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </ServiceCard>
        </ServiceCards>
      </StyledDescription>
      <StyledImage>
        <img src={home2} alt="home2-img" />
      </StyledImage>
    </StyledServices>
  );
};

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const ServiceCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ServiceCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;

export default ServicesSection;
