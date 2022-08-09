// 获取 DOM

const form = document.getElementById('myForm');
const usr = document.getElementById('usr');
const email = document.getElementById('email');
const psw = document.getElementById('psw');
const pswAgain = document.getElementById('pswAgain');

// 封装公共验证提示方法

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  // const span = formControl.lastChild;
  formControl.setAttribute('class', 'form-control err');
  formControl.lastElementChild.innerText = message;
}

// show input success message
function showSuccess(input) {
  const formControl = input.parentElement;
  // const span = formControl.lastChild;
  formControl.setAttribute('class', 'form-control success');
}

// 获取表单项的名字
function getFieldName(input) {
  const formControl = input.parentElement;
  const lable = formControl.firstElementChild;
  return lable.innerText;
}

// 其他验证

// Check email is valid
function checkEmail(input) {
  const reg =
    /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // trim（） 删除字符串两端空格
    if (reg.test(input.value.trim())) {
      showSuccess(input);
  } else {
    showError(input, '邮箱不合法');
  }
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  for (input of inputArr) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)}必填`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  }
  return isRequired;
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)}至少${min}字符`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)}最多${max}字符`);
  } else {
    showSuccess(input);
  }
}

// check password match
function checkPswMatch(inputA, inputB) {
  if (inputA.value !== inputB.value) {
    showError(inputB, '密码不匹配');
  }
}

// submit form
form.addEventListener('submit', (event) => {
  event.preventDefault();// 阻止提交表单
  if (!checkRequired([usr, email, psw, pswAgain])) {// 检查必填与否
    checkLength(usr, 3, 15);
    checkLength(psw, 6, 25);
    checkEmail(email);
    checkPswMatch(psw, pswAgain);
  }
})
