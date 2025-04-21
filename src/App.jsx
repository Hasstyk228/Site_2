import './App.css';
import { useState , useRef } from "react";
import React from 'react';
import Header from "./components/Header/header";
import Section1 from './components/Section_1/section_1';
import Section2 from './components/Section_2/section_2';
import Section3 from './components/Section_3/Section_3';
import Section4 from './components/Section_4/Section_4';
import Slider from './components/Slider/Slider';
import Section5 from './components/Section_5/Section_5';
import Section6 from './components/Section_6/Section_6';
import Section7 from './components/Section_7/Section_7';
import Footer from './components/Footer/Footer';



export default function App() {

    return (
    <>
        <Header></Header>
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
        <Slider></Slider>
        <Section5></Section5>
        <Section6></Section6>
        <Section7></Section7>
        <Footer></Footer>
    </>
    )
}