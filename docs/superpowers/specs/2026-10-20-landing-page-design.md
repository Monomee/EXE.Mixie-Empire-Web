# Mixie Empire: Boba & Ice Cream — Landing page design

## Intent
Trang giới thiệu game Mixie Empire: Boba & Ice Cream (Unity, low-poly 3D, cozy tycoon/idle).
Người xem phải **thấy ngay trong 10 giây đầu**: cảm giác thư giãn, dễ thương, thế giới 3D sống động, trailer và nút chơi/tải.
Mục tiêu chính: đưa người chơi sang **itch.io** (tác giả muốn itch.io đo lượt xem/tải). Mục tiêu phụ: hiểu nội dung/cơ chế game, ủng hộ tác giả.

## Goals
- Hero: logo, slogan, trailer YouTube, nút CTA → itch.io.
- Giải thích game là gì & chơi thế nào.
- Ủng hộ tác giả bằng QR ngân hàng.
- Song ngữ Việt (mặc định) / Anh.
- Ảnh tạm, tác giả tự thay sau mà không phải sửa code.

## Non-goals
- Không host file APK/build trên web. Mọi nút tải/chơi đều trỏ về itch.io.
- Không backend, không analytics riêng (itch.io lo thống kê), không CMS.

## Anti-goals
- Không ồn ào, nhiều popup, autoplay có tiếng — trái tinh thần "chữa lành".
- Không nặng: trang phải mở nhanh trên điện thoại (đa số người xem đến từ mạng xã hội).

## Constraints / facts
- itch.io: https://monomee.itch.io/mixie-empire-boba-and-ice-cream — HTML5 (chơi trên trình duyệt) + Android (~70 MB), "Name your own price".
- Trailer tạm: https://www.youtube.com/watch?v=vDgKtOoGljU (embed `youtube-nocookie.com/embed/vDgKtOoGljU`, không autoplay).
- Logo chữ "MIXIE EMPIRE" (xanh dương băng + vàng cam, viền navy): lấy từ ảnh bìa itch.io. Icon tròn đỏ có linh vật: dùng làm favicon.
- Game hỗ trợ EN + VI.

## Decided by the author
- Ảnh gameplay: dùng ảnh tạm, tác giả tự thay.
- Donate: QR ngân hàng, customize theo theme game.
  - MB Bank · NGUYEN VIET HOANG · 0866903661.
  - QR sạch tạo lại từ `img.vietqr.io/image/MB-0866903661-qr_only.png`, đã giải mã đối chiếu: payload trùng khớp QR gốc của tác giả. Lưu thành `assets/qr.png` (không gọi API lúc chạy).
  - Tự vẽ thẻ bằng CSS theo theme (nền kem, viền navy, góc bo, linh vật/ly boba trang trí), giữ logo VietQR nhỏ để người dùng tin tưởng. Nút "Sao chép số TK".
- Ngôn ngữ: VI + EN, có nút chuyển.
- Tải game: chỉ qua itch.io.

## Page structure (one page)
1. **Header** (dính trên cùng): logo nhỏ, nút VI/EN.
2. **Hero**: logo lớn, slogan ("Gác lại âu lo, ghé ngay ốc đảo ngọt ngào!"), trailer 16:9, 2 nút: "Chơi ngay trên trình duyệt" & "Tải cho Android" (cả hai → trang itch.io). Dòng nhỏ: "Miễn phí · Không quảng cáo".
3. **Giới thiệu**: đoạn mô tả rút gọn từ mô tả gốc.
4. **Tính năng** (6 thẻ, icon emoji): Tự tay múc kem & pha trà sữa · Từ quán nhỏ đến chuỗi nhượng quyền tự động · Thế giới 3D low-poly · ASMR & Lo-fi · Sưu tầm sticker, trang trí ốp lưng · Free-to-play, không quảng cáo.
5. **Cách chơi**: 3–4 bước (Phục vụ khách → Kiếm tiền, nâng cấp → Thuê nhân viên, mở rộng → Nhượng quyền tự động), mỗi bước một ảnh tạm.
6. **Thư viện ảnh**: lưới 4–6 ảnh tạm.
7. **Ủng hộ tác giả**: lời cảm ơn ngắn + ảnh QR + tên chủ TK. Nút Ko-fi/PayPal có sẵn trong HTML nhưng ẩn (cho người nước ngoài sau này).
8. **Footer**: link itch.io, © Monomee.

## Builder's calls (Claude)
- Tech: 1 file `index.html` + `style.css` + `script.js`, HTML/CSS/JS thuần, không framework, không build. Font Google Fonts (vd. Baloo 2 / Nunito, có dấu tiếng Việt).
- Ảnh trong `assets/`, tên cố định (`shot-1.jpg`… `qr.png`, `logo.png`) — thay ảnh = ghi đè file cùng tên.
- i18n: mỗi phần tử có `data-i18n="key"`, từ điển VI/EN trong `script.js`; nhớ lựa chọn bằng `localStorage`; cập nhật `<html lang>`.
- Bảng màu: theo logo — trời xanh pastel, vàng kem, hồng dâu nhẹ; nút CTA vàng/cam viền navy giống logo.
- Hiệu ứng nhẹ: hạt boba/đám mây trôi bằng CSS, tôn trọng `prefers-reduced-motion`.
- Responsive mobile-first; ảnh `loading="lazy"`.
- Meta Open Graph (ảnh bìa) để chia sẻ Facebook đẹp.
- Hosting: GitHub Pages hoặc Netlify (miễn phí), tác giả chọn khi deploy.

## Left to the builder
Câu chữ chính xác của bản tiếng Anh, chi tiết hoạt ảnh, số ảnh tạm.

## Open items for the author
- Trang itch.io đang ghi "NOW UNAVAILABLE, BUILD FOR TESTING" — cần mở lại trước khi quảng bá web.
