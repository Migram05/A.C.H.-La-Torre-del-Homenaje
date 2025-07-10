document.getElementById('form').addEventListener('submit', function(event) {
      event.preventDefault(); //Evita que se recargue la página

      const name = document.getElementById('fname').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('subject').value;

      const destinatario = "achlatorre@gmail.com";
      const asunto = encodeURIComponent("Mensaje de la web");
      const cuerpo = encodeURIComponent(`Emisor: ${name}\nDirección de correo: ${email}\n${message}`);

      const mailtoLink = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;
      window.location.href = mailtoLink;
      });