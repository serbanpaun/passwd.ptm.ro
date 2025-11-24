const pwlower = document.getElementById('lowercase');
const pwupper = document.getElementById('uppercase');
const pwnumer = document.getElementById('numeric');
const pwspecs = document.getElementById('special');
const pwlowspecs = document.getElementById('lowspecial');
const generatebtn = document.getElementById('submit');

function switchbtn() {
  generatebtn.disabled = !pwlower.checked && !pwupper.checked && !pwnumer.checked && !pwspecs.checked && !pwlowspecs.checked;
}

function selectall() {
  pwlower.checked = true;
  pwupper.checked = true;
  pwnumer.checked = true;
  pwspecs.checked = true;
  pwlowspecs.checked = false;
  switchbtn();
}
function toggle() {
  pwlower.checked = !pwlower.checked;
  pwupper.checked = !pwupper.checked;
  pwnumer.checked = !pwnumer.checked;
  pwspecs.checked = !pwspecs.checked;
  pwlowspecs.checked = !pwlowspecs.checked;
  switchbtn();
}

document.getElementById('pwform').addEventListener('submit', function(e) {
  e.preventDefault(); // stop page refresh
  generatePassword();
});

function getRandomChar(str) {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return str[array[0] % str.length];
}

function generatePassword() {
  const alpha = "abcdefghjkmnpqrstuvwxyz";
  const alpha_upper = alpha.toUpperCase();
  const numeric = "0123456789";
  const lowspecial = "!@#$%&*-=+_";
  const special = lowspecial + "^[]'\\{}|,./?<>";
  let chars = "";
  let required = [];

  if (pwlower.checked) {
    chars += alpha;
    required.push(getRandomChar(alpha));
  }
  if (pwupper.checked) {
    chars += alpha_upper;
    required.push(getRandomChar(alpha_upper));
  }
  if (pwnumer.checked) {
    chars += numeric;
    required.push(getRandomChar(numeric));
  }
  if (pwlowspecs.checked) {
    chars += lowspecial;
    required.push(getRandomChar(lowspecial));
  } else if (pwspecs.checked) {
    chars += special;
    required.push(getRandomChar(special));
  }

  const len = parseInt(document.getElementById('length').value);
  let pw = required;

  for (let i = required.length; i < len; i++) {
    pw.push(getRandomChar(chars));
  }

  for (let i = pw.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pw[i], pw[j]] = [pw[j], pw[i]];
  }

  document.getElementById('cptctxt').innerText = pw.join('');
  document.getElementById('pwdbox').style.display = 'block';
}