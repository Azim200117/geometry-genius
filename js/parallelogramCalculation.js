function parallelogramCalculateArea(){
  const baseInput = document.getElementById('parallelogram_base');
  const baseText = baseInput.value;
  const base = parseFloat(baseText);
  console.log(base);

  const heightInput = document.getElementById('parallelogram_height');
  const heightText = heightInput.value;
  const height = parseFloat(heightText);
  console.log(height)

  const area = base * height;
  console.log("Area of the parallelogram is : ", area);

  const parallelogramAreaSpan = document.getElementById('parallelogram_area');
  parallelogramAreaSpan.innerText = area;
}