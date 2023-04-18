import express from 'express'
import { getAJob, getPost, filterJobs } from '../controllers/post.js'

const router = express.Router()



router.get("/", getPost)
router.get("/:id", getAJob)
router.post("/filter", filterJobs)


export default router
