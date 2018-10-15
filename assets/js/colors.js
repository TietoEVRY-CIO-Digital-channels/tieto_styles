var sample = document.querySelectorAll('div[class^=color-]');

function rgb2hex(rgb) {
  if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x) {
      return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

for (var i = 0; i < sample.length; i++) {
  console.log(sample[i])
  sample[i].nextElementSibling.textContent = rgb2hex(window.getComputedStyle(sample[i], null).getPropertyValue('background-color'));
}
