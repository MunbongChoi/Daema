export const handleHome = (req, res) => {
  console.log(req);
  res.send("HOME");
};
export const handlelogin = (req, res) => {
  res.send("Login");
};
export const handlelogout = (req, res) => {
  res.send("Logout");
};
export const handleJoin = (req, res) => {
  res.send("Join");
};
export const handleWriting = (req, res) => {
  res.send("Writing");
};
//하나만 리턴해주어선 안됨 그러므로 각각 export 해야함 export의 촤소 단위는 함수, 모듈
