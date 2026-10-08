function sendEmail(event){
  event.preventDefault();
  const name=document.getElementById('name').value;
  const email=document.getElementById('email').value;
  const subject=document.getElementById('subject').value;
  const message=document.getElementById('message').value;
  const body=`Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
  window.location.href=`mailto:your@email.com?subject=${encodeURIComponent(subject)}&body=${body}`;
}