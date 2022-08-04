<template>
  <div class="blur-box">
    <div class="blur-box__bg" :style="{ backgroundImage: `url(${background})`, backgroundSize:  width}"></div>
    <div class="blur-box__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlurBox",
  props: {
    bg: {
      type: String,
      required: true
    },
    bgBlured: {
      type: [String, null],
      default: null
    },
    position: {
      type: String,
      default: "center"
    }
  },
  computed: {
    background() {
      return require('@/assets/' + this.bg)
    },
    width() {
      return document.documentElement.clientWidth + "px"
    }
  }
}
</script>

<style scoped lang="scss">
.blur-box {
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
}

.blur-box__bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  z-index: 0;
  opacity: 1;
  transition: 1s;
  filter: blur(7px);
  background-position: center;
}

.blur-box:hover .blur-box__bg {
  filter: blur(20px);
}

.blur-box__body {
  z-index: 2;
}
</style>