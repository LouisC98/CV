<script>
export default {
  methods: {
  downloadPdf() {
    const pdfUrl = '/CV_LOUIS_CARVALHO.pdf';

    const a = document.createElement('a');

    a.href = pdfUrl;

    a.download = 'CV_LOUIS_CARVALHO.pdf';

    a.click();
  },
},
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
      <button @click="downloadPdf">Télécharger CV<i class="fa-solid fa-download"></i></button>
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
