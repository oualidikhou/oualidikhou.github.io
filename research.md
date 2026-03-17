---
layout: default
title: Research
---

<section>
  <h1 class="gradient-text">Research Projects & Publications</h1>

  <p class="hero-bio">
    My research focuses on the numerical and experimental study of confined fires, with applications for firefighter interventions. I specialize in predicting fire curves using data assimilation techniques and experimental validation.
  </p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 2rem;">

    {% for pub in site.data.publications %}
    <div style="background: var(--bg-secondary); padding: 2rem; border-radius: 16px; border: 1px solid var(--glass-border); transition: transform 0.3s ease;">
      <i class="fa fa-book-open" style="font-size: 2rem; color: var(--accent-blue); margin-bottom: 1.5rem;"></i>

      <h3 style="color: var(--text-primary);">
        {% if pub.link != "" %}
        <a href="{{ pub.link }}" target="_blank" style="color: inherit; text-decoration: none;">
          {{ pub.title }}
        </a>
        {% else %}
        {{ pub.title }}
        {% endif %}
      </h3>

      <p style="color: var(--text-secondary); font-size: 0.95rem;">
        {{ pub.venue }} — {{ pub.year }}
      </p>

    </div>
    {% endfor %}

  </div>
</section>
