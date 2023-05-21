---
layout: collections
title: Posts
permalink: /postings
order: 3
---

  <div>
    {%- assign posts = site.posties | reverse %}
    {%- for post in posts -%}
    <div class="post-item row">
      <a href="{{ post.url | relative_url }}">
        <span class="post-meta">
          {{ post.date | date: "%b %Y" }} |
        </span>
        {{ post.title }}
      </a>
    </div>
    {%- endfor -%}
  </div>
