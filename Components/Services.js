import React from 'react';
import Image from 'next/image';
import './src/index.css'
import agefiss from './src/image/agefis-eqvAIznVqR4-unsplash.jpg';

const ServiceItem = ({ icon, title, description }) => (

 
    <div className="detail6 ms-3">
      <h4 className="w3l-subtitle pl-2">{title}</h4>
      <p>{description}</p>
    </div>

);

const Services = () => {
  return (
    <section className="content">
      <div className="text-section">
        <h4>Why Choose Us</h4>
        <h1>The Creative Solution We Provide To Our Clients</h1>
        <h6>
          We specialize in helping businesses create and manage knowledge graphs that enable them to organize their data, gain new insights, and make better decisions. Our team of experts has years of experience in building and deploying knowledge graphs that are tailored to the specific needs of our clients.
        </h6>
      </div>

      <div className="mid-row-2" id="box-mid">
        <div className="col-1-grid">
          <i className="fas fa-chalkboard-teacher"></i>
        </div>
        <ServiceItem icon="fa-lightbulb" title="Knowledge Graph Design" description="We work closely with our clients to understand their specific needs and design knowledge graphs that are tailored to their business operations." />
   
        <ServiceItem icon="fa-lightbulb" title="Knowledge Graph Development" description="We use state-of-the-art tools and technologies to develop knowledge graphs that are accurate, scalable, and easy to maintain." />

        <ServiceItem icon="fa-headset" title="Knowledge Graph Implementation" description="We help our clients integrate their knowledge graphs into their existing systems and workflows, ensuring a seamless transition and minimal disruption." />

        <ServiceItem icon="fa-servicestack" title="Knowledge Graph Maintenance" description="We offer ongoing support and maintenance services to ensure that your knowledge graph stays up-to-date and continues to deliver value to your business." />

        <ServiceItem icon="fa-servicestack" title="Consulting and Training" description="We provide expert consulting services and training to help our clients get the most out of their knowledge graphs." />
      
      </div>

      <div className="image-section" id="img-sec">
        <Image src={agefiss} alt="Creative Solution Image" />
      </div>
    </section>
  );
};

export default Services;
