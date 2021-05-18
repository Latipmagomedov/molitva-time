<template>
  <div id="app">
    <Loader />
    <router-view />
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
export default {
  components: {
    Loader,
  },
};
</script>

<style lang="scss">
// @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

@font-face {
  font-family: “Roboto”;
  src: url("assets/fonts/Roboto-Black.ttf");
  src: url("assets/fonts/Roboto-Bold.ttf");
  src: url("assets/fonts/Roboto-Light.ttf");
  src: url("assets/fonts/Roboto-Medium.ttf");
  src: url("assets/fonts/Roboto-Regular.ttf");
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  box-shadow: none;
  border-radius: 0;
  outline: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: "Roboto", sans-serif;
}

body {
  background-color: #1b1b1b;
  color: #000;
  font-family: "Roboto", sans-serif;
}

/* полоса прокрутки (скроллбар) */
::-webkit-scrollbar {
  width: 0px; /* ширина для вертикального скролла */
  height: 0px; /* высота для горизонтального скролла */
  background: #338bff;
}

/* ползунок скроллбара */
::-webkit-scrollbar-thumb {
  background-color: #ffffff;
  border-radius: 3px;
}

button,
input {
  box-shadow: none;
  border: none;
  border-radius: 0;
  font-family: "Roboto", sans-serif;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}

