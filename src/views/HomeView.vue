<script>
import axios from 'axios';

export default {
  methods: {
    async downloadPdf() {
      fetch('CV_LOUIS_CARVALHO.pdf')
        .then(response => response.blob())
        .then(blob => {
          
          const url = URL.createObjectURL(blob);

          const link = document.createElement('a');
          link.href = url;
          link.download = 'CV_LOUIS_CARVALHO.pdf';
          document.body.appendChild(link);
          link.click();

          link.parentNode.removeChild(link);
          setTimeout(() => URL.revokeObjectURL(url), 100);
        });
    }
  }
}
</script>
<template>
  <div class="home container-fluid text-center pt-1">
    <h1 class="name my-5">Carvalho Louis</h1>
    <div class="subtitle text-center">
      <h2 class="dev">Développeur Web</h2>
      <h2 class="fullstack">Fullstack</h2>
    </div>
    <div class="download-btn mt-5">
      <button @click="downloadPdf('./CV_LOUIS_CARVALHO.pdf')">Télécharger CV<i class="fa-solid fa-download"></i></button>
    </div>
    <div class="socials d-flex justify-content-center my-5">
        <a href="https://www.linkedin.com/in/louis-carvalho/" class="linkedin">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/LouisC98" class="github">
          <i class="fa-brands fa-github"></i>
        </a>
    </div>
  </div>
</template>
