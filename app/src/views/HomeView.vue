<template>
  <div class="home">
    <Themes @select="setTheme"/>
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
    Themes: () => import('@/components/Themes.vue'),
    Login: () => import('@/components/Login.vue')
  },
  methods: {
    setTheme(val) {
      this.theme = val
    }
  }
}
</script>
