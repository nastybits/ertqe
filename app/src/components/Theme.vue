<template>
  <div>
    <div class="themes">
      <div class="theme">
        <div class="theme__body" :style="{backgroundImage: `url(${require('@/assets/img/bg_blk.jpg')})` }">
          <h2 class="theme__title">
            <small>Set</small>
            <span>Megan</span>
            <small>as site theme</small>
          </h2>
        </div>
      </div>
      <div class="theme">
        <div class="theme__body" :style="{backgroundImage: `url(${require('@/assets/img/bg.jpg')})` }">
          <h2 class="theme__title">
            <small>Set</small>
            <span>Alisa</span>
            <small>as site theme</small>
          </h2>
        </div>
      </div>
      <div class="theme">
        <div class="theme__body" :style="{backgroundImage: `url(${require('@/assets/img/bg_4.jpg')})` }">
          <h2 class="theme__title">
            <small>Set</small>
            <span>Candice</span>
            <small>as site theme</small>
          </h2>
        </div>
      </div>
      <div class="theme">
        <div class="theme__body" :style="{backgroundImage: `url(${require('@/assets/img/bg_3.jpg')})` }">
          <h2 class="theme__title">
            <small>Set</small>
            <span>Hailey</span>
            <small>as site theme</small>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Theme"
}
</script>

<style scoped lang="scss">
.themes {
  display: flex;
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
  cursor: pointer;
  transform: skewX(-20deg);
  overflow: hidden;
  box-sizing: border-box;
  transition: .7s;
}

.theme__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 170%;
  height: 110%;
  transform: skewX(20deg);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 1s;
  filter: grayscale(1) blur(3px);
}

.theme__title {
  font-family: Montserrat, sans-serif;
  opacity: 0;
  transition: 1s;
  line-height: 1;
  width: 100%;
  background: rgba(0,0,0,.33);
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
  width: 35%;
}

.theme:hover .theme__body {
  filter: grayscale(0);
}

.theme:hover .theme__title {
  opacity: 1;
}
</style>