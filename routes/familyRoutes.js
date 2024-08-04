import express from "express";
import {
  registerController,
} from "../controllers/familyController.js";


//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/registerfamily", registerController);



export default router;
