function operar(operador) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultadoSpan = document.getElementById("resultado");

  if (isNaN(num1) || isNaN(num2)) {
    resultadoSpan.textContent = "Por favor ingresa ambos números";
    return;
  }

  let resultado;

  if (operador === "+") {
    resultado = num1 + num2;
  } else if (operador === "-") {
    resultado = num1 - num2;
  } else if (operador === "*") {
    resultado = num1 * num2;
  } else if (operador === "/") {
    resultado = num1 / num2;
  } else {
    alert("Ingresar datos");
  }

  //   switch (operador) {
  //     case "+":
  //       resultado = num1 + num2;
  //       break;
  //     case "-":
  //       resultado = num1 - num2;
  //       break;
  //     case "*":
  //       resultado = num1 * num2;
  //       break;
  //     case "/":
  //       resultado = num1 / num2;
  //       break;
  //   }

  resultadoSpan.textContent = resultado;
}
