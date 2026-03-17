---
layout: default
title: Research
---

<section>
  <h1 class="gradient-text">Research Projects & Publications</h1>

  <p class="hero-bio">
    My research focuses on the <strong>numerical and experimental study of confined fires</strong>, with applications for firefighter interventions. 
    I specialize in <strong>predicting fire curves</strong> using data assimilation techniques, computational fluid dynamics, and experimental validation.
  </p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 2rem;">

    {% for pub in site.data.publications %}

    <div style="background: var(--bg-secondary); padding: 2rem; border-radius: 16px; border: 1px solid var(--glass-border); transition: transform 0.3s ease;">

      <i class="fa fa-book-open" style="font-size: 2rem; color: var(--accent-blue); margin-bottom: 1.5rem;"></i>

      <h3 style="color: var(--text-primary);">
        {{ pub.title }}
      </h3>

      <p style="color: var(--text-secondary); font-size: 0.95rem;">

        {{ pub.authors }}<br>

        <em>{{ pub.venue }}</em> — {{ pub.year }}

      </p>

    </div>

    {% endfor %}

  </div>
</section>
