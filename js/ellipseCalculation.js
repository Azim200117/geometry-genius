function ellipseCalculation(){
  const ellispseAreaInput = document.getElementById('ellispse_area');
  const ellispseAreaText = ellispseAreaInput.value;
  const area = parseFloat(ellispseAreaText);
  console.log(area);

  const ellispseBaseInput = document.getElementById('ellispse_base');
  const ellispseBaseText = ellispseBaseInput.value;
  const base = parseFloat(ellispseBaseText);
  console.log(base);

  const radius = 3.1415 * base * area;
  console.log('Are of a ellipse is : ', radius);

  const triangleAreaSpan = document.getElementById('ellipse_radius');
  triangleAreaSpan.innerText = radius;
}