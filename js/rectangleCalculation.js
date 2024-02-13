function rectangleCalculateArea(){
  const lengthInput = document.getElementById('rectangle_length');
  const lengthText = lengthInput.value;
  const lenght = parseFloat(lengthText);
  console.log(lenght);

  const widthInput = document.getElementById('rectangle_width');
  const widthText = widthInput.value;
  const width = parseFloat(widthText);
  console.log(width)

  const area = lenght * width;
  console.log("Area of the rectangle is : ", area);

  const rectangleAreaSpan = document.getElementById('rectangle_area');
  rectangleAreaSpan.innerText = area;
}