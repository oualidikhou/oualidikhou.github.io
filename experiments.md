---
layout: default
title: Experimentations
---

<section>
  <h1 class="gradient-text">Experimental Gallery</h1>
  <p class="hero-bio">
    A selection of images showcasing my experimental work across fire safety, fluid mechanics, and thermal studies.
  </p>

  <div class="experiments-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 2rem; margin-top: 3rem;">
    
    <!-- Experiment 1 -->
    <div class="experiment-card" style="background: var(--glass-bg); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden; transition: transform 0.3s ease;">
      <div class="image-container" style="height: 250px; overflow: hidden; background: #1a1a1a; display: flex; align-items: center; justify-content: center; position: relative;">
        <!-- Replace 'assets/img/photo1.jpg' with your actual image path -->
        <img src="assets/img/placeholder.jpg" alt="Confined Fire Dynamics" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8;">
        <span style="position: absolute; color: white; font-size: 0.8rem; opacity: 0.5;">Add your photo here</span>
      </div>
      <div style="padding: 1.5rem;">
        <span style="font-size: 0.75rem; color: var(--accent-blue); text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Research • Experiment</span>
        <h3 style="margin: 0.5rem 0; color: var(--text-primary);">Confined Fire Dynamics</h3>
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">
          Detailed visualization of fire growth and smoke layer evolution in a controlled compartment environment.
        </p>
      </div>
    </div>

    <!-- Experiment 2 -->
    <div class="experiment-card" style="background: var(--glass-bg); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden; transition: transform 0.3s ease;">
      <div class="image-container" style="height: 250px; overflow: hidden; background: #1a1a1a; display: flex; align-items: center; justify-content: center; position: relative;">
        <!-- Replace 'assets/img/photo2.jpg' with your actual image path -->
        <img src="assets/img/placeholder.jpg" alt="Flame Front Analysis" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8;">
        <span style="position: absolute; color: white; font-size: 0.8rem; opacity: 0.5;">Add your photo here</span>
      </div>
      <div style="padding: 1.5rem;">
        <span style="font-size: 0.75rem; color: var(--accent-purple); text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Analysis • Imaging</span>
        <h3 style="margin: 0.5rem 0; color: var(--text-primary);">Flame Front Tracking</h3>
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">
          Digital image processing applied to experimental recordings to track flame propagation and velocity vectors.
        </p>
      </div>
    </div>

    <!-- Experiment 3 -->
    <div class="experiment-card" style="background: var(--glass-bg); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden; transition: transform 0.3s ease;">
      <div class="image-container" style="height: 250px; overflow: hidden; background: #1a1a1a; display: flex; align-items: center; justify-content: center; position: relative;">
        <!-- Replace 'assets/img/photo3.jpg' with your actual image path -->
        <img src="assets/img/placeholder.jpg" alt="Data Assimilation Results" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8;">
        <span style="position: absolute; color: white; font-size: 0.8rem; opacity: 0.5;">Add your photo here</span>
      </div>
      <div style="padding: 1.5rem;">
        <span style="font-size: 0.75rem; color: var(--accent-green); text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Modeling • Validation</span>
        <h3 style="margin: 0.5rem 0; color: var(--text-primary);">Predictive Modeling</h3>
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">
          Integration of experimental measurements into numerical models for real-time fire behavior validation.
        </p>
      </div>
    </div>

  </div>
</section>

<style>
  .experiment-card:hover {
    transform: translateY(-10px);
    border-color: var(--accent-blue) !important;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }
</style>
