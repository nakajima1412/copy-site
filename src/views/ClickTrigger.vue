<template>
  <div class="wrapper">
    <p class="btn mb-20" v-if="isHideArea" @click="showArea">
      ↓ ここをクリックしたら隠れているエリアが表示され、ボタン自体が消える s↓
    </p>
    <p class="hide_area mb-20" v-else :class="{ fadeUp: !isHideArea }">
      このエリアが出現します
    </p>

    <div
      class="box"
      :class="{ zoomIn: isActiveOnce }"
      @click.once="changeActiveOnce"
    >
      クリックしたら1回だけ
    </div>
    <div
      class="box"
      :class="{ zoomIn: isActive }"
      @click="changeActive"
      @animationend="changeActive"
    >
      クリックしたら何回も
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ScrollTrigger',

  components: {},

  setup() {
    // 別の要素表示
    const isHideArea = ref(true)
    const showArea = () => (isHideArea.value = !isHideArea.value)

    // click で要素にアニメーションをつける
    const isActive = ref(false)
    const isActiveOnce = ref(false)
    const changeActive = () => (isActive.value = !isActive.value)
    const changeActiveOnce = () => (isActiveOnce.value = !isActiveOnce.value)

    return {
      isHideArea,
      showArea,

      isActive,
      isActiveOnce,
      changeActive,
      changeActiveOnce,
    }
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
}

.btn {
  background: #333;
  cursor: pointer;
  padding: 10px 30px;
  color: #fff;
  text-align: center;
}

.hide_area {
  background: #eee;
  padding: 100px 20px;
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

.zoomIn {
  animation-name: zoomInAnime;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes zoomInAnime {
  from {
    transform: scale(0.6);
  }

  to {
    transform: scale(1);
  }
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
</style>
