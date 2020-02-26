class Stack {
  constructor() {
    this.items = [];
  }
  pop() {
    return this.items.pop();
  }
  push(item) {
    this.items.push(item);
  }
  isEmpty() {
    return this.items.length === 0;
  }
  get size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
}

// 应用
// 十进制转二进制
function convert(num) {
  const stack = new Stack();
  let remainder;
  while (num > 0) {
    remainder = num % 2;
    stack.push(remainder);
    num = Math.floor(num / 2);
  }
  let str = "";
  while (!stack.isEmpty()) {
    str += stack.pop();
  }
  return str;
}
const str = convert(7);
console.log("转化的二进制数为", str); // 111

// 括号匹配
function isMatch(str) {
  const map = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  const stack = new Stack();
  for (let i = 0, length = str.length; i < length; i++) {
    let char = str[i];
    if (char in map) {
      stack.push(char);
    } else if (map[stack.pop()] !== char) {
      return false;
    }
  }

  return !stack.length; // 最后判断，如果栈为空，则匹配
}

const str2 = "([{}]{})";
const match = isMatch(str2);
console.log("匹配吗", match);
