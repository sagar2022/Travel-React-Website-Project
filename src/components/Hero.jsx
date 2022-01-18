import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 80%;
  .background {
    height: 70%;
    img {
      width: 100%;
      filter: brightness(50%);
      border-radius: 0.8rem;
    }
  }
  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
    .title {
      color: #fff;
      h1 {
        letter-spacing: 0.2rem;
        font-size: 3rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
      }
    }
    .search {
      display: flex;
      background: #fff;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background: transparent;
          border: none;
          color: #000;
          &[type="date"] {
            padding-left: 3rem;
          }
          &::placeholder {
            color: #222;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: #fff;
        background: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background: #023e8a;
        }
      }
    }
  }
`;

const Hero = () => {
  return (
    <Section id="hero">
      <div className="background">
        <img src="https://wallpaperaccess.com/full/30207.jpg" alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>Travel to Explore</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            nemo maiores facere in, impedit beatae necessitatibus, delectus ipsa
            esse praesentium molestias magnam totam dolorem,
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Where you want to go</label>
            <input type="text" placeholder="Search your Location" />
          </div>
          <div className="container">
            <label htmlFor="">Check-in</label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor="">Check-out</label>
            <input type="date" />
          </div>
          <button>Explore Now</button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
