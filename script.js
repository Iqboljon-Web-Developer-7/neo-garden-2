const COUNTDOWN_SECONDS = 120; // 2 minutes — bump this single constant to change the duration

function startCountdown(el, seconds) {
  const end = Date.now() + seconds * 1000;
  const pad = n => String(n).padStart(2, "0");

  function tick() {
    const remain = Math.max(0, Math.round((end - Date.now()) / 1000));
    const m = Math.floor(remain / 60);
    const s = remain % 60;
    el.textContent = `${pad(m)}:${pad(s)}`;
    if (remain <= 0) clearInterval(timer);
  }

  tick();
  const timer = setInterval(tick, 1000);
}

const countdownEl = document.getElementById("countdown");
if (countdownEl) startCountdown(countdownEl, COUNTDOWN_SECONDS);

// The CTA leaves for Telegram, so there is no thank-you page on our domain for
// Meta to detect — the click itself is the conversion signal and has to be sent
// from here. Event Setup Tool cannot wire this up; it must stay in code.
const ctaEl = document.querySelector(".cta");
if (ctaEl) {
  ctaEl.addEventListener("click", () => {
    if (typeof fbq === "function") fbq("track", "Lead", { content_name: "telegram-cta" });
  });
}
