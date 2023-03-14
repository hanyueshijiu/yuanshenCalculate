<template>
  <div id="app">
    <header class="header">原神圣遗物计算器</header>
    <div class="content">
      <attributeCalculate />
    </div>
  </div>
</template>

<script setup lang="ts">
import attributeCalculate from './components/attributeCalculate.vue';
</script>

<style lang="less" scoped>
body{
  margin: 2rem auto;
}
#app {
  margin: 0 auto;
  background-image: url('../public/bg.jpg');
  background-repeat: no-repeat;
  background-size:cover;
  opacity: 0.9;
  overflow: hidden;
  color: aquamarine;

  .header {
    text-align: center;
    font-size: 2rem;
    margin-top: 1rem;
    font-weight: bold;
    font-family: serif;
    border-radius: 1rem;
  }

  .content {
    display: flex;
    justify-content: center;
    margin: 1rem auto;
  }
}
</style>
