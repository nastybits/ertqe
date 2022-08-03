<template>
  <div class="home">
    <Theme @select="setTheme"/>
    <transition name="sb-fade" appear>
      <Login v-if="theme" :theme="theme"/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data() {
    return {
      theme: null
    }
  },
  components: {
    Theme: () => import('@/components/Theme.vue'),
    Login: () => import('@/components/Login.vue')
  },
  methods: {
    setTheme(val) {
      this.theme = val
    }
  }
}
</script>
