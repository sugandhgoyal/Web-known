import React, { Component, useEffect, useState } from 'react'
import Menu from './Menu';
import SignUp from './SignUp';
import Services from './Services';
import WorkingProcess from './WorkingProcess';
import styled from 'styled-components';
import HowWeDoIt from './HowWeDoIt';
import Blog from './Blog';
import ContactUs from './ContactUs';
import './theme/animation.css';
import IntroPage from './IntroPage';

export const HorizontalLine = styled.div`
    height: 1px;
    width: 100%;
    background: #dedbdb;
`;

export const LandingPage = () => {
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const sliders = document.querySelectorAll(".slide-in");
    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -250px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
      appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
      appearOnScroll.observe(slider);
    });

  }, []);

  return (
    <>
      <Menu />
      <IntroPage />
      <SignUp />
      <Services />
      <HorizontalLine />
      <WorkingProcess />
      <HorizontalLine />
      <HowWeDoIt />
      <HorizontalLine />
      <Blog />
      <ContactUs />
    </>
  )
}

export default LandingPage;
