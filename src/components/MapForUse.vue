<template>
  <div class="map">
    <!-- здесь id="app" явно не нужен -->
    <div> 
      <yandex-map 
        :coords="coords" 
        :zoom="10" 
        :settings="settings"
      >
        <!-- <ymap-marker
          :coords="coords"
          marker-id="123"
          hint-content="some hint"
        /> -->
      </yandex-map>
    </div>
  </div>
</template>

<script>
import { yandexMap } from 'vue-yandex-maps';

export default {
  components: { yandexMap },

  data() {
    return {
      coords: [54.82896654088406, 39.831893822753904],
      settings: {
        apiKey: "dbce3460-d1df-40bb-a4fe-b12ffed9ac66",
        lang: "ru_RU",
        coordorder: "latlong",
        enterprise: false,
        version: "2.1",
      }
    };
  },
};
</script>

<style scoped>
.map {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 700px;
  height: 100%;
  border: 1px solid blue;
  background-color: aliceblue;
}
#app {
  width: 100%;
  height: 100vh;
}

.ymap-container {
  height: 100%;
}
</style>
