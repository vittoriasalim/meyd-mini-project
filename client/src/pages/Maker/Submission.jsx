import { React, useEffect } from "react";
import { useLocation , useNavigate} from "react-router-dom";
import { useState } from "react";
import "./maker.scss";
import {axiosInstance} from "../../config.js";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import emailjs from 'emailjs-com';





function Submission() {
  const [post, setJob] = useState([]);
  const [template_params, setTemplateParams] = useState();
  const location = useLocation();
  const[err,setError] = useState(null)
  const postId = location.pathname.split("/")[2];
  const [message, setMessage] = useState();
  const [cost, setCost] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    
    e.preventDefault();

    const templateParams = {
      reply_to : post.email_address,
      to_name : post.first_name + " " +post.last_name,
      message : message,
      cost : cost
    }
 
    console.log(templateParams);

    
 
    emailjs.send('service_ohzkr9u', 'template_lzii547', templateParams, 'nU9i0WcIZCiN5Ms-C')
      .then(response => {
        console.log('SUCCESS!', response);
        setTemplateParams({
          reply_to: '',
          to_name: '',
          message: '',
          cost:"0"
        });
        navigate("/success-request")
    
      }, error => {
       
        setError("Error :"+error);
      });
  }
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`/posts/${postId}`);
        setJob(res.data);
  
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  return (
    <div className="container-job">
      <h2 className="section__title">MEYD.IT</h2>
      <span className="section__subtitle">fashion made especially for you</span>
      <div className="jobs" id="jobs">
        <div className="jobs__item">
          <div className="jobs__column ">
            <img src={`https://meydit-project.herokuapp.com/images/${post.images}`} className="sample_img "></img>

            <div className="jobs__info">
              <h5 className="home_heading">JOB ID NUMBER # {post.id}</h5>
            
              <span className="job__title" name="user_name">
                {post.first_name} {post.last_name}
              </span>
              <br></br>
              <br></br>
              
              <div className="job-label-cont">
                <p className="label-job">Type of clothing</p>
                <p className="jobs__details-item jobs__text-item">
                  {post.clothing_type}
                </p>
              </div>
              <div className="job-label-cont">
                <p className="label-job">Budget</p>
                <p className="jobs__details-item jobs__text-item">
                  {post.budget} AUD
                </p>
              </div>
              <div className="job-label-cont">
                <p className="label-job">Email Address</p>
                <p className="jobs__details-item jobs__text-item" name="user_email">
                  {post.email_address}
                </p>
              </div>
              <div className="job-label-cont">
                <p className="label-job">Location</p>
                <p className="jobs__details-item jobs__text-item">
                  {post.street_num} {post.streetname} , {post.state_name}{" "}
                  {post.post_code}
                </p>
              </div>
            </div>
          </div>
          <h4 className="description-label">Description</h4>
          <p className="jobs__details-item">{post.description}</p>
        </div>
        {/* <h2 className="section__title">Submit a request :</h2>   */}

        <section className="job_submission" >
          <h3 className="section__subtitle2">Submit a request</h3>
          <br></br>
          <div className="job-label-cont">
      
                <p className="label-job">Maker Cost</p>
             
                <input type="number"  onChange={(e)=>setCost(e.target.value)} className="maker-cost"></input>
          </div>
          <br></br>
          <ReactQuill className="editor" theme="snow" name="message" onChange= {setMessage} value={message}></ReactQuill>
        </section>
        {err && <p className="input-text error">{err}</p>}
        <button type="submit" onClick={handleSubmit} className="email-submit">submit</button>

        
      </div>
    </div>
  );
}

export default Submission;
