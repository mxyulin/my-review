const inputList = document.querySelectorAll(".button .enabled");
// const expression = document.querySelector("#expression");
const result = document.querySelector("#result");
let len = inputList.length,
  num1 = "0",
  num2 = "0",
  sign = "";
for (let i = 0; i < len; i++) {
  inputList[i].onclick = function () {
    // console.log(typeof(expression.value));
    if (!isNaN(this.innerHTML) || this.innerHTML === ".") {
      // 输入小数点和数字时
      if (num1.includes(".") || num2.includes(".")) {
        // 已包含小数点时
        if (this.innerHTML !== ".") {
          // 输入的只是数字时
          if (sign.length > 0) {
            num2 = this.innerHTML;
          } else num1 = this.innerHTML;
        } else {
          // 输入的刚好是小数点时
          console.log(
            "已有 " + this.innerHTML + " 无法重复输入 " + this.innerHTML
          );
        }
      } else {
        // 输出口不含小数点时
        if (
          result.value.startsWith("0", 0) &&
          this.innerHTML !== "0" &&
          this.innerHTML !== "."
        ) {
          // 去掉非 0 输入时，输出口默认的第一个拼接字符 0
          result.value += this.innerHTML;
          result.value = result.value.slice(1);
        } else if (result.value.startsWith("0", 0) && this.innerHTML === "0") {
          console.log("已有 0 无法重复输入 0");
        } else {
          result.value += this.innerHTML;
        }
      }
    } else {
      // 输入运算符时的操作
      if (this.innerHTML !== "=") {
        // 输入非“=”符的运算符时
        expression.value += result.value + this.innerHTML;
      }
      // 需要解决 .+ 输出成为 0+ 的问题
    }
  };

  // 四则运算
  function calculate(num1, num2, sign) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (sign) {
      case "+":
        num1 += num2;
        break;
      case "-":
        num1 -= num2;
        break;
      case "*":
        num1 = num1 * num2;
        break;
      case "-":
        num1 = num1 / num2;
        break;
    }
  }
}
