const randomGif = [
  "/images/jackyChanSilly.gif",
  "/images/cakeFumble.gif",
  "/images/thorFumble.gif",
  "/images/goal.gif",
  "/images/eatTheTree.gif",
  "/images/catFail.gif"
];

const gifBtn = document.querySelector("#gif-btn");

gifBtn.onclick = () => {
  $(".gif-box").attr("src", randomGif[Math.floor(Math.random() * randomGif.length)]);
};
