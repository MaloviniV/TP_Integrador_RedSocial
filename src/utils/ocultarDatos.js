export function ocultarEmail(email) {
  if (!email) return '';
  const [user, domain] = email.split('@');
  const visible = user.slice(0, 2);
  return `${visible}***@${domain}`;
}

export function ocultarTelefono(telefono) {
  if (!telefono) return '';
  return telefono.slice(0, 2) + '****' + telefono.slice(-2);
}