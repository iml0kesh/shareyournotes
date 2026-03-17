import { Router } from "express";
const router = Router();
import Auth from "../middleware/auth.js";

import { userRegister, userLogin, userVerify } from "../controllers/userCtrl.js";

// Register User Route.
router.post("/register", userRegister);

// Login User Route.
router.post("/login", userLogin);

// Verify Login
router.get("/verify", userVerify);

export default router;
