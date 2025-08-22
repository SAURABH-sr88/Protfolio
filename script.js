document.getElementById('year').textContent = new Date().getFullYear();

function sendMessage(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('formStatus');

  if (!name || !email || !message) {
    status.textContent = 'Please fill all fields.';
    status.className = 'text-danger small mt-2';
    return false;
  }

  // Simple mailto fallback; replace with a form service if needed.
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
  window.location.href = `mailto:saurabh.srivastava1024@gmail.com?subject=${subject}&body=${body}`;

  status.textContent = 'Opening your email client…';
  status.className = 'text-muted small mt-2';
  e.target.reset();
  return false;
}


// Dark mode toggle
document.getElementById('darkToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const btn = document.getElementById('darkToggle');
  if(document.body.classList.contains('dark')){
    btn.textContent = '☀️';
  } else {
    btn.textContent = '🌙';
  }
});
