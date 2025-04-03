---
title: Articles
icon: fas fa-book
order: 1
---

{% assign articles = site.categories.Articles %}
{% if articles.size > 0 %}
<ul>
  {% for post in articles %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <small>({{ post.date | date: "%Y-%m-%d" }})</small>
    </li>
  {% endfor %}
</ul>
{% else %}
<p>No articles found.</p>
{% endif %}