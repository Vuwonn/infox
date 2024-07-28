import { Router } from "express";
import usercontrol from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(usercontrol);

export default router