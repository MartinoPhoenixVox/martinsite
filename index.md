# Thư viện sách của tôi

{% assign books_by_category = site.books | group_by: "category" %}

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

{% assign document_by_category = site.document | group_by: "category" %}

{% for group in document_by_category %}
  ## {{ group.name | default: "Chưa phân loại" }}
  <ul>
    {% for item in group.items %}
      <li>
        <a href="{{ item.url }}">{{ item.title }}</a>
      </li>
    {% endfor  %}
  </ul>
{% endfor %}
