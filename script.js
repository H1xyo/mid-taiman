const tips = [
  "リロードは壁裏で！",
  "エイムより立ち回り！",
  "最初のダッシュで有利を取れ！"
];

document.addEventListener("DOMContentLoaded", () => {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  alert("今日の攻略ヒント: " + randomTip);
});
