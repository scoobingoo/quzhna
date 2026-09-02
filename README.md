# Ca lâm sàng USMLE Step 2 CK — tiếng Việt

Bộ ca lâm sàng kiểu UWorld để ôn USMLE Step 2 CK, viết bằng tiếng Việt.
Trọng tâm: **chẩn đoán** và **bước xử trí tiếp theo tốt nhất**.

Trang tĩnh thuần HTML/CSS/JS — không build, không phụ thuộc, chạy được bằng cách
mở thẳng `index.html` hoặc host trên GitHub Pages.

## Nội dung hiện có

| Bộ đề | Số ca | Chuyên khoa |
|---|---|---|
| `noi-khoa` | 5 | Tim mạch, Hô hấp, Tiêu hóa – Gan mật, Nội tiết, Huyết học |

## Cấu trúc thư mục

```
.
├── index.html            # trang chủ, liệt kê các bộ đề
├── assets/
│   ├── style.css         # bảng màu, kiểu chữ, bố cục dùng chung (sáng + tối)
│   └── quiz.js           # bộ máy làm đề dùng chung
├── sets/
│   └── noi-khoa.js       # dữ liệu bộ đề Nội khoa
└── noi-khoa/
    └── index.html        # trang chạy bộ đề Nội khoa
```

Tiến trình làm bài được lưu bằng `localStorage` theo từng bộ đề
(khóa `step2ck:<id>:v1`), nằm hoàn toàn trong trình duyệt người dùng.

## Thêm một bộ đề mới

**1. Tạo file dữ liệu** `sets/san-phu-khoa.js`:

```js
window.QUIZ_SET = {
  id: "san-phu-khoa",                    // dùng làm khóa lưu tiến trình, phải là duy nhất
  eyebrow: "USMLE Step 2 CK · Sản phụ khoa",
  title: "Năm ca sản phụ khoa",
  blurb: "Một dòng mô tả hiện dưới tiêu đề.",
  cases: [ /* ... */ ]
};
```

**2. Mỗi ca có dạng:**

```js
{
  spec: "Tim mạch",                      // hiện trên thanh tiến trình và thẻ chuyên khoa
  task: "Bước xử trí tiếp theo",         // nhãn phụ: dạng câu hỏi
  short: "Đau ngực + tụt huyết áp",      // mô tả ngắn, hiện ở bảng tổng kết
  vignette: ["Đoạn 1.", "Đoạn 2."],      // mỗi phần tử là một đoạn văn
  vitals: [                              // tùy chọn — bỏ qua nếu không cần
    ["Nhiệt độ", "36,8 °C"],
    ["Huyết áp", "74/48"]
  ],
  labs: {                                // tùy chọn
    title: "Xét nghiệm lúc nhập viện",
    rows: [
      // [tên, giá trị, khoảng tham chiếu, "hi" | "lo" | ""]
      ["Kali", "3,0 mEq/L", "3,5–5,0", "lo"]
    ]
  },
  stem: "Bước tiếp theo tốt nhất là gì?",
  choices: ["A...", "B...", "C...", "D...", "E..."],
  answer: 0,                             // chỉ số của đáp án đúng, tính từ 0
  why: ["Đoạn giải thích 1.", "Đoạn 2."],
  wrongs: {                              // giải thích cho từng lựa chọn sai
    1: "Vì sao B sai.",
    2: "Vì sao C sai.",
    3: "Vì sao D sai.",
    4: "Vì sao E sai."
  },
  objective: "Một đoạn tóm tắt mục tiêu học tập."
}
```

Các trường `vignette`, `why`, `wrongs`, `objective` được chèn thẳng vào HTML nên
có thể dùng thẻ `<b>`, `<i>`; nhớ viết `&lt;` và `&gt;` thay cho dấu nhỏ hơn/lớn hơn.

**3. Tạo trang chạy** `san-phu-khoa/index.html` — chép từ `noi-khoa/index.html`
rồi đổi hai thẻ `<script>` ở cuối trỏ tới file dữ liệu mới.

**4. Thêm một thẻ `<a class="set">`** vào `index.html` để bộ đề mới hiện ở trang chủ.

## Chạy tại máy

```bash
python3 -m http.server 8000
# rồi mở http://localhost:8000
```

Mở thẳng `noi-khoa/index.html` bằng `file://` cũng chạy được (không dùng fetch hay ES module),
nhưng liên kết từ trang chủ cần một máy chủ vì `file://` không tự mở `index.html` trong thư mục.

## Giao diện

Bảng màu và kiểu chữ khai báo bằng CSS custom property trong `assets/style.css`;
đổi khối `:root` là đổi toàn bộ giao diện. Trang hỗ trợ sẵn cả nền sáng lẫn nền tối
theo thiết lập hệ thống.

## Miễn trừ

Nội dung do AI soạn để phục vụ ôn tập cá nhân, dựa trên kiến thức y khoa phổ thông,
**không phải hướng dẫn điều trị** và không thay thế phác đồ chính thức hay ý kiến
của bác sĩ điều trị. Hãy đối chiếu với UpToDate, các guideline hiện hành hoặc
tài liệu chính thống trước khi áp dụng vào lâm sàng.
