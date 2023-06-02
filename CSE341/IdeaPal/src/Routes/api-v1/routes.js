import { Router } from "express";
import articleRoute from "./Articles/Article";
import AuthRoute from "./Users/user";
const Route = Router();

Route.use("/api/v1/articles", articleRoute);
Route.use("/api/v1/auth/", AuthRoute);

export default Route;
