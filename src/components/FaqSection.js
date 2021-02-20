import React from "react";
import styled from "styled-components";
import { StyledAbout } from "../styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any questions <span>FAQ</span>
        <div className="question">
          <h4>How to start</h4>
          <div className="answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            magnam quo cupiditate expedita commodi repellat. Alias mollitia,
            quam quos, sit aliquid quis illum commodi atque aliquam unde minus
            consequuntur deleniti? Quis voluptates officia placeat error eaque
            velit enim, est et facere, a amet facilis eligendi doloribus porro
            ex! Ex hic tempore tenetur cupiditate atque, recusandae dolor dicta
            aliquam porro non?
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>Daily</h4>
          <div className="answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            magnam quo cupiditate expedita commodi repellat. Alias mollitia,
            quam quos, sit aliquid quis illum commodi atque aliquam unde minus
            consequuntur deleniti? Quis voluptates officia placeat error eaque
            velit enim, est et facere, a amet facilis eligendi doloribus porro
            ex! Ex hic tempore tenetur cupiditate atque, recusandae dolor dicta
            aliquam porro non?
          </div>
        </div>
        <div className="faq-line"></div>
        <div className="question">
          <h4>Payment</h4>
          <div className="answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            magnam quo cupiditate expedita commodi repellat. Alias mollitia,
            quam quos, sit aliquid quis illum commodi atque aliquam unde minus
            consequuntur deleniti? Quis voluptates officia placeat error eaque
            velit enim, est et facere, a amet facilis eligendi doloribus porro
            ex! Ex hic tempore tenetur cupiditate atque, recusandae dolor dicta
            aliquam porro non?
          </div>
        </div>
        <div className="faq-line"></div>
        <div className="question">
          <h4>How am i</h4>
          <div className="answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            magnam quo cupiditate expedita commodi repellat. Alias mollitia,
            quam quos, sit aliquid quis illum commodi atque aliquam unde minus
            consequuntur deleniti? Quis voluptates officia placeat error eaque
            velit enim, est et facere, a amet facilis eligendi doloribus porro
            ex! Ex hic tempore tenetur cupiditate atque, recusandae dolor dicta
            aliquam porro non?
          </div>
        </div>
        <div className="faq-line"></div>
      </h2>
    </Faq>
  );
};

const Faq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    font-size: 1.5rem;
    padding: 1rem 0rem;
  }
`;

export default FaqSection;
