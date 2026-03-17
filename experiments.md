---
layout: default
title: Experimentations
---

<section>
  <h1 class="gradient-text">Experimental Gallery</h1>
  <p class="hero-bio">
    Visual results and video demonstrations from my research on fire dynamics, confined fires, and numerical validation.
  </p>

  <div class="experiments-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 2rem; margin-top: 3rem;">
    
    <!-- Experiment 1: Video -->
    <div class="experiment-card" style="background: var(--glass-bg); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden; transition: transform 0.3s ease;">
      <div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; background: #000;">
        <iframe 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="Fire Dynamics Simulation" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
      <div style="padding: 1.5rem;">
        <span style="font-size: 0.75rem; color: var(--accent-blue); text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Video • Simulation</span>
        <h3 style="margin: 0.5rem 0; color: var(--text-primary);">Confined Fire Dynamics</h3>
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">
          Real-time visualization of fire growth and smoke layer evolution in a confined compartment using CFD tools.
        </p>
      </div>
    </div>

    <!-- Experiment 2: Image -->
    <div class="experiment-card" style="background: var(--glass-bg); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden; transition: transform 0.3s ease;">
      <div class="image-container" style="height: 200px; overflow: hidden; background: #1a1a1a; display: flex; align-items: center; justify-content: center;">
        <!-- Replace 'assets/img/your-photo.jpg' with your actual image path -->
        <img src="assets/img/placeholder.jpg" alt="Experiment Analysis" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8;">
        <span style="position: absolute; color: white; font-size: 0.8rem; opacity: 0.5;">Add your photo here</span>
      </div>
      <div style="padding: 1.5rem;">
        <span style="font-size: 0.75rem; color: var(--accent-purple); text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Image • Analysis</span>
        <h3 style="margin: 0.5rem 0; color: var(--text-primary);">Flame Front Tracking</h3>
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">
          Digital image processing applied to experimental recordings to track flame propagation and velocity vectors.
        </p>
      </div>
    </div>

    <!-- Experiment 3: Video -->
    <div class="experiment-card" style="background: var(--glass-bg); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden; transition: transform 0.3s ease;">
      <div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; background: #000;">
        <iframe 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="Data Assimilation Results" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
      <div style="padding: 1.5rem;">
        <span style="font-size: 0.75rem; color: var(--accent-green); text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Video • Data Assimilation</span>
        <h3 style="margin: 0.5rem 0; color: var(--text-primary);">Predictive Modeling</h3>
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">
          Integration of live sensor data into numerical models to provide real-time fire behavior forecasts.
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
