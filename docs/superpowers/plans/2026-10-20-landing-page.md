# Mixie Empire Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Trang giới thiệu 1 trang, song ngữ VI/EN, dẫn người chơi sang itch.io và nhận ủng hộ qua QR MB Bank.

**Architecture:** Site tĩnh: `index.html` + `style.css` + `script.js` + `assets/`. Không build, không framework. i18n bằng thuộc tính `data-i18n` và từ điển trong `script.js`.

**Tech Stack:** HTML/CSS/JS thuần, Google Fonts (Baloo 2 + Nunito), Node (chỉ để chạy 1 file check).

**Spec:** `docs/superpowers/specs/2026-10-20-landing-page-design.md`

## Global Constraints

- Mọi nút Chơi/Tải → `https://monomee.itch.io/mixie-empire-boba-and-ice-cream` (tab mới, `rel="noopener"`).
- Trailer: `https://www.youtube-nocookie.com/embed/vDgKtOoGljU`, không autoplay, `loading="lazy"`.
- QR: `assets/qr.png` (đã tạo từ VietQR, payload khớp QR gốc). MB Bank · NGUYEN VIET HOANG · 0866903661.
- Mặc định tiếng Việt; lựa chọn lưu `localStorage` key `lang` (bọc try/catch); cập nhật `<html lang>`.
- Ảnh tạm có tên cố định trong `assets/`: `logo.png`, `favicon.png`, `step-1..4.jpg`, `shot-1..6.jpg`, `qr.png`.
- `prefers-reduced-motion` tắt hiệu ứng trôi.
- Không popup, không autoplay có tiếng. Mobile-first, không cuộn ngang ở 360px.

## Review Focus

- `localStorage` bị chặn (chế độ ẩn danh/Safari) → trang vẫn hiển thị, nút ngôn ngữ vẫn chạy.
- Khóa i18n thiếu bản dịch → check script báo lỗi trước khi phát hành.
- Nút "Sao chép số TK" khi `navigator.clipboard` không có (http/trình duyệt cũ) → không crash, hiện số để người dùng tự chép.
- Màn hình 360px: trailer + 2 nút CTA nằm trong màn hình đầu, QR đủ to để quét (≥ 220px).
- Ảnh tạm thiếu file → bố cục không vỡ (khung có `aspect-ratio` + nền màu).

---

### Task 1: Assets

**Files:** Create `assets/` gồm: `logo.png` (ảnh bìa itch.io), `favicon.png` (icon itch.io), `qr.png` (từ scratchpad `qr_clean.png`), `step-1..4.jpg` + `shot-1..6.jpg` (ảnh tạm: SVG/PNG màu pastel có chữ "Ảnh tạm" — được phép là `.svg` nếu đổi tên tham chiếu tương ứng trong HTML).

- [ ] Tải/copy file vào `assets/`.
- [ ] Verify: `ls assets` liệt kê đủ file.

### Task 2: i18n + check

**Files:** Create `script.js`, `tools/check-i18n.mjs`

**Interfaces:**
- Produces: `const I18N = { vi: {key: string}, en: {key: string} }`; `function setLang(lang: 'vi'|'en'): void` — set `textContent` cho mọi `[data-i18n]`, `aria-label`/`alt` qua `[data-i18n-attr="attr:key"]`, cập nhật `document.documentElement.lang`, lưu localStorage.
- Copy-button: `[data-copy="0866903661"]` → `navigator.clipboard.writeText`, đổi nhãn sang key `copied` 2s; không có clipboard thì bỏ qua lỗi.

- [ ] **Step 1: Viết check** `tools/check-i18n.mjs`: đọc `index.html` + `script.js`, assert (a) tập khóa `vi` == tập khóa `en`; (b) mọi `data-i18n="x"` trong HTML có trong `vi`. In `OK` hoặc danh sách thiếu, exit 1.
- [ ] **Step 2:** `node tools/check-i18n.mjs` → FAIL (chưa có file).
- [ ] **Step 3:** Viết `script.js` với từ điển cho mọi section của spec (nav, hero, about, 6 features, 4 steps, gallery, donate, footer, `copied`).

### Task 3: Page + style

**Files:** Create `index.html`, `style.css`

**Interfaces:** Consumes `I18N` keys và `setLang` từ Task 2.

- [ ] **Step 1:** `index.html` theo cấu trúc spec mục "Page structure" (header, hero, about, features, how-to, gallery, donate, footer). Open Graph: `og:title`, `og:description`, `og:image=assets/logo.png`.
- [ ] **Step 2:** `style.css`: biến màu trên `:root` (trời pastel `#bfe6ff`, kem `#fff6e5`, vàng `#ffc83d`, cam `#ff9a1f`, navy `#1d3b8b`, hồng `#ffb7c9`); nút CTA vàng→cam viền navy; thẻ QR nền kem viền navy bo 24px, ảnh QR ≥ 220px; hạt boba/mây trôi CSS, tắt khi reduced-motion.
- [ ] **Step 3:** `node tools/check-i18n.mjs` → `OK`.
- [ ] **Step 4:** Mở trang trong trình duyệt ở 360px và 1280px: không cuộn ngang, CTA trong màn đầu, đổi VI/EN được, nút sao chép chạy, QR quét được bằng điện thoại.

### Task 4: README deploy

**Files:** Create `README.md` — cách thay ảnh (ghi đè cùng tên trong `assets/`) và deploy GitHub Pages / Netlify kéo-thả.

- [ ] Viết README (≤ 30 dòng).
