import express from 'express'

// import { addPost } from '../cont rollers/post.js'
import {upload} from "../controllers/auth.js";
const router = express.Router()

router.post("/upload",upload);

export default router;
