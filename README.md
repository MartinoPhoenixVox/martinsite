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

... &rarr; PLANNING &rarr; ANALYSIS &rarr; DESIGN &rarr; IMPLEMENTATION &rarr; MAINTENANCE &rarr; ...

- [x] Complete "Flask-Blog-Tutorial"
- [ ] blog feature planning

## 🗂 Documentation & development flow

This repository now includes living templates for a strict PLANNING → ANALYSIS → DESIGN → IMPLEMENTATION → MAINTENANCE flow under the `docs/` folder at the project root (`/martinsite/docs/`). Use these templates when starting any feature or change to keep work consistent and traceable.

Quick usage:

- Put public diagrams (UML/ER) in `website/static/docs/` (create that folder if missing). Example image path: `website/static/docs/er_diagram_v1.png`.
- To embed diagrams in templates, use Jinja: `{{ url_for('static', filename='docs/er_diagram_v1.png') }}` when inside the `website` blueprint static folder.
- For private or large files you don't want in Git, use `docs/` plus external storage or Git LFS and link from the markdown templates.

See `docs/README.md` for template overview and `docs/1-planning.md` → `docs/5-maintenance.md` for per-phase templates.
