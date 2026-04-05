---
layout: default
title: Research
---

<section>
  <h1 class="gradient-text" data-i18n="research.title">Research Projects & Publications</h1>

  <p class="hero-bio" data-i18n="research.intro">
    My research focuses on the numerical and experimental study of confined fires, with applications for firefighter interventions. I specialize in predicting fire curves using data assimilation techniques and experimental validation.
  </p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 2rem;">

    {% for pub in site.data.publications %}
    <div style="background: var(--bg-secondary); padding: 2rem; border-radius: 16px; border: 1px solid var(--glass-border); transition: transform 0.3s ease; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
      
      <i class="fa fa-book-open" style="font-size: 2rem; color: var(--accent-blue); margin-bottom: 1.5rem;"></i>
      
      {% if pub.link != "" %}
      <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">
        <a href="{{ pub.link }}" target="_blank" style="color: inherit; text-decoration:none; transition: color 0.2s;">
          {{ pub.title }}
        </a>
      </h3>
      {% else %}
      <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">
        {{ pub.title }}
      </h3>
      {% endif %}

      <p style="color: var(--text-secondary); font-size: 0.95rem; margin: 0;">
        {{ pub.authors }} — <em>{{ pub.venue }}</em> — {{ pub.year }}
      </p>

    </div>
    {% endfor %}

  </div>
</section>

<style>
  /* Petit effet hover pour les titres cliquables */
  a:hover {
    color: var(--accent-purple);
    text-decoration: underline;
  }

  div:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
</style>
