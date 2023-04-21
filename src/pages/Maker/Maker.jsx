import {React, useEffect } from "react";
import "./maker.scss";

// import { useState } from 'react'

import {axiosInstance} from "../../config.js";
import {Link, useLocation } from "react-router-dom";
// import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";



const Maker = () => {

  const [inputs, setInputs] =  useState({
    state_name:"%",
    post_code:"%",
    clothing_type:"%" //default value
  })
  const [post, setPosts] = useState([]);

  const handleChangeF = e =>{
    setInputs(prev=>({...prev, [e.target.name]:e.target.value}))

   
  }
  const handleSubmit =async (e) =>{
    try {
      e.preventDefault();
      
      const res = await axiosInstance.post(`/posts/filter`, inputs);

      setPosts(res.data);
 
    } catch (err) {
      console.log(err);
    }
  
    
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`/posts/`);
   
        console.log(res);
        console.log(res.data);
        setPosts(res.data);
       
    
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container-job">
      <form>
        <input type="text" onChange={handleChangeF} className="filter-input"  name= "state_name" placeholder="State Name"></input>
        <input type="number" onChange={handleChangeF} className="filter-input" name= "post_code" placeholder="Post Code"></input>
        <select className="filter-input" name="clothing_type" onChange={handleChangeF}>
              <option  value="" >Type Of Clothing</option>
              <option  value="Sari" >Sari</option>
              <option  value="Blouse" >Blouse</option>
              <option value="Dress">Dress</option>
              <option value="Ethnic Wear">Ethnic Wear</option>
        </select>
        <input type="button" onClick={handleSubmit} className="filter-butt"value="FILTER"></input>
      </form>
      <div className="jobs" id="jobs">
        

      {post.map((d) => {
          return (
            <div className="jobs__item">
              <div className="jobs__column jobs__column--left">
                <img src="./asset/Cloth.png" alt="" className="jobs__img" />

                <div className="jobs__info">
                  <span className="jobs__number">JOB ID RECORD # {d.id}</span>
                  <div className="text-cont">
                  <p className="jobs__details-label">Name</p>
                  <p className="jobs__details-item">
                    :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{d.first_name} {d.last_name}
                  </p>
                  </div>
                  
                  <br></br>

                  <div className="text-cont">
                  <p className="jobs__details-label">Type Of Clothing</p>
                  <p className="jobs__details-item">:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{d.clothing_type}</p>
                  </div>

                  <br></br>
                  <div className="text-cont">
                  <p className="jobs__details-label">Location</p>
                  <p className="jobs__details-item">
                    :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{d.street_num} {d.streetname},{d.state_name} {d.post_code}
                  </p>
                  </div>

                  <br></br>
                  <div className="text-cont">
                  <p className="jobs__details-label">Submission</p>
                  <p className="jobs__details-item">
                    :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{d.num_quotation} submissions</p>
                  </div>
            
                  <br></br>
                  <br></br>
              
                </div>
              </div>
              <div className="button-container">
                
                  <a href={`/submission/${d.id}`} className="job_button-sub">
                    <i className="job-but icon_img uil uil-user"></i>

                    <h5 className="job-but">VIEW JOBS</h5>
                  </a>
      
      
              </div>
            </div>
          );
        })}


      </div>
    </div>
  );
};

export default Maker;
