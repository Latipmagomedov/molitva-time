<template>
  <div>
    <div class="content content-2">
      <div class="blur"></div>
      <div class="container">
        <div class="back duration-900" @click="removeCity">
          <svg
            width="14"
            height="25"
            viewBox="0 0 14 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22.625L1.5 12.125L12 1.625"
              stroke="white"
              stroke-width="2"
              stroke-linecap="square"
            />
          </svg>

          <span v-if="lang == 'ru'">Другой город</span>
          <span v-if="lang == 'en'">Another city</span>
        </div>
        <div class="desc" v-if="!error">
          <h2>{{ this.$route.query.city }}</h2>
          <p v-if="lang == 'ru'">Тайм зона: {{ location }}</p>
          <p v-if="lang == 'en'">Timezone: {{ location }}</p>
        </div>

        <div class="prayers duration-900" v-if="!error">
          <div class="prayers__prayer">
            <div class="prayers__left">
              <div class="prayers__image">
                <img src="@/assets/img/day/1.jpg" alt="prayer-logo" />
              </div>

              <div v-if="lang == 'ru'" class="prayer__title">Фаджр:</div>
              <div v-if="lang == 'en'" class="prayer__title">Fajr:</div>
            </div>

            <div class="prayer__loader" v-if="!resCode"></div>
            <div class="prayer__time" v-if="resCode">{{ time.Fajr }}</div>
          </div>

          <div class="prayers__prayer">
            <div class="prayers__left">
              <div class="prayers__image">
                <img src="@/assets/img/day/vos.jpg" alt="prayer-logo" />
              </div>
              <div v-if="lang == 'ru'" class="prayer__title">Восход:</div>
              <div v-if="lang == 'en'" class="prayer__title">Sunrise:</div>
            </div>

            <div class="prayer__loader" v-if="!resCode"></div>
            <div class="prayer__time" v-if="resCode">{{ time.Sunrise }}</div>
          </div>

          <div class="prayers__prayer">
            <div class="prayers__left">
              <div class="prayers__image">
                <img src="@/assets/img/day/2.jpg" alt="prayer-logo" />
              </div>
              <div v-if="lang == 'ru'" class="prayer__title">Зухр:</div>
              <div v-if="lang == 'en'" class="prayer__title">Zuhr:</div>
            </div>

            <div class="prayer__loader" v-if="!resCode"></div>
            <div class="prayer__time" v-if="resCode">{{ time.Dhuhr }}</div>
          </div>

          <div class="prayers__prayer">
            <div class="prayers__left">
              <div class="prayers__image">
                <img src="@/assets/img/day/3.jpg" alt="prayer-logo" />
              </div>
              <div v-if="lang == 'ru'" class="prayer__title">Аср:</div>
              <div v-if="lang == 'en'" class="prayer__title">Asr:</div>
            </div>

            <div class="prayer__loader" v-if="!resCode"></div>
            <div class="prayer__time" v-if="resCode">{{ time.Asr }}</div>
          </div>

          <div class="prayers__prayer">
            <div class="prayers__left">
              <div class="prayers__image">
                <img src="@/assets/img/day/4.jpg" alt="prayer-logo" />
              </div>
              <div v-if="lang == 'ru'" class="prayer__title">Магриб:</div>
              <div v-if="lang == 'en'" class="prayer__title">Maghreb:</div>
            </div>

            <div class="prayer__loader" v-if="!resCode"></div>
            <div class="prayer__time" v-if="resCode">{{ time.Sunset }}</div>
          </div>

          <div class="prayers__prayer">
            <div class="prayers__left">
              <div class="prayers__image">
                <img src="@/assets/img/day/5.jpg" alt="prayer-logo" />
              </div>
              <div v-if="lang == 'ru'" class="prayer__title">Иша:</div>
              <div v-if="lang == 'en'" class="prayer__title">Isha:</div>
            </div>

            <div class="prayer__loader" v-if="!resCode"></div>
            <div class="prayer__time" v-if="resCode">{{ time.Isha }}</div>
          </div>
        </div>

        <div class="openqrmodal" v-if="!error" @click="openmodal">
          <p v-if="lang == 'ru'">Сгенерировать QR - код города</p>
          <p v-if="lang == 'en'">Generate QR - city code</p>
        </div>

        <transition name="bounce">
          <div class="qr-modal" v-if="qrmodal">
            <p @click="closeModal">Закрыть</p>
            <div class="qr-container">
              <qrcode-vue :value="value" :size="size" level="H" />
            </div>
            <a
              v-if="lang == 'ru'"
              id="download"
              download="qrcode.png"
              href=""
              @click="download"
              class="download-qr"
              >Скачать QR - код</a
            >

            <a
              v-if="lang == 'en'"
              id="download"
              download="qrcode.png"
              href=""
              @click="download"
              class="download-qr"
              >Download QR Code</a
            >
          </div>
        </transition>

        <div class="error-search" v-if="error">
          <div class="error-search__message">
            Город {{ this.$route.query.city }} не был найден !
            <p>Но вы можете найти другой город по близости</p>
            <a @click="removeCity()"> Найти другой город </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";

