---
title: Journals
icon: fas fa-book
order: 1
---

<style>
  .journal-card .card {
    position: relative;
    background-color: var(--card-bg);
    color: var(--text-color);
    border: 1px solid rgba(128, 128, 128, 0.3);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  }
  .journal-card .preview-img {
    position: relative;
    width: 100%;
    padding-bottom: 55%;
  }
  .journal-card .preview-img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .journal-card .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .journal-card .card-body .post-meta {
    margin-top: auto;
  }
  .journal-card .stretched-link {
    position: absolute;
    inset: 0;
    text-decoration: none !important;
    color: inherit !important;
    background: none !important;
    border: none !important;
    outline: none !important;
  }
  .journal-card .stretched-link::after {
    content: none !important; /* Remove Bootstrap pseudo-element */
  }
</style>

<div class="journal-card">
  {% for post in site.journals %}
    <div class="card mb-3">
      <div class="row g-0 flex-md-row-reverse flex-row">
        {% if post.image %}
          <div class="col-md-5">
            <div class="preview-img">
              <img src="{{ post.image.path | relative_url }}" alt="{{ post.title }}" loading="lazy">
            </div>
          </div>
        {% endif %}
        <div class="col-md-7">
          <div class="card-body d-flex flex-column h-100">
            <h5 class="card-title my-2 mt-md-0">{{ post.title }}</h5>
            <div class="card-text content mt-0 mb-3">
              <p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
            </div>
            <div class="post-meta d-flex align-items-center">
              <div class="me-auto">
                <i class="far fa-calendar fa-fw me-1"></i>
                <time class="me-4">{{ post.date | date: "%b %-d, %Y" }}</time>
                <i class="far fa-folder-open fa-fw me-1"></i>
                <span class="categories">
                  {% for category in post.categories %}
                    {{ category }}
                    {% unless forloop.last %},{% endunless %}
                  {% endfor %}
                </span>
              </div>
            </div>
            <a class="stretched-link" href="{{ post.url | relative_url }}" aria-label="{{ post.title }}"></a>
          </div>
        </div>
      </div>
    </div>
  {% endfor %}
</div>
