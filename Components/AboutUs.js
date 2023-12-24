"use client"
import React from 'react';
import Image from 'next/image';
import kawe from './src/image/kawe-rodrigues-jKmdjT7aQJA-unsplash.jpg';
import viviana from './src/image/viviana-rishe-kpAz7geHVa4-unsplash.jpg';
import cristal from './src/image/crystal-y-J5cKBM4Ef-8-unsplash.jpg';


const AboutUs = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image src={kawe} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h2>We collaborate with smart and creative people to build Knowledge Graph for enterprises.</h2>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={viviana} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>Engineering services targeting enterprise knowledge graph construction and evolution governed by ontologies.</h2>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={cristal} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>Research & Development in the field of Semantic Data Integration.</h2>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="aboutdiv" id="h1">
        <div className="firstbox">
          <h1 className="head1">About us</h1>
          <h6 className="head2">Empowering Knowledge, Unleashing Potential.</h6>
        </div>
        <div className="secbox">At Knowledge Graph Consulting, we are passionate about helping businesses unlock the value of their data through the power of knowledge graphs.</div>
        <div className="thirdbox">Our team of experienced knowledge graph experts has worked on projects across a wide range of industries. We understand the importance of having an effective knowledge graph to manage your data and gain new insights.</div>
      </div>
    </>
  )
}

export default AboutUs;
