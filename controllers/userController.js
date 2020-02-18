export const handleUser = (req, res) => {
  console.log(req);
  res.send("User");
};
export const handleID = (req, res) => {
  res.send("ID");
};
export const handleChangePW = (req, res) => {
  res.send("Change password");
};
export const handleEdit = (req, res) => {
  res.send("Edit");
};
