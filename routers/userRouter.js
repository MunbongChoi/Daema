import express from "express";
import {
  handleUser,
  handleID,
  handleChangePW,
  handleEdit
} from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.user, handleUser); // http://localhost:3000/
userRouter.get(routes.id, handleID); // http://localhost:3000/login
userRouter.get(routes.cpw, handleChangePW);
userRouter.get(routes.edit, handleEdit);

export default userRouter;
