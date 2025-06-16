document.querySelectorAll("button[data-id-usuario]").forEach((btn)=>{
  btn.addEventListener("click", async ()=>{
    const idUsuario = btn.getAttribute("data-id-usuario");
    try {
      const res = await fetch("/amistades/solicitud",{
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({id_Usuario: idUsuario})
      });
      const data = await res.json();

      if(res.ok){
        btn.textContent = "Solicitud enviada";
      }else{
        alert("No se pudo enviar la solicitud.");
      }
    } catch (err) {
      alert("Error de red. Intenta nuevamente.");
    }
  })
})