---
title: Articles
icon: fas fa-book
order: 1
---

{% assign articles = site.articles %}
{% if articles.size > 0 %}
<ul>
  {% for article in articles %}
    <li>
      <a href="{{ article.url | relative_url }}">{{ article.title }}</a>
      <small>({{ article.date | date: "%Y-%m-%d" }})</small>
    </li>
  {% endfor %}
</ul>
{% else %}
<p>No articles found.</p>
{% endif %}
