const includesOperator = (text) => {
  const operators = ['+', '-', '*', '/', '='];
  const arrayValues = text.split(' ');

  console.log(arrayValues);
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes
  if(arrayValues && operators.includes(arrayValues[arrayValues.length -1])) {
    return true;
  }

  return false;
}

// https://metring.com.br/arredondar-numero-em-javascript
const round = (num, places) => {
	if (!("" + num).includes("e")) {
		return +(Math.round(num + "e+" + places)  + "e-" + places);
	} else {
		let arr = ("" + num).split("e");
		let sig = ""
		if (+arr[1] + places > 0) {
			sig = "+";
		}

		return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + places)) + "e-" + places);
	}
}

export const operationEquals = (value) => {
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes
    if(value.includes("+")){
      const array = value.split("+");
      let result = 0;
      
      array.forEach((item) => {
        result += parseFloat(item);
      })
      
      return round(result, 4).toString();
    }

    if(value.includes("-")){
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
      const array = value.split("-");
      let result = array[0];
      array.splice(array.indexOf(array[0]), 1);
      
      array.forEach((item) => {
        result = result - parseFloat(item);
      })

      return round(result, 4).toString()
    }

    if(value.includes("*")){
      const array = value.split("*");
      let result = 1;
      
      array.forEach((item) => {
        result *= parseFloat(item);
      })

      return round(result, 4).toString()
    }

    if(value.includes("/")){
      const array = value.split("/");
      const result = parseFloat(array[0]) / parseFloat(array[1]);

      return round(result, 4).toString()
    }

    return value;
  }

  export { includesOperator }