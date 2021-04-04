<template>
  <div class="wrapper">
    <div
      class="box rotateXHoverTrigger"
      :class="{ fadeUp: isFadeUp, rotateX: isRoutate }"
      @mouseenter="changeRoutate"
      @mouseleave="changeFadeUp"
    >
      マウスが乗るとrotateXクラスが付与し、マウスが外れるとrotateXクラスが外れてfadeUpクラスがつく
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MouseTrigger',

  components: {},

  setup() {
    const isRoutate = ref(false)
    const isFadeUp = ref(false)
    const changeRoutate = () => {
      isRoutate.value = true
      isFadeUp.value = false
    }
    const changeFadeUp = () => {
      isRoutate.value = false
      isFadeUp.value = true
    }

    return {
      isRoutate,
      isFadeUp,
      changeRoutate,
      changeFadeUp,
    }
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
}

.box {
  width: 220px;
  padding: 20px;
  margin: 0 20px 20px 0;
  background: #666;
  color: #fff;
  box-sizing: border-box;
  cursor: pointer;
}

.fadeUp {
  animation-name: fadeUpAnime;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fadeUpAnime {
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.rotateX {
  animation-name: rotateXAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes rotateXAnime {
  from {
    transform: rotateX(0);
    opacity: 0;
  }
  to {
    transform: rotateX(-360deg);
    opacity: 1;
  }
}
</style>
