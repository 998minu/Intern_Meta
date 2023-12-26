"use client"

import React, { useState } from 'react';
import Image from "next/image";
import card2 from "./src/image/background.jpg";
import card1 from "./src/image/firstbox.png";
import card3 from "./src/image/secondbox.jpg";
import card4 from "./src/image/thirdbox.jpg";
import "./src/index.css";

const Blog = () => {
  return (
    <>
      <section id='blog'>
        <div className="test-upp">
          <div className="test-con">
            <h4>Insights and Trends</h4>
            <h2>Related Blogs</h2>

         </div>
            <div className="card-con">
              <div className="card" style={{ width: "18rem" }}>
                { <Image
                  src={card1}
                  className="card-img-top"
                  height={300}
                  width={300}
                  alt="..."
                /> }

                <div className="card-body">
                  
                  <p className="card-text">
                  An Ontological Model for Automated User Profiling.
                  </p>
                  <a href="http://www.ceser.in/ceserp/index.php/ijts/article/view/5905" className="btn btn-primary">

                  Go To Page
                  </a>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <Image
                  src={card3}
                  className="card-img-top"
                  height={300}
                  width={300}
                  alt="..."
                />
                <div className="card-body">
                  
                  <p className="card-text">
                  Blending Semantic Web with Recommender Systems.
                  </p>
                  <a href="https://www.ijcseonline.org/pub_paper/83-IJCSE-03618.pdf" className="btn btn-primary">
                  Go To Page
                  </a>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <Image
                  src={card4}
                  className="card-img-top"
                  height={300}
                  width={300}
                  alt="..."
                />
                <div className="card-body">
                  
                  <p className="card-text">
                    LOD: Linking and Querying Shared Data on Web
                  </p>
                  <a href="https://ieeexplore.ieee.org/document/8442718" className="btn btn-primary">
                    Go To Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        
      </section>
    </>
  );
};

export default Blog;
