# Mixie Empire: Boba & Ice Cream — Website

Trang giới thiệu tĩnh: `index.html` + `style.css` + `script.js` + `assets/`. Không cần cài đặt hay build.

## Xem thử trên máy
Mở `index.html` bằng trình duyệt, hoặc chạy `python -m http.server` trong thư mục này rồi vào http://localhost:8000.

## Thay ảnh
Ghi đè file trong `assets/` **giữ nguyên tên**:
- `step-1.jpg` … `step-4.jpg` — ảnh 4 bước "Cách chơi" (tỉ lệ 4:3)
- `shot-1.jpg` … `shot-6.jpg` — thư viện ảnh (tỉ lệ 16:9)
- `logo.png`, `favicon.png`, `qr.png`

Muốn dùng GIF/PNG thay vì JPG: đổi đuôi file tương ứng trong `index.html`.

## Đổi trailer
Trong `index.html`, thay `vDgKtOoGljU` (2 chỗ) bằng ID video YouTube mới.

## Sửa chữ / bản dịch
Toàn bộ chữ VI/EN nằm trong `I18N` ở đầu `script.js`. Sau khi sửa, chạy:

    node tools/check-i18n.mjs

để chắc chắn hai ngôn ngữ đủ khóa như nhau.

## Nút Ko-fi / PayPal (ủng hộ quốc tế)
Trong `index.html`, tìm `donate.intl`, điền link vào `href` và xóa thuộc tính `hidden`.

## Đăng web (miễn phí)
- **Netlify:** vào app.netlify.com/drop, kéo-thả cả thư mục này.
- **GitHub Pages:** đẩy thư mục lên một repo, Settings → Pages → Deploy from branch `main` / root.

Sau khi có tên miền, sửa `og:image` trong `index.html` thành URL đầy đủ (vd. `https://ten-mien/assets/logo.png`) để Facebook hiện ảnh khi chia sẻ.
