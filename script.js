console.log("読み込み成功");

alert("こんにちは");

const button =
  document.getElementById("changeButton");

button.addEventListener("click", function () {
  alert("押された！");
});

console.log(button);
