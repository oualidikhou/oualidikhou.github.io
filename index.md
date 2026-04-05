---
layout: default
title: Home
---

<section id="about">
  <div class="hero-wrapper">
    <!-- Photo de profil -->
    <div class="profile-image-container">
      <img src="{{ site.baseurl }}/assets/images/ma_photo.jpg" alt="Oualid IKHOU" class="profile-image">
    </div>

    <!-- Contenu -->
    <div class="hero-content">
      <h1 class="hero-title"><span class="gradient-text">Oualid IKHOU</span></h1>
      <h2 class="hero-subtitle">
        PhD Student in Engineering Sciences – Fluid Mechanics &amp; Physics<br/>
        IUSTI Laboratory, Aix-Marseille University
      </h2>

      <p class="hero-bio">
        I am a PhD student specializing in numerical and experimental studies of confined fires, 
        with applications to firefighter interventions. My research focuses on the prediction 
        of fire curves using advanced data assimilation techniques and computational modeling, 
        combining fluid mechanics, heat transfer, and applied mathematics.
      </p>

      <p class="hero-bio">
        I am passionate about interdisciplinary collaboration, mentoring students, and contributing 
        to scientific publications. Beyond research, I aim to share insights through talks, 
        open-source software, and applied projects that enhance fire safety and emergency response.
      </p>

      <!-- Liens sociaux -->
      <div class="social-links">
        <a href="mailto:oualid.ikhou@univ-amu.fr" class="contact-btn">
          <i class="fa fa-envelope"></i> Contact Me
        </a>

        <a href="https://www.linkedin.com/in/oualid-ikhou-b40a1918a/" target="_blank" class="social-icon" title="LinkedIn">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>

        <a href="https://scholar.google.fr/citations?user=n26K8XoAAAAJ&hl=fr" target="_blank" class="social-icon" title="Google Scholar">
          <i class="fa-brands fa-google-scholar"></i>
        </a>

        <a href="https://www.researchgate.net/profile/Ikhou-Oualid" target="_blank" class="social-icon" title="ResearchGate">
          <i class="fa-brands fa-researchgate"></i>
        </a>

        <!-- Bouton CV -->
        <button class="cv-badge" id="toggle-cv">
          <i class="fa fa-file-lines"></i> CV
        </button>
      </div>
    </div>
  </div>
</section>

<!-- Modal CV -->
<div class="cv-modal-overlay" id="cv-modal">
  <div class="cv-modal-box">
    <div class="cv-modal-header">
      <h3 class="gradient-text">Curriculum Vitae</h3>
      <div class="cv-modal-actions">
        <a href="{{ site.baseurl }}/assets/cv/Oualid_IKHOU_CV.pdf" download class="cv-btn-download">
          <i class="fa fa-download"></i> Download
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

  // Fermer en cliquant sur le fond
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
  });

  // Fermer avec Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.classList.remove('open');
  });
</script>
