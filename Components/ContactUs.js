"use client";
import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from "react";
import linkedin from "@/Components/src/image/linkedin.png";
import twitter from "@/Components/src/image/twitter.png";
import fb from "@/Components/src/image/facebook.png";
import Image from "next/image";
import axios from "axios";

function ContactUs() {
  // form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  // retrived data state
  //const [data, setData] = useState([]);

  // submit event
  const collectData = async(e) => {
    e.preventDefault();
    try{
    const response = await fetch('http://localhost:4000/',{
      method:'POST',
      body: JSON.stringify({name,email,message,phonenumber}),
      headers:{
        'content-Type': 'application/json'
      },
    });
    const result=await response.json();
    console.log(result);
  } 
  catch(error){
    console.error(error);
  }
} 

  return (
    <section id='contactus' >
    <div className="container" >
      <br></br>
      <h1>Contact Info</h1>
      <br></br>
      <form autoComplete="off" className="form-group" onSubmit={collectData}>
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          required
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br></br>
        <label>Email</label>
        <input
          type="text"
          className="form-control"
          required
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br></br>
        <label>Message</label>
        <input
          type="text"
          className="form-control"
          required
          placeholder="Enter Your Message:"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <br></br>
        <label>Phone Number</label>
        <input
          type="Number"
          className="form-control"
          required
          placeholder="Enter your Phone Number:"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phonenumber}
        />
        <br></br>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      {/* <div className='view-data'>
        {data.length<1&&<>No data to show</>}
        {data.length>0&&(
          <div className='table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Index</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Message</th>
                  <th scope='col'>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                <Data data={data}/>
              </tbody>
            </table>
          </div>
        )}
      </div> */}
      <section
        data-bs-version="5.1"
        class="share3 cid-sSfHhr3uta"
        id="share3-y"
    
      >
        <div class="container">
          <div class="media-container-row">
            <div class="col-12">
              <h3 id='h3strong'>
                <strong>Follow Us!</strong>
              </h3>
              <div id="sociallist">
                <a
                  class="iconfont-wrapper bg-facebook m-2 "
                  target="_blank"
                  href=""
                >
                  <Image src={linkedin} height={50} width={50} />
                </a>
                <a
                  class="iconfont-wrapper bg-twitter m-2"
                  href=""
                  target="_blank"
                >
                  <Image src={twitter} height={50} width={50} />
                </a>
                <a
                  class="iconfont-wrapper bg-instagram m-2"
                  href=""
                  target="_blank"
                >
                  <Image src={fb} height={50} width={50} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </section>
  );
}

export default ContactUs;
