function calculatePentagonArea(){
  const pentagonBaseInput = document.getElementById('pentagon_base');
  const pentagonBaseText = pentagonBaseInput.value;
  const base = parseFloat(pentagonBaseText);
  console.log(base);

  const pentagonHeightInput = document.getElementById('triangle_height');
  const pentagonHeightText = pentagonHeightInput.value;
  const height = parseFloat(pentagonBaseText);
  console.log(height)

  const area = 0.5 * base * height;
  console.log('Are of a pentagon is : ', area);

  const triangleAreaSpan = document.getElementById('pentagon_area');
  triangleAreaSpan.innerText = area;
}