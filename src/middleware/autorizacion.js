export function verAutorizacion(req, res, next) {
  console.log("usuario con permiso: "+JSON.stringify(req.session));
  if (req.session && req.session.usuario) {
    
    next();
  } else {
    res.redirect("/login");
  }
}