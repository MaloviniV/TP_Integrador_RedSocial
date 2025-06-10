const btnNuevaCuenta = document.getElementById("btnNuevaCuenta");
if(btnNuevaCuenta){
  btnNuevaCuenta.addEventListener("click",()=>{
    location.href = "/usuario/registro"
  });
};