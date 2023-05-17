---
layout: default
title: Projects
permalink: /projects
---

<div class="projects">
<div class="wrapper">
    <h2 class="post-list-heading">Projects</h2> 
    <div class="row">
    {% assign ordered_projects = site.projects | sort: 'dates' | reverse %}
    {%- for project in ordered_projects -%}
    {% if project.external_link %}
    {% assign link = project.external_link %}
    {% else %}
    {% assign link = project.url %}
    {% endif %}
    <a href="{{ link | relative_url }}" class="project-item col-md-4 col-12" style="text-decoration:none;">
        <img src="{{ site.url }}/assets/icons/{{ project.icon }}">
        <div class="project-text-box">
        <div class="project-title">{{ project.title | escape }}</div>
        <div class="description">{{ project.description | escape }}</div>
        </div>
    </a>
    {%- endfor -%}
    </div>
</div>
</div>
