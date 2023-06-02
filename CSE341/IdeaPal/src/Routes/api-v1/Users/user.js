import { Router } from "express";
import UserController from "../../../contoroller/user";

const userRoute = Router();
userRoute.post("/signup", UserController.registeration);
userRoute.post("/signin", UserController.signIn);
export default userRoute;
