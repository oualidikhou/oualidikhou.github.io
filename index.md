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
        PhD Student in Engineering Sciences – Fluid Mechanics & Physics<br/>
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

        <!-- Bouton CV -->
        <button class="social-icon" id="open-cv" title="CV">
          <i class="fa fa-file"></i>
        </button>
      </div>
    </div>
  </div>
</section>

<!-- CV Modal -->
<div id="cv-modal" class="cv-modal">
  <div class="cv-header">
    <button id="close-cv" class="cv-close">✖</button>
    <a href="{{ site.baseurl }}/assets/cv/Oualid_IKHOU_CV.pdf" download class="cv-download">
      ⬇ Download CV
    </a>
  </div>
  <iframe 
    src="{{ site.baseurl }}/assets/cv/Oualid_IKHOU_CV.pdf"
    class="cv-frame">
  </iframe>
</div>

<!-- Script JS pour modal -->
<script>
  const openCV = document.getElementById("open-cv");
  const closeCV = document.getElementById("close-cv");
  const modal = document.getElementById("cv-modal");

  // Ouvrir le modal
  openCV.onclick = () => {
    modal.style.display = "flex";
  }

  // Fermer le modal
  closeCV.onclick = () => {
    modal.style.display = "none";
  }

  // Fermer le modal si clic en dehors du contenu
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
</script>