export default {
  components: {
    QrcodeVue,
  },
  data() {
    return {
      hours: new Date().getHours(),
      isDayTime: "",
      flag: true,
      resCode: "",
      time: "",
      location: "",
      error: false,
      value: `https://molitva-time.com${this.$route.fullPath}`,
      size: 200,
      qrmodal: false,
      lang: "ru",
    };
  },

  mounted() {
    this.isDayTime = this.hours > 6 && this.hours < 18;
    let bg = document.querySelector(".blur");
    if (localStorage.bg == "dark") {
      bg.classList.add("dark");
      this.activeClass = "dark";
    } else if (localStorage.bg == "light") {
      bg.classList.remove("dark");
      this.activeClass = "light";
    } else if (localStorage.bg == "auto") {
      this.activeClass = "auto";
      if (!this.isDayTime) {
        bg.classList.add("dark");
        this.topHeaderBlur = "top-headerBlur";
      }
    }

    localStorage.setItem("city", this.$route.query.city);

    if (localStorage.lang) {
      this.lang = localStorage.lang;
    }

    if (this.$route.query.city) {
      if (navigator.onLine) {
        let fet = fetch(
          `https://aladhan.p.rapidapi.com/timingsByCity?city=${this.$route.query.city}&country=russia"`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-key":
                "6f3ea4287dmsh370cc825937d336p19d219jsnff2f34145ddd",
              "x-rapidapi-host": "aladhan.p.rapidapi.com",
            },
          }
        )
          .then((response) => response.json())
          .then((res) => {
            if (res.code == 400) {
              this.error = true;
            }

            localStorage.setItem("res", JSON.stringify(res));
            localStorage.setItem("location", this.$route.query.city);

            console.log(res);
            this.resCode = res.code;
            this.location = res.data.meta.timezone;
            this.time = res.data.timings;
          });
        setTimeout(() => {
          if (
            !this.resCode &&
            localStorage.location == this.$route.query.city
          ) {
            console.log("fff");
            let res = JSON.parse(localStorage.res);
            this.resCode = res.code;
            this.location = res.data.meta.timezone;
            this.time = res.data.timings;
          }
        }, 4000);
      } else if (localStorage.location == this.$route.query.city) {
        let res = JSON.parse(localStorage.res);
        this.resCode = res.code;
        this.location = res.data.meta.timezone;
        this.time = res.data.timings;
      }
    }
  },

  methods: {
    removeCity() {
      localStorage.removeItem("city");
      this.$router.push("/");
    },
    openmodal() {
      this.qrmodal = true;
    },
    closeModal() {
      this.qrmodal = false;
    },
    download() {
      let image = document.querySelector("canvas").toDataURL("image/png");
      document.querySelector(".download-qr").href = image;
    },
  },
};
</script>
