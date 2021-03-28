<template>
  <div class="wrapper">
    <p class="mb-20">テキスト例題</p>
    <div class="flex flex-center ml-20">
      <fade-in-anime>ふわっとテキストが現れる</fade-in-anime>
    </div>

    <p class="mb-20">
      アニメーション1回分の時間の長さを指定したい (animation-duration)
    </p>
    <div class="flex flex-center mb-20">
      <fade-up-anime
        v-for="(time, index) in times"
        :key="index"
        :class="[`change-time${time}`]"
        class="ml-20 mr-20"
      >
        {{ `${time}秒後にアニメーション開始` }}
      </fade-up-anime>
    </div>

    <p class="mb-20">
      アニメーションの開始を遅らせたい (animation-delay)
    </p>
    <div class="flex flex-center mb-20">
      <fade-up-anime
        v-for="(time, index) in times"
        :key="index"
        :class="[`delay-time${time}`]"
        class="ml-20 mr-20"
      >
        {{ `${time}秒後にアニメーション開始` }}
      </fade-up-anime>
    </div>

    <p class="mb-20">
      動きをループさせたい (animation-iteration-count)
    </p>
    <div class="flex flex-center mb-20">
      <fade-up-anime class="count2 ml-20 mr-20">
        動きを2回繰り返す
      </fade-up-anime>
      <fade-up-anime class="countinfinite ml-20 mr-20">
        動きを無限に繰り返す
      </fade-up-anime>
    </div>

    <p class="mb-20">
      アニメーションの進行具合を操作したい (animation-timing-function)
    </p>
    <div class="flex flex-center mb-20">
      <fade-up-anime class="timing-ease ml-20 mr-20">
        開始時と終了時が緩やかに変化（ease）
      </fade-up-anime>
      <fade-up-anime class="timing-ease-in ml-20 mr-20">
        開始時は緩やかに変化、終了に近づくと早く変化（ease-in）
      </fade-up-anime>
      <fade-up-anime class="timing-ease-out ml-20 mr-20">
        開始時は緩やかに変化、終了に近づくと早く変化（ease-out）
      </fade-up-anime>
      <fade-up-anime class="timing-ease-in-out ml-20 mr-20">
        開始時は緩やかに変化、終了に近づくと早く変化（ease-in-out）
      </fade-up-anime>
      <fade-up-anime class="timing-linear ml-20 mr-20">
        開始から終了まで一定に変化（linear）
      </fade-up-anime>
      <fade-up-anime class="timing-steps ml-20 mr-20">
        パラパラ漫画のように数値をコマ数で変化（steps）
      </fade-up-anime>
      <fade-up-anime class="timing-cubic-bezier ml-20 mr-20">
        変化の進行割合を3次ベジェ曲線で指定（cubic-bezier）
      </fade-up-anime>
    </div>
  </div>

  <p class="mb-20">アニメーションをまとめて設定するデモ</p>
  <div class="flex flex-center mb-20">
    <fade-down-anime class="box fadeDown">
      アニメーションをまとめて設定するデモ
    </fade-down-anime>
  </div>
</template>

<script>
import FadeInAnime from '@/components/FadeInAnime'
import FadeUpAnime from '@/components/FadeUpAnime'
import FadeDownAnime from '@/components/FadeDownAnime'

export default {
  name: 'Animation',
  components: {
    FadeInAnime,
    FadeUpAnime,
    FadeDownAnime,
  },
  setup() {
    const times = ['05', '1', '15']

    return {
      times,
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
}

.flex {
  display: flex;
  flex-wrap: wrap;

  & .flex-center {
    justify-content: center;
    align-items: center;
  }
}

.ml-20 {
  margin-left: 20px;
}
.mr-20 {
  margin-right: 20px;
}

.mb-20 {
  margin-bottom: 20px;
}
</style>
