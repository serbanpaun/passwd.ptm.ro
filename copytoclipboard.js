document.getElementById('cptctxt').addEventListener('click', function() {
    copyToClipboard();
});

function copyToClipboard() {
  const content = document.getElementById('cptctxt');
  navigator.clipboard.writeText(content.innerText);
    const hint = document.getElementById('hint');
    hint.style.display = "block";
    hint.style.opacity = 1;
    setTimeout(() => {
      hint.style.opacity = 0;
      hint.addEventListener('transitionend', function handler() {
        hint.style.display = "none";
        hint.removeEventListener('transitionend', handler);
      });
    }, 2000);
}