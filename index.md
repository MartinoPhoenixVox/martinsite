---
layout: default
title: Trang chủ Thư viện
---

# Danh sách sách theo danh mục

{% assign all_books = site.books | where_exp: "item", "item.is_chapter != true" | group_by: "category" %}

{% for group in all_books %}
  ## {{ group.name }}
  <ul>
    {% for book in group.items %}
      <li><a href="{{ book.url | relative_url }}">{{ book.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}