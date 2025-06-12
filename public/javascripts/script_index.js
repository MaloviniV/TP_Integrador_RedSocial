const btnLogin = document.getElementById("btnLogin");
if(btnLogin){
  btnLogin.addEventListener("click",()=>{
    location.href = "/login"
  });
};

const btnCrearCuenta = document.getElementById("btnCrearCuenta");
if(btnCrearCuenta){
  btnCrearCuenta.addEventListener("click",()=>{
    location.href = "/usuario/registro"
  });
};