# Martin's website

A personal website that combines blog and other features in the future.

## 🌟 Features

- **Blogging**: Create blog
- **Account Managing**: Manage users that use the website

## 📋 Prerequisites

- Python 3.7 or higher
- Modern web browser
- pip (Python package installer)

## 🚀 Quick Start

### 1. Clone and Setup

```bash
git clone https://github.com/MartinoPhoenixVox/martinsite.git
cd martinsite
```

### 2. Create and Activate Virtual Environment

```python3
python3 -m venv .venv
. .venv/bin/activate
```

### 3. Install Flask and its required dependencies.
```python3
pip install flask
pip install Flask-SQLAlchemy
pip install flask-login
```

### 4. Use the code below to run the local website, then go to http://127.0.0.1:5000.
```python3
python ./app.py
```

## 🎯 Usage Examples

### Login User
```
Email: abc@gmail.com
Username: ABC
Password: 1234567
```

## 📁 Project Structure

```
martinsite/
├── website/
│   ├── static/
│   │   ├── index.js
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
│   ├── models.py
│   └── views.py
└── app.py
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Flask-Blog-Tutorial](https://github.com/techwithtim/Flask-Blog-Tutorial) Thanks Tim Ruscica (Tech With Tim) for making the tutorial series and all the code in the tutorial.

## 📞 Support

If you encounter any issues or have questions:

1. Search [existing issues](https://github.com/MartinoPhoenixVox/martinsite/issues)
2. Create a [new issue](https://github.com/MartinoPhoenixVox/martinsite/issues/new)

## 📈 Roadmap

- [x] Complete "Flask-Blog-Tutorial"