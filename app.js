import express from "express";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";

const app = express();

app.use("/", globalRouter); //시작지점을 user로 지정 //라우터사용
app.use("/user", userRouter);
export default app; //app을 다른 JS에서 사용을 위해 내보냄
