import express from "express";
import {
  handleHome,
  handlelogin,
  handlelogout,
  handleJoin,
  handleWriting
} from "../controllers/globalController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, handleHome); // http://localhost:3000/
globalRouter.get(routes.login, handlelogin);
globalRouter.get(routes.logout, handlelogout);
globalRouter.get(routes.join, handleJoin);
globalRouter.get(routes.writing, handleWriting);

export default globalRouter;
