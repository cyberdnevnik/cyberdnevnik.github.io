---
title: Journals
icon: fas fa-book
order: 1
---

{% assign journals = site.journals %}
{% if journals.size > 0 %}
<ul>
  {% for journal in journals %}
    <li>
      <a href="{{ journal.url | relative_url }}">{{ journal.title }}</a>
      <small>({{ journal.date | date: "%Y-%m-%d" }})</small>
    </li>
  {% endfor %}
</ul>
{% else %}
<p>No journals found.</p>
{% endif %}
