function copyLyrics() {
  const lyricsEl = document.getElementById('lyrics');
  if (!lyricsEl) return;
  const text = lyricsEl.innerText.trim();
  navigator.clipboard.writeText(text).then(() => {
    const s = document.getElementById('copyStatus');
    if (s) {
      s.textContent = '???? ?? ??? ?';
      setTimeout(() => (s.textContent = ''), 2500);
    }
  }).catch(() => {
    const s = document.getElementById('copyStatus');
    if (s) s.textContent = '???? ???? ??? ?????? ???';
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('copyBtn');
  if (btn) btn.addEventListener('click', copyLyrics);
});
