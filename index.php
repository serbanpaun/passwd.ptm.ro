<?php
$nonce = base64_encode(random_bytes(16));
header("Content-Security-Policy: default-src 'self'; script-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ 'nonce-$nonce'; style-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/; font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/;");
?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>Strong Password Generator • PTM.ro</title>
<meta name="description" content="Strong Password Generator. We *DO NOT* store anything on our servers. Your data is secure!">
<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<a href="/">
  <span class="title"><strong>Strong</strong> Password Generator</span>
</a>

<form id="pwform" class="form-horizontal">
<fieldset>
<div id="options" onchange="switchbtn();" onfocus="switchbtn();">
  <input type="checkbox" checked name="alpha" id="lowercase"><label for="lowercase">lowercase</label><br>
  <input type="checkbox" checked name="alpha_upper" id="uppercase"><label for="uppercase">UPPERCASE</label><br>
  <input type="checkbox" checked name="numeric" id="numeric"><label for="numeric">Numb3r5</label><br>
  <input type="checkbox" checked name="special" id="special"><label for="special">$ymbols</label>
  <input type="checkbox" name="lowspecial" id="lowspecial"><label for="lowspecial">Limited</label><br>

  <button type="button" class="btn btn-primary" onclick="toggle();">Toggle</button>
  <button type="button" class="btn btn-primary" onclick="selectall();">Select all</button>
  <hr>
  <div id="bottom">
  <button id="submit" type="submit" class="btn btn-primary">Generate</button> <input id="length" name="length" type="number" min=16 max=128 value=16> characters

	<script src="numbers.js"></script>
  <div id="notice">
  	Minimum password length is 16 characters!<br>
  	We do not generate passwords longer than 128 characters, because that would be madness!
  </div>
  </div>
</div>
</fieldset>
</form>

<script src="generate.js"></script>
<div id="pwdbox">
  <div id="hint">Copied to clipboard</div>
  <pre id="cptctxt"></pre>
  <script nonce="<?= $nonce ?>" src="copytoclipboard.js"></script>
</div>
<footer>
<small>No generated passwords are stored on this server. &bull; <span class="red">PTM.ro</span> &bull; 2015 - <script src="showyear.js"></script> &copy; All rights reserved &bull; 
  This code is
  <a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Fpasswd.ptm.ro%2F" title="W3C Markup Validation">HTML5</a>
   and
  <a href="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fpasswd.ptm.ro&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en" title="W3C CSS Validation Service">CSS3</a> valid.
</small>
</footer>
</body>
</html>
