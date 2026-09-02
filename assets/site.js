/* ==========================================================================
   Tiện ích dùng chung cho mọi trang:
     · nút đổi giao diện sáng / tối (ghi nhớ trong localStorage)
     · ảnh đại diện có phương án dự phòng khi thiếu file ảnh
     · thanh tiến trình từng bộ đề ở trang chủ
   Không phụ thuộc thư viện ngoài; hỏng cũng không làm vỡ trang.
   ========================================================================== */
(function () {
  "use strict";

  var THEME_KEY = "step2ck:theme";

  function readTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function systemDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function effectiveDark() {
    var t = readTheme();
    return t ? t === "dark" : systemDark();
  }

  function applyTheme(t) {
    if (t) document.documentElement.setAttribute("data-theme", t);
    else document.documentElement.removeAttribute("data-theme");
    paintToggle();
  }

  var SUN =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/>' +
    '<path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7"/></svg>';
  var MOON =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.4A8.5 8.5 0 1 1 9.6 3.5a6.8 6.8 0 0 0 10.9 10.9z"/></svg>';

  function paintToggle() {
    var btn = document.querySelector(".themetoggle");
    if (!btn) return;
    var dark = effectiveDark();
    btn.innerHTML = (dark ? SUN : MOON) + "<span>" + (dark ? "Nền sáng" : "Nền tối") + "</span>";
    btn.setAttribute("aria-label", dark ? "Chuyển sang nền sáng" : "Chuyển sang nền tối");
  }

  function wireToggle() {
    var btn = document.querySelector(".themetoggle");
    if (!btn) return;
    paintToggle();
    btn.addEventListener("click", function () {
      var next = effectiveDark() ? "light" : "dark";
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (e) {}
      applyTheme(next);
    });
    if (window.matchMedia) {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      var onChange = function () {
        if (!readTheme()) paintToggle();
      };
      if (mq.addEventListener) mq.addEventListener("change", onChange);
      else if (mq.addListener) mq.addListener(onChange);
    }
  }

  /* --- ảnh đại diện: nếu chưa có file ảnh thì hiện chữ cái dự phòng --- */
  function wireAvatars() {
    document.querySelectorAll(".avatar img").forEach(function (img) {
      var hide = function () {
        img.style.display = "none";
      };
      if (img.complete && img.naturalWidth === 0) hide();
      img.addEventListener("error", hide);
    });
  }

  /* --- tiến trình từng bộ đề ở trang chủ --- */
  function progressFor(id, count) {
    var out = { answered: 0, correct: 0, total: count };
    try {
      var raw = localStorage.getItem("step2ck:" + id + ":v1");
      if (!raw) return out;
      var s = JSON.parse(raw);
      if (!s || !Array.isArray(s.locked)) return out;
      for (var i = 0; i < s.locked.length; i++) if (s.locked[i]) out.answered++;
    } catch (e) {}
    return out;
  }

  function wireHomeProgress() {
    var cards = document.querySelectorAll(".set[data-set]");
    if (!cards.length) return;
    var doneAll = 0;

    cards.forEach(function (card) {
      var id = card.getAttribute("data-set");
      var count = Number(card.getAttribute("data-count")) || 0;
      var p = progressFor(id, count);
      doneAll += p.answered;

      var bar = card.querySelector(".prog i");
      if (bar) bar.style.width = (count ? Math.round((p.answered / count) * 100) : 0) + "%";

      var badge = card.querySelector(".state");
      if (!badge) return;
      if (p.answered === 0) {
        badge.textContent = "Bắt đầu";
        badge.className = "state";
      } else if (p.answered >= count) {
        badge.textContent = "Đã xong";
        badge.className = "state full";
      } else {
        badge.textContent = p.answered + "/" + count;
        badge.className = "state part";
      }
    });

    var stat = document.getElementById("stat-done");
    if (stat) stat.textContent = doneAll;
  }

  function init() {
    wireToggle();
    wireAvatars();
    wireHomeProgress();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
