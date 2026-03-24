---
layout: default
title: Trang chủ Thư viện
---

# Danh sách sách theo danh mục

{% assign books_by_category = site.sach | group_by: "category" %}

{% for group in books_by_category %}
  ## {{ group.name | default: "Chưa phân loại" }}
  <ul>
    {% for item in group.items %}
      <li>
        <a href="{{ item.url }}">{{ item.title }}</a>
      </li>
    {% endfor  %}
  </ul>
{% endfor %}