input,
input:before,
input:after {
  -webkit-user-select: initial;
  -khtml-user-select: initial;
  -moz-user-select: initial;
  -ms-user-select: initial;
  user-select: initial;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.label {
  display: none;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.content {
  width: 100%;
  min-height: 620px;
  height: 100vh;
  color: #fff;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.blur {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  min-height: 600px;
  height: 100%;
  background-image: url(assets/img/bg.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(12px);
  transform: scale(1.1);
}

.dark {
  background-image: url(assets/img/bg-dark.jpg);
}

.container {
  width: 90.1%;
  max-width: 500px;
  margin: 0 auto;
}

.home .container {
  position: relative;
  width: 90.1%;
  max-width: 500px;
  margin: 0 auto;
}

.top-header {
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  height: 90px;
  background: linear-gradient(#ffffff15, #00000000);
  padding-top: 17px;
  z-index: 99;
  overflow: hidden;

  .top-header__nav {
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .top-header__icon {
      width: 50px;
      height: 28px;
      margin-right: -13px;
      display: flex;
      justify-content: center;
      cursor: pointer;
      display: flex;
      justify-content: center;

      $icon-size: 5px;
      span {
        display: block;
        width: $icon-size;
        height: $icon-size;
        background-color: #fff;
        border-radius: 100%;
        z-index: 99;

        &::before {
          content: "";
          position: absolute;
          display: block;
          margin-top: 11.4px;
          width: $icon-size;
          height: $icon-size;
          background-color: #fff;
          border-radius: 50px;
        }
        &::after {
          content: "";
          position: absolute;
          display: block;
          margin-top: 23px;
          width: $icon-size;
          height: $icon-size;
          background-color: #fff;
          border-radius: 50px;
        }
      }
    }

    .top-header__title {
      margin-left: 0px;
      font-size: 18px;
      font-weight: 400;
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
}

.top-headerBlur {
  background: #ffffff0a;
  background: linear-gradient(#ffffff0c, #ffffff00);
}

.containerBlur {
  filter: blur(15px);
  z-index: 9;
}

.desc {
  margin-top: 80px;
  max-width: 280px;
  h1 {
    margin-top: 20px;
    font-size: 33px;
    font-weight: bold;
    line-height: 1;
  }
  h2 {
    font-size: 14px;
    font-weight: 400;
    margin-top: 9px;
  }
}

.content-2 {
  .desc {
    margin-top: 40px;
    h2 {
      font-size: 36px;
      font-weight: bold;
      line-height: 1;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      margin-top: 9px;
    }
  }
}

.error-notification {
  position: fixed;
  top: 10px;
  width: 90.1%;
  max-width: 500px;
  margin: 0 auto;
  z-index: 999;
  border-radius: 8px;
  padding: 15px 45px;
  background-color: #61616198;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-align: center;
    // font-weight: 500;
    font-size: 15px;
  }

  .error-notification__ok {
    width: 60%;
    margin-top: 10px;
    color: #6fabff;
    font-size: 17px;
    font-weight: 500;
    text-align: center;
    padding-top: 10px;
    border-top: 0.1px solid #ffffff96;
  }
}

.search {
  position: relative;
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #ffffff5d;
  border-radius: 12px;
  padding: 0 0 0 0;
  z-index: 99;
  transition: 0.3s;

  div {
    width: 100%;
  }

  .autocomplete {
    width: 100%;

    ul.autocomplete-result-list {
      margin-top: 5px;
      width: 100%;
      max-height: 200px;
      overflow: scroll;
      border-radius: 12px;
      padding: 10px 0;
      padding-left: 15px;
      font-size: 14px;
      background-color: #ffffffda;
      color: #000000;
      list-style: none;
      li {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
      }
    }
  }

  input {
    border-radius: 12px;
    outline: none;
    width: 100%;
    height: 50px;
    padding-left: 15px;
    font-size: 14px;
    background-color: transparent;
    color: #fff;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border: none;
      -webkit-text-fill-color: #ffffff !important;
      -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
      transition: background-color 5000s ease-in-out 0s !important;
    }

    &::placeholder {
      color: #fff;
      font-size: 14px;
      font-weight: 300;
      transition: 0.3s;
    }
  }

  input.error::placeholder {
    transition: 0.3s;
  }

  button {
    background-color: transparent;
    position: absolute;
    right: 13px;
    margin-top: 2px;

    img {
      width: 27px;
    }
  }
}

.city {
  margin-top: 23px;

  p.city__title {
    font-size: 25px;
    font-weight: 500;
  }

  .city__blocks {
    margin-top: 17px;
    height: 340px;

    .splide__list {
      .splide__slide {
        .city__block {
          height: 280px;
          border-radius: 12px;
          background-color: #ffffff17;
          background-image: url(assets/img/city/1.jpg);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          margin-bottom: 20px;

          .city__text {
            width: 100%;
            height: 100%;
            background-color: #0000009c;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            h2 {
              font-size: 21px;
            }

            p {
              margin-top: 3px;
              font-size: 11px;
            }
          }
        }
      }

      .splide__slide:nth-child(1n + 1) {
        .city__block {
          background-image: url(assets/img/city/2.jpg);
        }
      }
      .splide__slide:nth-child(2n + 2) {
        .city__block {
          background-image: url(assets/img/city/1.jpg);
        }
      }
      .splide__slide:nth-child(3n + 3) {
        .city__block {
          background-image: url(assets/img/city/3.jpg);
        }
      }
    }
  }
}

@media (max-width: 720px) {
  .splide__arrows {
    display: none;
  }
}

.splide__pagination {
  bottom: -7px !important;

  li {
    &:not(:first-child) {
      margin-left: 5px;
    }

    .splide__pagination__page {
      background-color: #fff;
    }

    .is-active {
      background-color: #358cfd;
    }
  }
}

.link-city {
  color: #fff;
}

.click-notification {
  position: fixed;
  width: 97%;
  max-width: 500px;
  height: 290px;
  padding: 10px;
  border-radius: 15px 15px 0 0;
  background-color: #ffffff38;
  // opacity: 0;
  bottom: 0;
  z-index: 10;

  span {
    width: 50px;
    height: 6px;
    margin: 0 auto;
    margin-top: 13px;
    border-radius: 50px;
    display: block;
    background-color: #ececec;
  }

  ul.click-notification__items {
    list-style: none;
    margin-top: 50px;
    li {
      font-size: 18px;
      color: #ffffff;
      font-weight: bold;
      text-align: center;

      &:not(:first-child) {
        margin-top: 25px;
      }
    }
  }
}

.click-none-active {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}

.home__modals {
  z-index: 99;
  .home__modalsModal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 400px;
    // min-height: 280px;
    border-radius: 12px;
    background-color: #ffffff3d;
    padding: 0 15px;
    padding-top: 20px;
    padding-bottom: 30px;
    .home__modalsTitle {
      color: #fff;
      margin-top: 15px;
      text-align: center;
      font-size: 27px;
    }

    .home__modalsOptions {
      // margin-top: 20px;
    }

    .home__modalsOption {
      width: 100%;
      padding: 0 10px;
      height: auto;
      padding-top: 15px;
      padding-bottom: 10px;
      border-bottom: 0.2px solid #0000003b;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        color: #fff;
        font-size: 18px;
      }
    }

    .home__modalsOption-boreder-none {
      border-bottom: none;
    }

    .home__modalsAbout {
      text-align: center;
      line-height: 1.3;
    }

    .home__modalsSocial {
      width: 100%;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
    }
  }
}

.back {
  position: absolute;
  top: 23px;
  display: flex;
  align-items: center;

  img {
    width: 10px;
  }

  span {
    margin-left: 20px;
    font-size: 15px;
    color: #3785f4;
  }
}

.prayers {
  margin-top: 20px;
  width: 100%;
  background-color: #ffffff59;
  border-radius: 17px;
  padding: 7px 20px;
  .prayers__prayer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.7px solid #ffffff48;
    padding-bottom: 9px;
    padding-top: 9px;

    .prayers__left {
      display: flex;
      align-items: center;

      .prayers__image {
        width: 38px;
        height: 38px;
        border-radius: 50px;
        background-color: #242424;
        display: flex;
        align-items: center;
        justify-content: center;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation: load8 1s infinite ease-in-out;
        animation: load7 1s infinite ease-in-out;
        background: rgba(255, 255, 255, 0.13);
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.13) 0%,
          rgba(255, 255, 255, 0.13) 5%,
          rgba(255, 255, 255, 0.5) 20%,
          rgba(255, 255, 255, 0) 100%
        );
        transition: 0.8s;
      }

      @-webkit-keyframes load6 {
        0% {
          // box-shadow: 0 3px 0 -3px;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.13) 0%,
            rgba(255, 255, 255, 0.13) 0%,
            rgba(255, 255, 255, 0.5) 15%,
            rgba(255, 255, 255, 0) 100%
          );
        }
        25% {
          // box-shadow: 0 3px 0 -3px;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.13) 0%,
            rgba(255, 255, 255, 0.13) 50%,
            rgba(255, 255, 255, 0.5) 65%,
            rgba(255, 255, 255, 0) 100%
          );
        }
        50% {
          // box-shadow: 0 3px 0 -3px;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.13) 0%,
            rgba(255, 255, 255, 0.13) 85%,
            rgba(255, 255, 255, 0.5) 100%,
            rgba(255, 255, 255, 0) 100%
          );
        }
        75% {
          // box-shadow: 0 3px 0 -3px;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.13) 0%,
            rgba(255, 255, 255, 0.13) 50%,
            rgba(255, 255, 255, 0.5) 65%,
            rgba(255, 255, 255, 0) 100%
          );
        }
        100% {
          // box-shadow: 0 3px 0 0;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.13) 0%,
            rgba(255, 255, 255, 0.13) 0%,
            rgba(255, 255, 255, 0.5) 15%,
            rgba(255, 255, 255, 0) 100%
          );
        }
      }

      img {
        width: 40px;
        height: 40px;
        border-radius: 50px;
      }

      .prayer__title {
        margin-left: 12px;
        font-size: 25px;
      }
    }

    .prayer__loader {
      width: 80px;
      height: 30px;
      border-radius: 5px;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation: load7 1s infinite ease-in-out;
      animation: load7 1s infinite ease-in-out;
      background: rgba(255, 255, 255, 0.13);
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.13) 0%,
        rgba(255, 255, 255, 0.13) 5%,
        rgba(255, 255, 255, 0.5) 20%,
        rgba(255, 255, 255, 0) 100%
      );
      transition: 0.8s;
    }
    @-webkit-keyframes load7 {
      0% {
        // box-shadow: 0 3px 0 -3px;
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.13) 0%,
          rgba(255, 255, 255, 0.13) 0%,
          rgba(255, 255, 255, 0.5) 15%,
          rgba(255, 255, 255, 0) 100%
        );
      }
      25% {
        // box-shadow: 0 3px 0 -3px;
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.13) 0%,
          rgba(255, 255, 255, 0.13) 50%,
          rgba(255, 255, 255, 0.5) 65%,
          rgba(255, 255, 255, 0) 100%
        );
      }
      50% {
        // box-shadow: 0 3px 0 -3px;
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.13) 0%,
          rgba(255, 255, 255, 0.13) 85%,
          rgba(255, 255, 255, 0.5) 100%,
          rgba(255, 255, 255, 0) 100%
        );
      }
      75% {
        // box-shadow: 0 3px 0 -3px;
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.13) 0%,
          rgba(255, 255, 255, 0.13) 50%,
          rgba(255, 255, 255, 0.5) 65%,
          rgba(255, 255, 255, 0) 100%
        );
      }
      100% {
        // box-shadow: 0 3px 0 0;
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.13) 0%,
          rgba(255, 255, 255, 0.13) 0%,
          rgba(255, 255, 255, 0.5) 15%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    }

    .prayer__time {
      font-size: 30px;
    }

    &:last-child {
      border: none;
    }
  }
}

