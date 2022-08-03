<template>
  <div class="blur-box" :style="{ background: backgroundBlured ? `url(${backgroundBlured}) no-repeat ${position}` : `none`}">
    <div class="blur-box__bg" :style="{ background: `url(${background}) no-repeat ${position}`}"></div>
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
    backgroundBlured() {
      return this.bgBlured ? require('@/assets/' + this.bgBlured) : null
    }
  }
}
</script>

<style scoped lang="scss">
.blur-box {
  position: relative;
  display: flex;
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
}

.blur-box:hover .blur-box__bg {
  filter: blur(20px);
}

.blur-box__body {
  z-index: 2;
}
</style>