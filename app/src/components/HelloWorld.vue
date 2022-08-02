<template>
  <div class="overlay" :class="{'theme-black': themeBlack}" @click="themeBlack = !themeBlack">
    <div class="login">
        <div class="login__bg"></div>
        <div class="login__header">
          Erotique
        </div>
        <div class="login__body">
          <div class="login__form">
            <input id="login" placeholder="login"/>
            <input id="password" type="password" placeholder="password"/>
            <button>Enter</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      themeBlack: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("~@/assets/img/bg2.jpg") no-repeat center;
}

.overlay.theme-black {
  background: url("~@/assets/img/bg_black.jpg") no-repeat center;
}

.overlay__container {
  position: relative;
  width: 80%;
  margin: 0 auto;
}

.login {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 85vh;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  border-radius: 10px;
  background: url("~@/assets/img/bg2_blured.jpg") no-repeat center;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
  color: #333;
}

.theme-black .login {
  background: url("~@/assets/img/bg_black_blured.jpg") no-repeat center;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
  color: #ccc;
}

.login__bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: url("~@/assets/img/bg2.jpg") no-repeat center;
  box-sizing: border-box;
  z-index: 0;
  opacity: 1;
  transition: 1s;
  filter: blur(7px);
}

.theme-black .login__bg {
  background: url("~@/assets/img/bg_black.jpg") no-repeat center;
}

.login:hover .login__bg {
  filter: blur(20px);
}

.login__header,
.login__body,
.login__footer {
  position: relative;
  z-index: 1;
  max-width: 400px;
}

.login__header {
  height: 200px;
  font-size: 46px;
  line-height: 200px;
}
.login__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 20px;
  box-sizing: border-box;
  width: 100%;
}
.login__footer {
  height: 90px;
  line-height: 90px;
  font-size: 30px;
}

.login__form input {
  display: block;
  width: 100%;
  border: none;
  background: transparent;
  border-bottom: 1px solid rgba(0,0,0,.66);
  box-sizing: border-box;
  font-size: 24px;
  padding: 15px 10px;
  margin-bottom: 60px;
  outline: none !important;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
}

.theme-black .login__form input {
  border-bottom: 1px solid rgba(255,255,255,.66);
}

.login__form input[placeholder] {
  opacity: .66;
  color: inherit;
}

.login__form button {
  border: none;
  font-size: 30px;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  background: transparent;
  cursor: pointer;
  opacity: .66;
  transition: .2s;
  color: inherit;
}

.login__form button:hover {
  opacity: 1
}
</style>
