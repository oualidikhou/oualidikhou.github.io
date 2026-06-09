---
layout: default
title: Home
---

<section id="about">
  <div class="hero-wrapper">
    <div class="profile-image-container">
      <img src="{{ site.baseurl }}/assets/images/ma_photo.jpg" alt="Oualid IKHOU" class="profile-image">
    </div>

    <div class="hero-content">
      <div class="role-badge" data-i18n="hero.badge">PhD Student · Volunteer Firefighter</div>
      <h1 class="hero-title"><span class="gradient-text">Oualid IKHOU</span></h1>
      <h2 class="hero-subtitle" data-i18n="hero.subtitle">
        PhD Student in Engineering Sciences – Fluid Mechanics &amp; Physics<br/>
        IUSTI Laboratory, Aix-Marseille University
      </h2>

      <p class="hero-bio" data-i18n="hero.bio1">
        I am a PhD student specializing in numerical and experimental studies of confined fires,
        with applications to firefighter interventions. My research focuses on the prediction
        of fire curves using advanced data assimilation techniques and computational modeling,
        combining fluid mechanics, heat transfer, and applied mathematics.
      </p>

      <p class="hero-bio" data-i18n="hero.bio2">
        I am passionate about interdisciplinary collaboration, mentoring students, and contributing
        to scientific publications. Beyond research, I aim to share insights through talks,
        open-source software, and applied projects that enhance fire safety and emergency response.
      </p>

      <div class="hero-stats" data-reveal-group>
        <div class="hero-stat">
          <span class="hero-stat-value">3+</span>
          <span class="hero-stat-label" data-i18n="hero.stat.years">Years PhD</span>
        </div>
        <div class="hero-stat">
          <span class="hero-stat-value">4D-Var</span>
          <span class="hero-stat-label" data-i18n="hero.stat.method">Method</span>
        </div>
        <div class="hero-stat">
          <span class="hero-stat-value">IUSTI</span>
          <span class="hero-stat-label" data-i18n="hero.stat.lab">Laboratory</span>
        </div>
      </div>

      <div class="social-links">
        <a href="mailto:oualid.ikhou@univ-amu.fr" class="contact-btn">
          <i class="fa fa-envelope"></i>
          <span data-i18n="hero.contact">Contact Me</span>
        </a>

        <a href="https://www.linkedin.com/in/oualid-ikhou-b40a1918a/" target="_blank" class="social-icon" title="LinkedIn">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>

        <button class="cv-badge" id="toggle-cv">
          <i class="fa fa-file-lines"></i>
          <span data-i18n="hero.cv">CV</span>
        </button>
      </div>
    </div>
  </div>
</section>

<!-- Modal CV -->
<div class="cv-modal-overlay" id="cv-modal">
  <div class="cv-modal-box">
    <div class="cv-modal-header">
      <h3 class="gradient-text" data-i18n="cv.title">Curriculum Vitae</h3>
      <div class="cv-modal-actions">
        <a href="{{ site.baseurl }}/assets/cv/Oualid_IKHOU_CV.pdf" download class="cv-btn-download">
          <i class="fa fa-download"></i>
          <span data-i18n="cv.download">Download</span>
        </a>
        <button class="cv-btn-close" id="close-cv" title="Close">✕</button>
      </div>
    </div>
    <div class="cv-modal-body">
      <iframe src="{{ site.baseurl }}/assets/cv/Oualid_IKHOU_CV.pdf"></iframe>
    </div>
  </div>
</div>

<script>
  const modal    = document.getElementById('cv-modal');
  const openBtn  = document.getElementById('toggle-cv');
  const closeBtn = document.getElementById('close-cv');

  openBtn.onclick  = () => modal.classList.add('open');
  closeBtn.onclick = () => modal.classList.remove('open');
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') modal.classList.remove('open'); });
</script>
