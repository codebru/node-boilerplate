/* AUTH FUNCTIONS ************************* */
function isAuthenticated(req, res, next) {
// TODO change names of these funtions as they clash with the req.blah name
  if (req.isAuthenticated()) {
    next();
    return;
  }
  res.redirect('/user/login');
}

function isAlreadyAuthenticated(req, res, next) {
  if (!req.isAuthenticated()) {
    next();
    return;
  }
  res.redirect('/admin');
}
/* **************************************** */

/* EXPORTS ******************************** */
export { isAuthenticated, isAlreadyAuthenticated };
/* **************************************** */
