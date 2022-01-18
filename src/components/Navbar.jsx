import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
      img {
        width: 60px;
        height: 60px;
      }
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    li {
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 600;
        }
      }
    }
  }
  button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #023e8a;
    color: #fff;
    border-radius: 1rem;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    transition: 0.3s ease-in-out;
    &:hover {
      background: #0077b6;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="brand">
        <div className="container">
          <img
            src="https://png.pngtree.com/element_origin_min_pic/16/07/11/2057838b7a84d73.jpg"
            alt="logo"
          />
          EasyTravel
        </div>
        <div className="toggle"></div>
      </div>
      <ul>
        <li>
          <a href="/" target="_blank">
            Home
          </a>
        </li>
        <li>
          <a href="/services" target="_blank">
            Services
          </a>
        </li>
        <li>
          <a href="/recommended" target="_blank">
            Place
          </a>
        </li>
        <li>
          <a href="/Testimonial" target="_blank">
            Testimonial
          </a>
        </li>
      </ul>
      <button>Connect</button>
    </Nav>
  );
};

export default Navbar;
