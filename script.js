console.log("読み込み成功");

alert("ようこそ");

const button =
  document.getElementById("changeButton");

const title =
  document.getElementById("title");

button.addEventListener("click", function () {
  title.textContent = "閲覧いただきありがとうございます。";
});

document.body.style.backgroundColor =
  "pink";

console.log(button);
