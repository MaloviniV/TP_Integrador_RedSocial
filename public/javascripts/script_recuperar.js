const btnCancelar = document.getElementById('cancelar');
if(btnCancelar){
  btnCancelar.addEventListener('click', () => {
    location.href = '/login';
  })
};

const btnNoMail = document.getElementById('noMail');
if (btnNoMail) {
  btnNoMail.addEventListener('click', () => {
    location.href = '/recuperar';
  });
};

const btnEnviar = document.getElementById('btnEnviar');
if (btnEnviar) {
  btnNoMail.addEventListener('click', () => {
    location.href = '/login';
  });
};