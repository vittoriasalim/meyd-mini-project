import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import "./Customer.scss"
import axios from 'axios'

const Customer = () => {
  const [inputs, setInputs] =  useState({
    first_name : "",
    last_name:"",
    street_name:"",
    state_name:"",
    post_code:"",
    clothes_type:"Sari/Blouse", //default value
    budget:"0", 
    images:"",
    description:"",
    email_add:"",
    street_num:""
  })
  const[err,setError] = useState(null)
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      setError(err.response.data)
      console.log(err);
    }
  };

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
    console.log(inputs)
   
  }


  const handleSubmit =async e =>{
    e.preventDefault();
  
    const imgUrl = await upload();
    inputs.images = imgUrl;
    setInputs({...inputs});

    try{
  
      await axios.post("/auth/upload", inputs)

      navigate("/success")

    }catch(err){
      setError(err.response.data)

      
    }
    
  }
 
  return (
    <section className="customer section" >
    <h2 className="section__title" >MEYD.IT</h2>
    <span className="section__subtitle">fashion made especially for you</span>
    <div className="customer__container container grid">
    <img src="./asset/client.png" alt="" className="customer__img"></img>
      

        <form className="customer__data">
            <h2 className="home_heading" >Start a job.</h2>
            {/* name */}
            <input type="text" className="form-input" onChange={handleChange} name="first_name" id="first_name" placeholder="First Name"></input>
            <input type="text" className="form-input" onChange={handleChange} name="last_name" id="last_name" placeholder="Last Name"></input>
            <br></br>
            <label for="email_add" class="input-text">Email Address</label><br></br>
            <input type="text" onChange={handleChange} placeholder='Email Address' className="form-input email-address" name="email_add" id="email_add"></input>
            <br></br>
            {/* address */}
            <label for="street_num" class="input-text">Street Number</label><br></br>
            <input type="number" onChange={handleChange} className="form-input" name = "street_num" id = "street_num" placeholder='Street Number' ></input>
            <br></br>
            <label for="street_name" class="input-text">Street Name</label><br></br>
            
            <input type="text" onChange={handleChange} className="form-input address" name = "street_name" id = "street_name" placeholder='Street Name' ></input>
            <br></br>
            <input type="text" onChange={handleChange} className="form-input address"  name= "state_name" id= "state_name" placeholder="State Name"></input>
            <input type="number" onChange={handleChange} className="form-input address" name= "post_code" id = "post_code" placeholder="Post Code"></input>
          
            <br></br>

            {/* clothing type */}
            <label for="clothes-type" className="input-text">Type Of Clothing</label> <br></br>
            <select className="form-input"onChange={handleChange} id="clothes_type" name="clothes_type">
              <option  selected="Sari/Blouse" >Sari/Blouse</option>
              <option value="Dress">Dress</option>
              <option value="Ethnic Wear">Ethnic Wear</option>

            </select>
            <br></br>
            {/* budget */}
            <label for="budget" class="input-text">Budget (optional)</label>
            <input type="number" name="budget" onChange={handleChange} className="form-input address" id="budget" placeholder='Enter a nominal'></input>
            <br></br>

            {/* description */}
            <label for="description" class="input-text">Description</label><br></br>
            <textarea name="description" onChange={handleChange} className="form-input" id="description" cols="40" rows="5" class="form-input"></textarea><br></br>

            {/* upload image */}
            <label for="images" class="input-text">Upload Sample Image</label><br></br>
            <input type="file" accept="image/*" id="images" onChange={(e)=>setFile(e.target.files[0])} className="form-input" name="images" ></input>
            <br></br>

            {err && <p className="input-text error">{err}</p>}
            <input type="submit" onClick={handleSubmit} className="customer-button"value="Submit"></input>
            
         
        </form>
        


    </div>
    
</section> 
  )
}

export default Customer