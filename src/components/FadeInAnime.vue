<template>
  <p class="box fadeIn">
    <slot />
  </p>
</template>

<style lang="scss" scoped>
.box {
  width: 220px;
  padding: 20px;
  background: #666;
  color: #fff;
  box-sizing: border-box;
}
.fadeIn {
  animation-name: fadeInAnime;
  animation-fill-mode: backwards;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  animation-delay: 0.5s;
  animation-direction: normal;
}

@keyframes fadeInAnime {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
