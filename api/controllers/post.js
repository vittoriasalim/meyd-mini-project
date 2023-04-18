import {db} from "../db.js"


export const getPost = (req,res)=>{
    const q =  "SELECT * FROM client_job";
    db.query(q,  (err,data)=>{
        if(err) return res.send(err);
        return res.status(200).json(data);
    })
}

export const getAJob = (req,res)=>{
    const q =  "SELECT * FROM client_job where client_job.id =?";
    db.query(q, [req.params.id], (err,data)=>{
        if(err) return res.send(err);
        return res.status(200).json(data[0]);
    })
 
}

export const filterJobs = (req, res) => {
    const values = [
        req.body.state_name,
        req.body.post_code,
        req.body.clothing_type
    ]
    console.log(values)

    if(values[0] === ""){
        values[0]='%'
    }
    if(values[1] === ""){
        values[1]='%'
    }
    if(values[2] === ""){
        values[2]='%'
    }
 

    const job = "SELECT * FROM client_job WHERE state_name LIKE ? AND post_code LIKE ? AND clothing_type LIKE ? "

    db.query(job,[values[0],values[1], values[2]],(err, data)=>{
        if (err) return res.send(err);
        return res.status(200).json(data);
    } );

};



  