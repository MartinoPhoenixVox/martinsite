---
layout: default
title: Thư viện Novelty
---

<div class="container mt-5">
    <h2 class="text-center mb-5">Danh Mục Sách Hệ Thống</h2>
    
    {% assign books_by_cat = site.books | where_exp: "item", "item.is_chapter != true" | group_by: "category" %}
    
    {% for group in books_by_cat %}
    <div class="category-section mb-5">
        <h3 class="border-bottom pb-2">{{ group.name }}</h3>
        <div class="row">
            {% for book in group.items %}
            <div class="col-lg-3 col-md-4 col-6 mb-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body text-center">
                        <h5 class="card-title">{{ book.title }}</h5>
                        <p class="small text-muted">Tác giả: {{ book.author | default: "Cập nhật..." }}</p>
                        <a href="{{ book.url | relative_url }}" class="btn btn-sm btn-primary">Đọc ngay</a>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
    {% endfor %}
</div>