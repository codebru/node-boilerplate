import {NextFunction, Request, Response} from "express";

/* AUTH FUNCTIONS ************************* */
function isAuthenticated(req: Request, res: Response, next: NextFunction) {
// TODO change names of these funtions as they clash with the req.blah name
  if (req.isAuthenticated()) {
    next();
    return;
  }
  res.redirect('/user/login');
}

function isAlreadyAuthenticated(req: Request, res: Response, next: NextFunction) {
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
