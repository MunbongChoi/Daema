import app from "./app"; //app을 .app이란 파일에서 받음

const port = 3000;

const helloworld = () => {
  console.log(`Listening on ${port}`);
};
app.listen(port, helloworld);
