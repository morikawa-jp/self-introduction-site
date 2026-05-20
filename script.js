console.log("読み込み成功");

alert("こんにちは");

const button =
  document.getElementById("changeButton");

const title =
  document.getElementById("title");

button.addEventListener("click", function () {
  title.textContent = "変更された！";
});

console.log(button);
