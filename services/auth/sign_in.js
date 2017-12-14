export default ctx => {
  const { req, res } = ctx;
  req.universalCookies.set("token", "test");
  res.redirect("/");
};
