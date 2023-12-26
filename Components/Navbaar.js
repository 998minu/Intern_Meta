"use client"

import React from 'react';
import Image from 'next/image';
import img1 from './src/image/1666941411213.jpeg';

const Navbaar = () => {
  return (
    <>
    <section id='home' >
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <Image src={img1} alt="Bootstrap" height={30}/>
          </a>
          <a className="navbar-brand" href="#home">Metamatic Knowledge Solution</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
              <a className="nav-link" href="#AboutUs">About us</a>
              <a className="nav-link" href="#services">Services</a>
              <a className="nav-link" href="#blog">Blog</a>
              <a className="nav-link" aria-disabled="true" href='#contactus'>Contact Info</a>
            </div>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      </section>
    </>
  );
}

export default Navbaar;
