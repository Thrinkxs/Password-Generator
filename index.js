const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let passwordOneEl = document.getElementById("password-one");
let passwordTwoEl = document.getElementById("password-two");

function passGen() {
  let char = [];
  let shar = [];
  while (char.length < 15 && shar.length < 15) {
    let password = Math.floor(Math.random() * characters.length);
    let passwordEl = characters[password];
    char += passwordEl;
    let password2 = Math.floor(Math.random() * characters.length);
    let passwordEl2 = characters[password2];
    shar += passwordEl2;
  }
  passwordOneEl.textContent = char;
  passwordTwoEl.textContent = shar;
}

/*const p = document.querySelector("p");
p.onclick = function () {
  document.execCommand("copy");
};

p.addEventListener("copy", function (event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", p.textContent);
    console.log(event.clipboardData.getData("text"));
  }
}); /*
/*button.onclick = function () {
  repeat;
}; /*
function copy() {
  //Get text field
  let copyText = document.getElementById("password-one");
  let copyText2 = document.getElementById("password-two");
  //Select text field
  copyText.select();
  copyText2.select();
  copyText.setSelectionRange(0, 99999);
  copyText2.setSelectionRange(0, 99999);
  //Copy the text insode the text field

  navigator.clipboard.writeText(copyText.value);
  navigator.clipboard.writeText(copyText2.value);

  //Alert the copied textAlign
  alert("Text Copied" + copyText.value);
  alert("Text Copied" + copyText2.value);
}
*/
let text = document.getElementById("password-one").innerHTML;
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
passwordOneEl.addEventListener("click", () => {
  navigator.clipboard.writeText(char);
});
*/
