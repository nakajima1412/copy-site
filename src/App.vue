<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/animation">Animation</router-link> |
    <router-link to="/scroll-trigger">ScrollTrigger</router-link> |
    <router-link to="/click-trigger">ClickTrigger</router-link> |
    <router-link to="/mouse-trigger">MouseTrigger</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import './scss/reset.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
