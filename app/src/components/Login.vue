<template>
  <div class="overlay">
    <blur-box
        class="login" :bg="`img/${theme}.jpg`">
        <div class="login__header">Erotique</div>
        <div class="login__body">
          <div class="login__form">
            <input id="login" placeholder="login"/>
            <input id="password" type="password" placeholder="password"/>
            <button>Enter</button>
          </div>
        </div>
      </blur-box>
  </div>
</template>

<script>
import BlurBox from "@/components/BlurBox";

export default {
  name: 'HelloWorld',
  components: {
    BlurBox
  },
  props: {
    theme: {
      type: String,
      required: true
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
  background-size: cover;
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
  width: 450px;
  height: 70vh;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  border-radius: 10px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
  color: #333;
  overflow: hidden;
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
