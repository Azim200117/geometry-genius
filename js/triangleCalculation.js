function calculateTriangleArea(){
  const triangleBaseInput = document.getElementById('triangle_base');
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  console.log(triangleBaseText);

  const triangleHeightInput = document.getElementById('triangle_height');
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  console.log(height)

  const area = 0.5 * base * height;
  console.log('Are of a triangle is : ', area);

  const triangleAreaSpan = document.getElementById('triangle_area');
  triangleAreaSpan.innerText = area;
}