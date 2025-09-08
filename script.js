// 動画自動再生
const video = document.getElementById("heroVideo");
video.play().catch(() => {
  // ブラウザが自動再生をブロックした場合の保険
  video.muted = true;
  video.play();
});
