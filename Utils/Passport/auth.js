/* AUTH FUNCTIONS ************************* */
function isAuthenticated(req, res, next) {
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
module.exports = { isAuthenticated, isAlreadyAuthenticated };
/* **************************************** */
