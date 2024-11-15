import { Router } from "express";
import {
  createUser,
  deleteUser,
  addFriend,
  userUpdateProfile,
  getFriendList,
} from "../controller/user.controller.js";
import { userValidateLogin } from "../controller/sessions.controller.js";
import { verifyToken } from "../middlewares/ensureAuthenticated.js";

const router = Router();
router.get("/friends", verifyToken, getFriendList);
router.post("/register", createUser);
router.post("/edit", verifyToken, userUpdateProfile);
router.post("/add", verifyToken, addFriend);
router.post("/validation", userValidateLogin);
// verifyToken => MIDDLEWARE

router.delete("/delete", deleteUser);

export default router;
