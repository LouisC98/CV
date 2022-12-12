<script>
  import HeaderNav from './components/HeaderNav.vue';

  export default {
    components: {
      HeaderNav
    }
  }
</script>

<template>
  <main>
    <RouterView />
  </main>
  <HeaderNav />
</template>
