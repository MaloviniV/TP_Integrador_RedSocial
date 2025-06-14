export function verAutorizacion(req, res, next) {
  console.log("usuario con permiso: "+JSON.stringify(req.session));
  if (req.session && req.session.usuarioId) {
    
    next(); // Usuario autenticado, sigue
  } else {
    res.redirect("/login"); // No autenticado, redirige
  }
}