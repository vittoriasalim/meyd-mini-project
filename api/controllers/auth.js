import {db} from "../db.js";

export const upload = (req, res)=>{
    
    const job = "INSERT INTO meyd.client_job(first_name, last_name, street_num,streetname, state_name, post_code, clothing_type,budget, description,images,email_address) VALUES (?)"

    const values = [
        req.body.first_name,
        req.body.last_name,
        req.body.street_num,
        req.body.street_name,
        req.body.state_name,
        req.body.post_code,
        req.body.clothes_type,
        req.body.budget,
        req.body.description,
        req.body.images,
        req.body.email_add
    
    ]
    db.query(job,[values],(err, data)=>{
        if (err) return res.status(409).json("There is an error (invalid input). Make sure all required fields are filled "+err.message);
        return res.status(200).json("Job has been posted.");
    } );
};


