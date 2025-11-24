  const num = document.getElementById('length');
	num.addEventListener('wheel', function(e) {
	  e.preventDefault();
	  const step = parseFloat(this.step) || 1;
	  let value = parseFloat(this.value) || 0;

	  if (e.deltaY < 0) value += step;
	  else value -= step;

	  if (this.hasAttribute('min')) value = Math.max(value, parseFloat(this.min));
	  if (this.hasAttribute('max')) value = Math.min(value, parseFloat(this.max));

	  this.value = value;
	});