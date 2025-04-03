<template>
    <footer class="footer">
      <div class="container">
        <p class="copyright">© {{ new Date().getFullYear() }} {{ name }}. Todos os direitos reservados.</p>
        
        <div class="social-links">
          <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank">
            <i :class="link.icon"></i>
          </a>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  const name = "Adailton Santos";
  
  const socialLinks = [
    { name: "Currículo", url: "https://drive.google.com/file/d/1I2x4d1e9cJSbL8eYvnsnbAl19uWh8GQ-/view", icon: "bi bi-paperclip" },
    { name: "GitHub", url: "https://github.com/AdailtonSantos/", icon: "bi bi-github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/adailton-aparecido-dos-santos-751bb922b/", icon: "bi bi-linkedin" },
  ];
  </script>
  
  <style scoped>
  .footer {
    background-color: #121212;
    color: #ffffff;
    text-align: center;
    padding: 20px 10px;
    font-size: 14px;
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .social-links {
    margin-top: 10px;
  }
  
  .social-links a {
    color: #ffffff;
    margin: 0 10px;
    font-size: 20px;
    transition: transform 0.2s ease, color 0.3s ease;
  }
  
  .social-links a:hover {
    transform: scale(1.2);
    color: #00aaff;
  }
  </style>  