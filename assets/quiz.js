/* ==========================================================================
   Bộ máy làm đề dùng chung cho mọi bộ ca lâm sàng.
   Trang gọi vào cần:
     1. nạp assets/style.css
     2. nạp một file trong sets/ đặt biến toàn cục QUIZ_SET
     3. nạp file này (sau file dữ liệu)
   Cấu trúc QUIZ_SET xem chi tiết trong README.md.
   ========================================================================== */
(function () {
  "use strict";

  var SET = window.QUIZ_SET;
  if (!SET || !Array.isArray(SET.cases) || !SET.cases.length) {
    document.getElementById("stage").innerHTML =
      '<div class="body">Không nạp được dữ liệu bộ đề. Kiểm tra lại thẻ script trỏ tới file trong thư mục sets/.</div>';
    return;
  }

  var CASES = SET.cases;
  var N = CASES.length;
  var LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"];
  var KEY = "step2ck:" + (SET.id || "default") + ":v1";

  var state = blank();

  function blank() {
    return { i: 0, picked: fill(null), locked: fill(false), done: false };
  }
  function fill(v) {
    var a = [];
    for (var i = 0; i < N; i++) a.push(v);
    return a;
  }

  /* --- lưu tiến trình trên máy người dùng, hỏng thì bỏ qua --- */
  try {
    var saved = JSON.parse(localStorage.getItem(KEY) || "null");
    if (saved && Array.isArray(saved.picked) && saved.picked.length === N) {
      state.picked = saved.picked;
      state.locked = saved.locked;
      state.done = !!saved.done;
      state.i = Math.min(Math.max(saved.i | 0, 0), N - 1);
    }
  } catch (e) {}

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function answeredCount() {
    return state.locked.filter(Boolean).length;
  }
  function correctCount() {
    return state.locked.reduce(function (n, l, i) {
      return n + (l && state.picked[i] === CASES[i].answer ? 1 : 0);
    }, 0);
  }

  /* ---------------------------------------------------------------- render */

  function renderScore() {
    var box = document.getElementById("scorebox");
    if (!box) return;
    var a = answeredCount();
    box.innerHTML =
      a === 0
        ? "<b>0/" + N + "</b>chưa bắt đầu"
        : "<b>" + correctCount() + "/" + a + "</b>đúng trên " + a + " câu đã làm";
  }

  function renderRail() {
    var rail = document.getElementById("rail");
    rail.innerHTML = "";
    CASES.forEach(function (c, idx) {
      var b = document.createElement("button");
      b.className = "pip";
      var st = "todo";
      if (state.locked[idx]) st = state.picked[idx] === c.answer ? "correct" : "wrong";
      if (!state.done && idx === state.i) st = "current";
      b.dataset.state = st;
      b.innerHTML = '<span class="bar"></span><span class="lbl">' + (idx + 1) + " · " + c.spec + "</span>";
      b.disabled = !state.locked[idx] && idx !== state.i;
      b.onclick = function () {
        state.done = false;
        state.i = idx;
        save();
        render();
      };
      rail.appendChild(b);
    });
  }

  function vitalsBlock(v) {
    if (!v || !v.length) return "";
    var cells = v
      .map(function (x) {
        return "<div><span>" + x[0] + "</span><b>" + x[1] + "</b></div>";
      })
      .join("");
    return '<div class="datablock"><h4>Dấu hiệu sinh tồn</h4><div class="vitals">' + cells + "</div></div>";
  }

  function labTable(labs) {
    if (!labs) return "";
    var rows = labs.rows
      .map(function (r) {
        return (
          '<tr><td class="name">' + r[0] +
          '</td><td class="val ' + (r[3] || "") + '">' + r[1] +
          '</td><td class="ref">' + r[2] + "</td></tr>"
        );
      })
      .join("");
    return (
      '<div class="datablock"><h4>' + labs.title +
      '</h4><table class="labs"><tbody>' + rows + "</tbody></table></div>"
    );
  }

  function explanationHTML(c, picked) {
    var ok = picked === c.answer;
    var wrongItems = Object.keys(c.wrongs)
      .map(function (j) {
        return '<li><span class="k">' + LETTERS[j] + '</span><span>' + c.wrongs[j] + "</span></li>";
      })
      .join("");
    return (
      '<div class="expl">' +
        '<div class="verdict ' + (ok ? "ok" : "no") + '">' +
          '<span class="mark">' + (ok ? "Chính xác." : "Chưa đúng.") + "</span>" +
          '<span class="ans">Đáp án đúng: ' + LETTERS[c.answer] + " — " + c.choices[c.answer] + "</span>" +
        "</div>" +
        "<h3>Vì sao đáp án này đúng</h3>" +
        '<div class="prose">' +
          c.why.map(function (p) { return "<p>" + p + "</p>"; }).join("") +
        "</div>" +
        '<h3 class="spaced">Vì sao các lựa chọn còn lại sai</h3>' +
        '<ul class="wrongs">' + wrongItems + "</ul>" +
        '<div class="objective"><h3>Mục tiêu học tập</h3><p>' + c.objective + "</p></div>" +
      "</div>"
    );
  }

  function renderCase() {
    var idx = state.i;
    var c = CASES[idx];
    var locked = state.locked[idx];
    var picked = state.picked[idx];
    var stage = document.getElementById("stage");

    var choices = c.choices
      .map(function (t, j) {
        var cls = "choice";
        var tag = "";
        if (locked) {
          if (j === c.answer) {
            cls += " is-correct";
            tag = '<span class="tag g">Đáp án đúng</span>';
          } else if (j === picked) {
            cls += " is-wrong";
            tag = '<span class="tag r">Bạn đã chọn</span>';
          } else {
            cls += " is-muted";
          }
        }
        return (
          '<button class="' + cls + '" data-j="' + j + '" aria-pressed="' + (picked === j) + '"' +
          (locked ? " disabled" : "") +
          '><span class="k">' + LETTERS[j] + "</span><span>" + t + "</span>" + tag + "</button>"
        );
      })
      .join("");

    var isLast = idx === N - 1;
    var actions = locked
      ? '<button class="btn" id="next">' + (isLast ? "Xem tổng kết" : "Câu tiếp theo") + "</button>" +
        '<span class="hint">Câu ' + (idx + 1) + " / " + N + "</span>"
      : '<button class="btn" id="submit"' + (picked === null ? " disabled" : "") + ">Kiểm tra đáp án</button>" +
        '<span class="hint">' +
          (picked === null ? "Chọn một đáp án để tiếp tục." : "Đã chọn " + LETTERS[picked] + ". Nộp để xem giải thích.") +
        "</span>";

    var expl = locked ? explanationHTML(c, picked) : "";

    stage.innerHTML =
      '<div class="card-top">' +
        '<span class="qnum">Câu ' + (idx + 1) + " / " + N + "</span>" +
        '<span class="chip">' + c.spec + "</span>" +
        '<span class="chip task">' + c.task + "</span>" +
      "</div>" +
      '<div class="body">' +
        '<div class="vignette">' +
          c.vignette.map(function (p) { return "<p>" + p + "</p>"; }).join("") +
        "</div>" +
        vitalsBlock(c.vitals) +
        labTable(c.labs) +
        '<div class="stem">' + c.stem + "</div>" +
        '<div class="choices">' + choices + "</div>" +
        expl +
        '<div class="actions">' + actions + "</div>" +
      "</div>";

    stage.querySelectorAll(".choice").forEach(function (btn) {
      btn.onclick = function () {
        if (state.locked[state.i]) return;
        state.picked[state.i] = Number(btn.dataset.j);
        save();
        render();
      };
    });

    var sub = document.getElementById("submit");
    if (sub)
      sub.onclick = function () {
        if (state.picked[state.i] === null) return;
        state.locked[state.i] = true;
        save();
        render();
        var e = document.querySelector(".expl");
        if (e) e.scrollIntoView({ behavior: "smooth", block: "start" });
      };

    var nx = document.getElementById("next");
    if (nx)
      nx.onclick = function () {
        if (isLast) state.done = true;
        else state.i = idx + 1;
        save();
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
  }

  function verdictLine(n) {
    var pct = n / N;
    if (pct === 1) return "Toàn bộ câu đều chính xác. Chuyển sang khối dài hơn và bấm giờ 90 giây mỗi câu.";
    if (pct >= 0.8) return "Nền tảng vững. Đọc kỹ câu sai — thường là một chi tiết trong bệnh án bị bỏ qua chứ không phải thiếu kiến thức.";
    if (pct >= 0.6) return "Ở mức trung bình. Ưu tiên ôn lại đúng những chuyên khoa của các câu sai trước khi làm bộ tiếp theo.";
    if (pct >= 0.4) return "Cần củng cố. Đọc lại phần giải thích của cả bộ, kể cả câu làm đúng do đoán.";
    return "Hãy xem bộ này như tài liệu học chứ không phải bài kiểm tra: đọc kỹ từng mục tiêu học tập rồi làm lại sau vài ngày.";
  }

  function renderSummary() {
    var stage = document.getElementById("stage");
    var n = correctCount();
    var rows = CASES.map(function (c, i) {
      var ok = state.picked[i] === c.answer;
      return (
        '<a data-i="' + i + '"><span class="n">' + (i + 1) + "</span>" +
        '<span class="t"><em>' + c.spec + "</em>" + c.short + "</span>" +
        '<span class="s ' + (ok ? "g" : "r") + '">' + (ok ? "Đúng" : "Sai") + "</span></a>"
      );
    }).join("");

    stage.innerHTML =
      '<div class="summary">' +
        "<h2>Kết quả: " + n + " / " + N + "</h2>" +
        '<p class="lede">' + verdictLine(n) + "</p>" +
        '<div class="tally">' + rows + "</div>" +
        '<div class="actions">' +
          '<button class="btn" id="again">Làm lại từ đầu</button>' +
          '<button class="btn ghost" id="review">Xem lại câu 1</button>' +
        "</div>" +
      "</div>";

    stage.querySelectorAll(".tally a").forEach(function (a) {
      a.onclick = function () {
        state.done = false;
        state.i = Number(a.dataset.i);
        save();
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    });
    document.getElementById("again").onclick = function () {
      state = blank();
      save();
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    document.getElementById("review").onclick = function () {
      state.done = false;
      state.i = 0;
      save();
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }

  function render() {
    renderRail();
    renderScore();
    if (state.done) renderSummary();
    else renderCase();
  }

  /* --- điền tiêu đề từ dữ liệu bộ đề --- */
  function hydrateHeader() {
    var set = function (id, val) {
      var el = document.getElementById(id);
      if (el && val) el.textContent = val;
    };
    set("set-eyebrow", SET.eyebrow);
    set("set-title", SET.title);
    set("set-blurb", SET.blurb);
    if (SET.title) document.title = SET.title + " · USMLE Step 2 CK";
  }

  hydrateHeader();
  render();
})();
