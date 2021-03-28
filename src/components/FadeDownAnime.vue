<template>
  <p class="box fadeDown">
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
.fadeDown {
  animation: fadeDownAnime 1s ease 1.5s forwards; /*アニメーションの定義名、アニメーション１回分の時間の長さ、アニメーションの進行具合、アニメーションの開始を遅らせる、アニメーションの開始と終了時の状態を指定をまとめて設定*/
  opacity: 0;
}

@keyframes fadeDownAnime {
  from {
    opacity: 0;
    transform: translateY(-100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
