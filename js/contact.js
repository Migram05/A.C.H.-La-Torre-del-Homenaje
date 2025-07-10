//Funcionalidad para enviar un mensaje desde la web
//Utiliza el sistema de "mailto" de HTML, que hace que se abra una pestaña con el correo para enviar
//Se hace de esta manera porque de lo contrario habría que encargarse del backend o usar una API
//La opción de la API es buena, pero el problema es que la clave sería pública
document.getElementById('form').addEventListener('submit', function(event) {
	event.preventDefault(); //Evita que se recargue la página
	const email = document.getElementById('email').value;
	if(validateEmail(email)){
  
		const name = document.getElementById('name').value;
		const message = document.getElementById('subject').value;
  
		const destinatario = "achlatorre@gmail.com";
		const asunto = encodeURIComponent("Mensaje de la web");
		const cuerpo = encodeURIComponent(`Emisor: ${name}\nDirección de correo: ${email}\n${message}`);
  
		const mailtoLink = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;
		window.location.href = mailtoLink;
	}
	else{
		alert("Dirección de correo electrónica no válida.")
	}
      });

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}