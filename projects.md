---
layout: collections
title: Projects
permalink: /projects
order: 1
---

<div class="projects">
    <div class="wrapper">
        <div class="row">
        {% assign ordered_projects = site.projects | sort: 'dates' | reverse %}
        {%- for project in ordered_projects -%}
            <a href="{{ link | relative_url }}" class="project-item col-md-4 col-12" style="text-decoration:none;">
                <img src="{{ site.url }}/assets/icons/{{ project.icon }}">
                <div class="project-text-box">
                    <div class="project-title">{{ project.title | escape }}</div>
                    <div class="description">{{ project.description | escape }}</div>
                    <div class="skills">🛠️ {{ project.skills | escape }}</div>
                </div>
            </a>
        {%- endfor -%}
        </div>
    </div>
</div>
