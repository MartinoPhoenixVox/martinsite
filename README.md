# Martinsite

Martinsite là một dự án phát triển website cá nhân, sử dụng các công nghệ hiện đại để xây dựng một trang web chuyên nghiệp, tối ưu và dễ mở rộng.

## Mục tiêu

- Xây dựng website cá nhân để giới thiệu bản thân, dự án và kỹ năng.
- Thêm vào chức năng của một blog từ đó có thể cập nhật thông tin mong muốn.
- Tối ưu hiệu suất, bảo mật và trải nghiệm người dùng.
- Dễ dàng mở rộng và bảo trì.

## Công nghệ sử dụng

- [Tên framework/language] Python, Flask
- [Các thư viện/phần mềm liên quan] Boootstrap
- [Công cụ quản lý mã nguồn] Git, GitHub

## Cài đặt

```bash
git clone https://github.com/MartinoPhoenixVox/martinsite.git
cd martinsite
npm install
npm run dev
```

Tạo môi trường để chạy web.
```python3
python3 -m venv .venv
. .venv/bin/activate
```

Cài đặt Flask và các extension liên quan.
```python3
pip install flask
pip install Flask-SQLAlchemy
pip install flask-login
```

Chạy trang web với dòng lệnh bên dưới, sau đó vào http://127.0.0.1:5000.
```python3
python ./app.py
```

## Cấu trúc dự án

```plaintext
.
├── website/
│   ├── templates/
│   │   ├── base.html
│   │   ├── create_post.html
│   │   ├── home.html
│   │   ├── login.html
│   │   ├── posts_div.html
│   │   ├── posts.html
│   │   ├── signup.html
│   ├── __init__.py
│   ├── auth.py
│   └── views.py
└── app.py
```

## Giấy phép

Dự án được phát hành theo giấy phép [MIT](LICENSE).

---

> © 2025 MartinPhoenixVox. All rights reserved.