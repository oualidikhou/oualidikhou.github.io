---
layout: default
title: Research
---

<section>
  <h1 class="gradient-text section-title" data-i18n="research.title">Research Projects & Publications</h1>

  <p class="hero-bio" data-i18n="research.intro">
    My research focuses on the numerical and experimental study of confined fires, with applications for firefighter interventions. I specialize in predicting fire curves using data assimilation techniques and experimental validation.
  </p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 2rem;" data-reveal-group>

    {% for pub in site.data.publications %}
    <div class="pub-card">
      <i class="fa fa-book-open" style="font-size: 1.6rem; color: var(--fire-amber); margin-bottom: 1.2rem; display:block;"></i>

      {% if pub.link != "" %}
      <h3 style="color: var(--text-primary); margin-bottom: 0.5rem; font-size:1rem;">
        <a href="{{ pub.link }}" target="_blank" style="color: inherit; text-decoration:none;">
          {{ pub.title }}
        </a>
      </h3>
      {% else %}
      <h3 style="color: var(--text-primary); margin-bottom: 0.5rem; font-size:1rem;">
        {{ pub.title }}
      </h3>
      {% endif %}

      <p style="color: var(--text-secondary); font-size: 0.9rem; margin: 0; line-height:1.6;">
        {{ pub.authors }} — <em>{{ pub.venue }}</em> — {{ pub.year }}
      </p>
    </div>
    {% endfor %}

  </div>
</section>
