import Navbaar from '@/Components/Navbaar'
import './globals.css'
import React from 'react'
import About from '@/Components/AboutUs'
import Services from '@/Components/Services'
import ContactUs from '@/Components/ContactUs'
import Blog from '@/Components/Blog'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const page = () => {
  return (
    <>
     < Navbaar />
     < About />
     < Services/>

     <Blog/>
     < ContactUs/> 
    </>
   
  );
}

export default page;
