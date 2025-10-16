# Martin's website

A personal website that combines blog and other features in the future.

## 🇻🇦 Purpose

This project is my small Catholic missionary effort to create a space for the pilgrims, who may or may not know The Lord - is The Father, and The Son, and The Holy Spirit. I want to encourage all of us come to God through The Bible and The Eucharist; to become better people, better Christians, better Catholics.

## 🌟 Features

With that thought, this project is a website where we can:

- Read The Bible, Doctrine of The Catholic Church, spiritual books, and other helpful documents (Everyone can read those - Vietnamese first because I'm a Vietnamese - the documents are too much so it needs time).
- Have an accounts, and introduce yourself, including your name, patron saints, strength, dreams, and more! I hope in this project, each account can customize the profile page.
- Post your own blog or linked images or videos to your blog posts.
- Comment on the posts, reply a comment.
- Have emotion button to the posts.
- Create discussions, attend through comments, react each comments.
- Use all of the information to have more data-relevant features.
- Have some games to play or some quiz to learn more about the Catholic knowledge.
- Share what you love to the digital world!

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

### 3. Install Flask and its required dependencies

```python3
pip install flask
pip install Flask-SQLAlchemy
pip install flask-login
```

### 4. Use the code below to run the local website, then go to [http://127.0.0.1:5000](http://127.0.0.1:5000)

```python3
python ./app.py
```

## 🎯 Usage Examples

### Login User

``` Login User
Email: abc@gmail.com
Username: ABC
Password: 1234567
```

## 📁 Project Structure

``` Project Structure
martinsite/
├── docs/
│   ├── blog/
│   │   ├── 1-planning.md
│   │   ├── 2-analysis.md
│   │   ├── 3-design.md
│   │   ├── 4-implementation.md
│   │   └── 5-maintenance.md
│   ├── README.md
│   └── SWOT.md
├── instance/
│   └── database.db
├── website/
│   ├── static/
│   │   ├── css/
│   │   ├── docs/
│   │   │   ├── blog/
│   │   │   │   └── class_blog.plantuml
│   │   │   └── README.md
│   │   ├── images/
│   │   └── js/
│   │       └── index.js
│   ├── templates/
│   │   ├── base.html
│   │   ├── create_post.html
│   │   ├── home.html
│   │   ├── login.html
│   │   ├── posts_div.html
│   │   ├── posts.html
│   │   └── signup.html
│   ├── __init__.py
│   ├── auth.py
│   ├── models.py
│   └── views.py
├── .gitignore
├── app.py
├── CHANGELOG.md
├── LICENSE
├── README.md
└── requirements.txt
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
- [ ] Blog feature
- [ ] Document feature
- [ ] Personal's space feature
- [ ] Discussion feature
- [ ] Quiz feature
- [ ] Game feature

## 🗂 Documentation & development flow

This repository now includes living templates for a strict PLANNING → ANALYSIS → DESIGN → IMPLEMENTATION → MAINTENANCE flow under the `docs/` folder at the project root (`/martinsite/docs/`). Use these templates when starting any feature or change to keep work consistent and traceable. Each feature will have their own folder `feature_name/` (name it with real features).

Quick usage:

- Put public diagrams (UML/ER) in `website/static/docs/feature_name/` (create that folder if missing). Example image path: `website/static/docs/feature_name/er_diagram_v1.png`.
- To embed diagrams in templates, use Jinja: `{{ url_for('static', filename='docs/feature_name/er_diagram_v1.png') }}` when inside the `website` blueprint static folder.
- For private or large files you don't want in Git, use `docs/` plus external storage or Git LFS and link from the markdown templates.

See `docs/README.md` for template overview and `docs/feature_name/1-planning.md` → `docs/feature_name/5-maintenance.md` for per-phase templates.
