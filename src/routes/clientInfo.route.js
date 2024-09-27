import { Router } from "express";
import registerContact from "../controllers/registerContact.controller";

const router = Router();

router.route('/register').post(registerContact)

export default router