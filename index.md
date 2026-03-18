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
        <button class="social-icon" id="toggle-cv" title="CV">
          <i class="fa fa-file"></i>
        </button>
      </div>
    </div>
  </div>
</section>

<!-- Section CV (normale, bloc complet) -->
<section id="cv-section" style="display:none; margin-top:3rem;">
  <div class="cv-header" style="display:flex; justify-content: space-between; align-items:center; margin-bottom:1rem;">
    <button id="close-cv" class="cv-close" style="padding:0.5rem 1rem; font-size:1rem;">✖ Close</button>
    <a href="{{ site.baseurl }}/assets/cv/Oualid_IKHOU_CV.pdf" download class="cv-download" style="padding:0.5rem 1rem; font-size:1rem; background-color: var(--accent-blue); color:white; border-radius:6px; text-decoration:none;">
      ⬇ Download CV
    </a>
  </div>
  <iframe 
    src="{{ site.baseurl }}/assets/cv/Oualid_IKHOU_CV.pdf" 
    style="width:100%; height:800px; border:1px solid var(--glass-border); border-radius:8px;">
  </iframe>
</section>

<script>
  const toggleCV = document.getElementById("toggle-cv");
  const closeCV = document.getElementById("close-cv");
  const cvSection = document.getElementById("cv-section");

  // Afficher la section CV
  toggleCV.onclick = () => {
    cvSection.style.display = "block";
    cvSection.scrollIntoView({ behavior: "smooth" }); // scroll jusqu'au CV
  }

  // Fermer la section CV
  closeCV.onclick = () => {
    cvSection.style.display = "none";
  }
</script>
