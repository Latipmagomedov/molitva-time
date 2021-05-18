<template>
  <div id="cube-loader" v-if="loading">
    <div class="loading">
      <div class="loading-text">
        <span class="loading-text-words">M</span>
        <span class="loading-text-words">O</span>
        <span class="loading-text-words">L</span>
        <span class="loading-text-words">I</span>
        <span class="loading-text-words">T</span>
        <span class="loading-text-words">V</span>
        <span class="loading-text-words">A</span>
        <span class="loading-text-words">-</span>
        <span class="loading-text-words">T</span>
        <span class="loading-text-words">I</span>
        <span class="loading-text-words">M</span>
        <span class="loading-text-words">E</span>
      </div>
    </div>
    <!-- <h2>molitva-time.ru</h2> -->
  </div>
</template>

<script>
export default {
  name: "Loader",
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    window.addEventListener("load", () => {
      setTimeout(() => {
        this.loading = false;

        // if (document.querySelector(".search")) {
        //   document.querySelector(".search").classList.add("bounce");
        // }
        // if (document.querySelector(".back")) {
        //   document.querySelector(".back").classList.add("driveInTop");
        // }
      }, 0);
    });
  },
  watch: {
    $route() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;

        // if (document.querySelector(".search")) {
        //   document.querySelector(".search").classList.add("driveInTop"); 
        // }
        // if (document.querySelector(".back")) {
        //   document.querySelector(".back").classList.add("driveInTop");
        // }
      }, 0);
    },
  },
};
</script>


<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Quattrocento+Sans);
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 9999;
}

.loading-text {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  width: 100%;
  height: 100px;
  line-height: 100px;
}
.loading-text span {
  display: inline-block;
  margin: 0 5px;
  color: #5199ff;
  font-family: "Quattrocento Sans", sans-serif;
}
.loading-text span:nth-child(1) {
  filter: blur(0px);
  animation: blur-text 1.5s 0s infinite linear alternate;
}
.loading-text span:nth-child(2) {
  filter: blur(0px);
  animation: blur-text 1.5s 0.2s infinite linear alternate;
}
.loading-text span:nth-child(3) {
  filter: blur(0px);
  animation: blur-text 1.5s 0.4s infinite linear alternate;
}
.loading-text span:nth-child(4) {
  filter: blur(0px);
  animation: blur-text 1.5s 0.6s infinite linear alternate;
}
.loading-text span:nth-child(5) {
  filter: blur(0px);
  animation: blur-text 1.5s 0.8s infinite linear alternate;
}
.loading-text span:nth-child(6) {
  filter: blur(0px);
  animation: blur-text 1.5s 1s infinite linear alternate;
}
.loading-text span:nth-child(7) {
  filter: blur(0px);
  animation: blur-text 1.5s 1.2s infinite linear alternate;
}

.loading-text span:nth-child(8) {
  filter: blur(0px);
  animation: blur-text 1.5s 1.4s infinite linear alternate;
}
.loading-text span:nth-child(9) {
  filter: blur(0px);
  animation: blur-text 1.5s 1.6s infinite linear alternate;
}
.loading-text span:nth-child(10) {
  filter: blur(0px);
  animation: blur-text 1.5s 1.8s infinite linear alternate;
}
.loading-text span:nth-child(11) {
  filter: blur(0px);
  animation: blur-text 1.5s 2s infinite linear alternate;
}
.loading-text span:nth-child(12) {
  filter: blur(0px);
  animation: blur-text 1.5s 2.2s infinite linear alternate;
}

@keyframes blur-text {
  0% {
    filter: blur(0px);
  }
  100% {
    filter: blur(4px);
  }
}
</style>