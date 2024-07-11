function btnclick(val) {
  var currentVal = document.getElementById("input").value;
  document.getElementById("input").value = currentVal + val;
}
function eva(){
  var currentVal = document.getElementById("input").value;
  const result = eval(currentVal);
  document.getElementById("input").value = "";
  document.getElementById("input").value = result;
}