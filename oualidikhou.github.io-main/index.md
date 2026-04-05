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
        PhD Student · Fluid Mechanics &amp; Fire Science<br/>
        <span style="color: var(--accent-blue); font-size:0.95rem;">IUSTI Laboratory · Aix-Marseille University</span>
      </h2>

      <p class="hero-bio">
        I am a PhD student specializing in numerical and experimental studies of confined fires,
        with applications to firefighter interventions. My research focuses on the prediction
        of fire dynamics using advanced data assimilation techniques (4D-Var), combining
        fluid mechanics, heat transfer, and applied mathematics.
      </p>

      <p class="hero-bio">
        I am also a <strong style="color: var(--text-primary);">volunteer firefighter</strong>, which directly
        shapes my scientific approach — bridging the gap between theoretical modeling
        and real-world emergency response.
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
        <button class="social-icon" id="toggle-cv" title="View CV">
          <i class="fa fa-file-lines"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- Stats animées -->
  <div class="stats-row" style="margin-top: 3rem;">
    <div class="stat-item">
      <span class="stat-number" data-target="2" data-suffix="+">0+</span>
      <span class="stat-label">Years of<br>Research</span>
    </div>
    <div class="stat-item">
      <span class="stat-number" data-target="1" data-suffix="">0</span>
      <span class="stat-label">Publication</span>
    </div>
    <div class="stat-item">
      <span class="stat-number" data-target="1" data-suffix="">0</span>
      <span class="stat-label">Conference<br>Talk</span>
    </div>
    <div class="stat-item">
      <span class="stat-number" data-target="64" data-suffix="h">0h</span>
      <span class="stat-label">Teaching<br>per year</span>
    </div>
  </div>

  <!-- Research interests tags -->
  <div style="margin-top: 2.5rem;">
    <p style="font-size:0.78rem; text-transform:uppercase; letter-spacing:1.5px; color:var(--text-secondary); margin-bottom:0.8rem;">Research Interests</p>
    <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
      <span class="tag">Fire Dynamics</span>
      <span class="tag">Data Assimilation</span>
      <span class="tag">4D-Var</span>
      <span class="tag tag-purple">Fluid Mechanics</span>
      <span class="tag tag-purple">Heat Transfer</span>
      <span class="tag tag-cyan">Confined Fires</span>
      <span class="tag tag-cyan">Firefighter Safety</span>
    </div>
  </div>
</section>

<!-- Section CV -->
<section id="cv-section" style="display:none;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
    <h3 class="gradient-text">Curriculum Vitae</h3>
    <div style="display:flex; gap:1rem; align-items:center;">
      <button id="close-cv" class="cv-close">✖ Close</button>
      <a href="{{ site.baseurl }}/assets/cv/Oualid_IKHOU_CV.pdf" download
         style="padding:0.5rem 1.2rem; font-size:0.9rem; background:var(--gradient-primary); color:white; border-radius:8px; text-decoration:none; font-weight:600;">
        ⬇ Download PDF
      </a>
    </div>
  </div>
  <iframe
    src="{{ site.baseurl }}/assets/cv/Oualid_IKHOU_CV.pdf"
    style="width:100%; height:800px; border:1px solid var(--glass-border); border-radius:12px;">
  </iframe>
</section>

<script>
  const toggleCV = document.getElementById("toggle-cv");
  const closeCV  = document.getElementById("close-cv");
  const cvSection = document.getElementById("cv-section");

  toggleCV.onclick = () => {
    cvSection.style.display = "block";
    cvSection.scrollIntoView({ behavior: "smooth" });
  };
  closeCV.onclick = () => {
    cvSection.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
</script>
