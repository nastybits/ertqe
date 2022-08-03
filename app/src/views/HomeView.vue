<template>
  <div class="home">
    <Theme/>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data() {
    return {
      component: null
    }
  },
  components: {
    Theme: () => import('@/components/Theme.vue'),
    // Login: () => import('@/components/Login.vue')
  }
}
</script>
