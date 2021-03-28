<template>
  <div class="box fadeUp">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FadeUpAnime',
}
</script>

<style lang="scss" scoped>
@charset "utf-8";

.box {
  width: 220px;
  padding: 20px;
  background: #666;
  color: #fff;
  box-sizing: border-box;
}
.fadeUp {
  animation-name: fadeUpAnime;
  animation-duration: 1s; /*アニメーション変化時間 ※デフォルト*/
  animation-fill-mode: forwards; /*アニメーションの開始と終了時の状態を指定*/
  opacity: 0;
}

@keyframes fadeUpAnime {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0f);
  }
}

.change-time05 {
  animation-duration: 0.5s;
}

.change-time1 {
  animation-duration: 1s;
}

.change-time15 {
  animation-duration: 1.5s;
}

.delay-time05 {
  animation-delay: 0.5s;
}

.delay-time1 {
  animation-delay: 1s;
}

.delay-time15 {
  animation-delay: 1.5s;
}

.count2 {
  animation-iteration-count: 2;
}

.countinfinite {
  animation-iteration-count: infinite;
}

.timing-ease {
  animation-timing-function: ease;
}

.timing-ease-in {
  animation-timing-function: ease-in;
}

.timing-ease-out {
  animation-timing-function: ease-out;
}

.timing-ease-in-out {
  animation-timing-function: ease-in-out;
}

.timing-linear {
  animation-timing-function: linear;
}

.timing-steps {
  animation-timing-function: steps(4, end);
}

.timing-cubic-bezier {
  animation-timing-function: cubic-bezier(0.17, 0.67, 0.67, 0.51);
}
</style>
