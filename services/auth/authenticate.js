export default ctx => {
  const { req, res } = ctx;
  const token = req.universalCookies.get("token");
  if (!token) {
    return res.redirect("/");
  }
  return { username: "testUser" };
};
