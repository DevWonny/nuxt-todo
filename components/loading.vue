<template>
  <div v-if="loading" class="p-fixed">
    <div class="overlay"></div>
    <div class="loading-page wrapper">
      <div class="circle"></div>
      <div class="shadow"></div>
    </div>

    <p>LOADING</p>
  </div>
</template>

<script setup>
import { ref } from "@nuxtjs/composition-api";

// ref state
const show = ref(false);
const loading = ref(false);

// methods
const start = () => {
  loading.value = true;
};

const finish = () => {
  loading.value = false;
};
</script>

<style scoped lang="scss">
.p-fixed {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;

  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(246, 247, 249, 0.5);
  }

  .wrapper {
    width: 40px;
    height: 60px;
    position: absolute;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
  }

  .circle {
    width: 40px;
    height: 40px;
    position: absolute;
    border-radius: 50%;
    background: #ffad31;
    transform-origin: 50%;
    animation: circle 0.5s alternate infinite ease;
  }

  .shadow {
    width: 40px;
    height: 4px;
    border-radius: 50%;
    background-color: rgba(34, 41, 79, 0.3);
    position: absolute;
    top: 82px;
    transform-origin: 50%;
    z-index: -1;
    filter: blur(1px);
    animation: shadow 0.5s alternate infinite ease;
  }

  @keyframes circle {
    0% {
      top: 80px;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.7);
      background-color: #ff932f;
    }

    40% {
      height: 30px;
      transform: scaleX(1);
      background-color: #ffad31;
    }
    100% {
      top: 0;
    }
  }
  @keyframes shadow {
    0% {
      transform: scaleX(1.5);
    }
    50% {
      transform: scaleX(1);
      opacity: 0.7;
    }
    100% {
      transform: scaleX(0.5);
      opacity: 0.3;
    }
  }
  p {
    text-transform: uppercase;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: fit-content;
    height: fit-content;
    margin: auto;
    padding-top: 150px;
  }
}
</style>
