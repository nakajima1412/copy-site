<template>
  <fade-up-anime>
    画面が読み込まれたらふわっ（下から）
  </fade-up-anime>

  <br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓
  <br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓スクロールすると出る<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓<br />↓

  <div
    ref="scrollFadeUpRef"
    class="box fadeUpTrigger"
    :class="{ fadeUp: isActive }"
  >
    スクロールしたらふわっ（下から）
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import FadeUpAnime from '@/components/FadeUpAnime'

export default defineComponent({
  name: 'ScrollTrigger',

  components: { FadeUpAnime },

  setup() {
    /** @type {HTMLDivElement | null} dom */
    const scrollFadeUpRef = ref(null)
    /** @type {boolean} クラス付与 */
    const isActive = ref(false)

    // 要素が画面表示されそうか
    const handler = entries => {
      isActive.value = !entries[0]?.intersectionRatio <= 0
    }

    const onIntersect = (target, handler, options = {}) => {
      const observer = new IntersectionObserver(handler, options)
      observer.observe(target)
    }

    onMounted(() => {
      onIntersect(scrollFadeUpRef.value, handler)
    })

    return {
      scrollFadeUpRef,
      isActive,
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
}

.fadeUpTrigger {
  opacity: 0;
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
