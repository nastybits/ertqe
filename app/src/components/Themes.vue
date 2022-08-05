<template>
  <div>
    <div class="themes">
      <div
          v-for="(t, i) of themes"
          :key="i"
          class="theme gradient-LtoD"
          :class="{
            active: active === t.name,
            fade: active !== null && active !== t.name
          }"
          :style="{backgroundImage: `url(${require('@/assets/img/bg_theme-'+ t.name +'.png')})` }"
          @click="active = t.name">
        <div class="theme__body" :style="{backgroundImage: `url(${require('@/assets/img/'+ t.name +'.png')})` }">
          <h2 class="theme__title">
            <small>Set</small>
            <span>{{ t.name }}</span>
            <small>as site theme</small>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Themes",
  data() {
    return {
      active: null,
      themes: [
        { name: "Tyra"}, // #55cc7c #f5f97f
        { name: "Emily"}, // #f5f97f #74bce5
        { name: "Ryonen"}, // #74bce5 #ff4b2a
        { name: "Alisa"}, // #ff4b2a
      ]
    }
  },
  watch: {
    active() {
      setTimeout(() => {
        this.$emit('select', this.active)
      }, 1100)
    }
  }
}
</script>

<style scoped lang="scss">
.themes {
  display: flex;
  justify-content: flex-start;
  font-family: Montserrat, sans-serif;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
}

.theme {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 30%;
  font-size: 46px;
  font-weight: 700;
  cursor: pointer;
  transform: skewX(-20deg);
  overflow: hidden;
  box-sizing: border-box;
  transition: .7s;
  margin-left: -1px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  // filter: grayscale(1);
}

.theme__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 165%;
  height: 100%;
  transform: skewX(20deg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 1s;
  filter: blur(3px);

}

.theme__title {
  font-family: Montserrat, sans-serif;
  opacity: 0;
  transition: 1s;
  line-height: 1;
  width: 100%;
  background: rgba(0,0,0,.5);
  padding: 10px 0;
  color: white;
}

.theme__title small {
  display: block;
  font-size: 18px;
  margin-top: 15px;
}

.theme:first-child {
  margin-left: -10%;
}

.theme:last-child {
  margin-right: -10%;
}

.theme:first-child .theme__title {
  margin-left: 9%;
}

.theme:last-child .theme__title {
  margin-right: 15%;
}

.theme:first-child .theme__body {
  background-position: 40%;
}

.theme:last-child .theme__body {
  background-position: 60%;
}

.theme:hover {
  width: 50%;
  filter: grayscale(0);
}

.theme:hover .theme__body {
  filter: blur(0);
}

.theme:hover .theme__title {
  opacity: 1;
}

.theme.active {
  width: 100%;
  transform: skewX(0);
  margin: 0;
  cursor: default;
  transition: 1s;
}

.theme.active .theme__title {
  opacity: 0;
}

.theme.active .theme__body {
  width: 100%;
  height: 100%;
  transform: skewX(0);
  filter: grayscale(0) blur(0);
  background-position: center;
  transition: 1s;
}

.theme.fade {
  width: 0;
  margin: 0;
  padding: 0;
  transform: skewX(0);
  transition: 1s;
}

.theme.fade .theme__body {
  transform: skewX(0);
  transition: 1s;
}
</style>