# Phân tích - Thiết kế

Đây là tài liệu về phân tích và thiết kế hệ thống [martinsite](https://github.com/MartinoPhoenixVox/martinsite).

## 1. Khảo sát dự án

Trả lời cho các câu hỏi:

- Tại sao hệ thống thông tin được xây dựng?
- Nhóm dự án sẽ tiến hành xây dựng như thế nào?

Phân tích SWOT cá nhân:

| **Điểm mạnh** | **Điểm yếu** |
|:---:|:---:|
| Chuyên ngành dữ liệu | Không chuyên về web |
| Có nền tảng về web |  |
| **Cơ hội** | **Thách thức** |
| Ôn lại những kiến thức về static website | Không có nhiều thời gian |
| Cơ hội cho người khác biết hơn về đạo Công Giáo | Không có chi phí |

Kế hoạch SWOT cá nhân:

| **Điểm mạnh - Cơ hội** | **Điểm yếu - Cơ hội** |
|:---:|:---:|
| Tạo mô hình dữ liệu JSON để tận dụng nghiên cứu dữ liệu | Củng cố kiến thức website |
| Tạo bộ dữ liệu về đạo Công Giáo bằng tiếng Việt |  |
| **Điểm mạnh - Thách thức** | **Điểm yếu - Thách thức** |
| Tạo website đơn giản nhưng dễ tiếp cận | Tiếp tục dự án bao nhiêu có thể |

### Xác định yêu cầu dự án

| Mô tả bài toán |
|:---:|
| Người dùng được đưa vào trang chủ, nơi dẫn tới các trang khác. Trang này bao gồm các thông tin cơ ban của web và các tab dẫn tới các nội dung khác nhau. |
| Trang thông tin người tạo web: như CV, bao gồm thông tin cơ bản, thông tin liên hệ, các dự án, các thành tựu,... Cái này tùy biến. |
| Trang Tài liệu Công Giáo gồm nhiều mục tài liệu, ví dụ như Kinh Thánh, sách Tu đức,... Trang Khoa học máy tinh có gồm nhiều mục tài liệu như game, web, bảo mật,... |
| Khi đuợc dẫn vào tài liệu, sẽ có thông tin cơ bản như tên tài liệu, tác giả, dịch giả, tên khác, thể loại, mô tả,... Cùng với đó là mục lục để người đọc khi bấm vào phần muốn đọc thì sẽ dẫn tới phần đó. Ngoài ra sẽ có nút in toàn bộ tác phẩm thành dạng pdf để người dùng tiện in ấn. Các thông tin cơ bản khi ấn vào thì dẫn đến các thông tin liên quan như wiki hoặc các trang uy tín. |
| Khi vào phần muốn đọc, sẽ hiện ra tên tác phẩm, tên phần muốn đọc, nội dung. Các điều chỉnh sẽ là chế độ sách hoặc tối, điều chỉnh cỡ chữ, nút in phần đang đọc, nút đọc từ đầu, nút đọc phần trước, nút đọc phần tiếp theo, nút đọc phần mới nhất. |
| Dữ liệu được lưu sao cho dùng được cho mục đích phân tích dữ liệu hoặc AI/ML. |

## 2. Phân tích hệ thống

Trả lời cho các câu hỏi:

- Ai sẽ sử dụng hệ thống?
- Hệ thống sẽ làm những gì?
- Hệ thống được sử dụng ở đâu và khi nào?

Biểu đồ phân cấp chức năng (Functional Hierachical Decomposition Diagram - FHD):

Biểu đồ luồng dữ liệu (Data Flow Diagram - DFD):

![Biểu đồ luồng dữ liệu](DFD.drawio.svg)

Mô hình thực thể - liên kết (Entity Relationship Model):

Mô hình quan hệ (Relational Database Model):

## 3. Thiết kế hệ thống

- Thiết kế tổng thể: mô tả dữ liệu bằng mô hình mức ý niệm, vật lý
- Thiết kế chi tiết:
  - Database hoàn chỉnh
  - Truy vấn, hàm, thủ tục, ràng buộc
  - Chức năng chương trình
  - Báo cáo
  - Kiêm soán lỗi

## 4. Thực hiện

- Lựa chọn hệ quản trị cơ sở dữ liệu và cài đặt
- Lựa chọn công cụ lập trình để xây dựng chương trình
- Lựa chọn công cụ thiết kế giao diện
- Viết hướng dẫn sử dụng

## 5. Kiểm thử

- Lựa chọn công cụ kiểm thử
- Kiểm chứng các modules chức năng
- Khắc phục lỗi, viết test case

## 6. Triển khai và bảo trì

- Lắp đặt phần cứng
- Cài đặt phần mềm
- Chuyển dữ liệu từ hệ thống cũ sang hệ thống mới
- Phát hiện sai sót, khuyết điểm của hệ thống thông tin
- Đào tạo, cải tiến, bảo hành, nâng cấp hệ thống
