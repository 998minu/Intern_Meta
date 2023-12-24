"use client"
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Data} from './Data';

function ContactUs() {

  // form states
  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [message, setMessage]=useState('');
  const [phonenumber, setPhoneNumber]=useState('');

  // retrived data state
  const [data, setData]=useState([]);

  // submit event
  const handleSubmit=async(e)=>{
    e.preventDefault();
    

    // our object to pass
    const data = {
      Name:name,Email:email,Message:message,PhoneNumber:phonenumber
    }
    await axios.post('https://sheet.best/api/sheets/1e07c208-719c-44ed-b07a-7f51a51eae97',data).then(response=>{
      // console.log(response);
      setName('');
      setEmail('');
      setMessage('');
      setPhoneNumber('');
    })
  }

  // getting data function
  const getData=async()=>{
    await axios.get('https://sheet.best/api/sheets/1e07c208-719c-44ed-b07a-7f51a51eae97').then((response)=>{
      setData(response.data);
    })
  }

  // triggering function
  useEffect(()=>{
    getData();
  },[data])

  return (
    <div className="container">
      <br></br>
      <h1>Contact Info</h1>
      <br></br>
      <form autoComplete="off" className='form-group'
      onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' className='form-control' required
          placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}
          value={name}
        />
        <br></br>
        <label>Email</label>
        <input type='text' className='form-control' required
          placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)}
          value={email}
        />
        <br></br>
        <label>Message</label>
        <input type='text' className='form-control' required
          placeholder='Enter Your Message:'
          onChange={(e)=>setMessage(e.target.value)}
          value={message}
        />
        <br></br>
        <label>Phone Number</label>
        <input type='Number' className='form-control' required
          placeholder='Enter your Phone Number:'
          onChange={(e)=>setPhoneNumber(e.target.value)}
          value={phonenumber}
        />
        <br></br>
        <div style={{display:"flex",justifyContent:'flex-end'}}>
          <button type='submit' className='btn btn-primary'>Submit</button>
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
       <section data-bs-version="5.1" class="share3 cid-sSfHhr3uta" id="share3-y">





          <div class="container">
              <div class="media-container-row">
                  <div class="col-12">
                      <h3 class="mbr-section-title align-center mb-3 mbr-fonts-style display-2">
                          <strong>Follow Us!</strong>
                      </h3>
                      <div class="social-list align-center">

                          <a class="iconfont-wrapper bg-facebook m-2 " target="_blank" href="">
                              <span class="socicon-Linkedin socicon"></span>
                          </a>
                          <a class="iconfont-wrapper bg-twitter m-2" href="" target="_blank">
                              <span class="socicon-twitter socicon"></span>
                          </a>
                          <a class="iconfont-wrapper bg-instagram m-2" href="" target="_blank">
                              <span class="socicon-instagram socicon"></span>
                          </a>








                      </div>
                  </div>
              </div>
          </div>
          </section>
    </div>
  );
}

export default ContactUs;