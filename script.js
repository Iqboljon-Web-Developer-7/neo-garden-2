const COUNTDOWN_SECONDS = 120; // 2 minutes — bump this single constant to change the duration

function startCountdown(el, seconds) {
  const end = Date.now() + seconds * 1000;
  const pad = n => String(n).padStart(2, "0");

  function tick() {
    const remain = Math.max(0, Math.round((end - Date.now()) / 1000));
    const h = Math.floor(remain / 3600);
    const m = Math.floor((remain % 3600) / 60);
    const s = remain % 60;
    el.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
    if (remain <= 0) clearInterval(timer);
  }

  tick();
  const timer = setInterval(tick, 1000);
}

const countdownEl = document.getElementById("countdown");
if (countdownEl) startCountdown(countdownEl, COUNTDOWN_SECONDS);
