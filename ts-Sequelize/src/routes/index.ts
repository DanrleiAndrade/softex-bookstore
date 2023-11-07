import { Router } from "express"
import { clientRouter } from "./clientRouter"

const router = Router()

router.use(clientRouter)

export default router