.error-search {
  .error-search__message {
    font-size: 23px;

    p {
      margin-top: 5px;
      max-width: 200px;
      font-size: 15px;
      margin-bottom: 20px;
      color: #ffffffad;
    }

    a {
      font-size: 15px;
      color: #338bff;
    }
  }
}

.openqrmodal {
  text-align: center;
  margin-top: 30px;
  color: #338bff;
  cursor: pointer;
}

.qr-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    position: absolute;
    top: 30px;
    right: 30px;
    color: #e63a3a;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
}

.qr-container {
  background-color: #fff;
  width: 210px;
  height: 210px;
  padding: 5px;
}

.download-qr {
  margin-top: 30px;
  background-color: #0260e8;
  color: #fff;
  padding: 10px 23px;
  border-radius: 5px;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(290px);
  // opacity: 0;
}

@media (min-width: 980px) {
  .top-header {
    position: fixed;
    top: 0px;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    padding-top: 10px;
    z-index: 99;
    overflow: hidden;

    .top-header__nav {
      width: 90%;
      max-width: 500px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .top-header__icon {
        $icon-size: 30px;
        span {
          display: block;
          width: $icon-size;
          height: 5px;
          background-color: #fff;
          border-radius: 3px;
          z-index: 99;

          &::before {
            content: "";
            position: absolute;
            display: block;
            margin-top: 11.4px;
            width: $icon-size;
            height: 5px;
            background-color: #fff;
            border-radius: 3px;
          }
          &::after {
            content: "";
            position: absolute;
            display: block;
            margin-top: 23px;
            width: $icon-size;
            height: 5px;
            background-color: #fff;
            border-radius: 50px;
          }
        }
      }
    }
  }

  .click-notification {
    position: fixed;
    width: 100%;
    max-width: 100%;
    min-height: 600px;
    height: 100vh;
    border-radius: 0;
    background-color: #ffffff33;
    bottom: 0;
    z-index: 999;
    padding: 0 23px;
    display: flex;
    justify-content: center;
    align-items: center;

    .close-wrapper {
      width: 50px;
      height: 50px;
      position: absolute;
      right: 50px;
      top: 50px;
      cursor: pointer;
    }

    span {
      // position: absolute;
      // right: 50px;
      // top: 50px;
      width: 50px;
      height: 5px;
      margin: 0 auto;
      margin-top: 22px;
      border-radius: 50px;
      display: block;
      background-color: #ffffff;
      transform: rotate(45deg);

      &::before {
        content: "";
        position: absolute;
        display: block;
        width: 50px;
        height: 5px;
        border-radius: 50px;
        background-color: #ffffff;
        transform: rotate(90deg);
      }
    }

    ul.click-notification__items {
      list-style: none;
      margin-top: 50px;
      li {
        font-size: 23px;
        color: #ffffff;
        font-weight: bold;
        text-align: center;

        &:not(:first-child) {
          margin-top: 25px;
        }
      }
    }
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.3s;
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateY(100vh);
  }
}
</style>

