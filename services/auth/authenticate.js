export default (ctx) => {
  const { req, res } = ctx
  const token = req.universalCookies.get('token')
  if (!token) {
    res.redirect('/')
  } else {
    return { username: 'testUser' }
  }
}
