const btnCancelar = document.getElementById('cancelar');
if(btnCancelar){
  btnCancelar.addEventListener('click', () => {
    window.location.href = '/login';
  })
};

const btnNoMail = document.getElementById('noMail');
if (btnNoMail) {
  btnNoMail.addEventListener('click', () => {
    window.location.href = '/recuperar';
  });
}