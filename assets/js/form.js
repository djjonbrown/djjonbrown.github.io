const btn = document.getElementById('contact_button');

document.getElementById('contact_form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_f440rln';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Message';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Message';
      alert(JSON.stringify(err));
    });
});