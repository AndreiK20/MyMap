<template>
  <div class="map">
    <div id="app">
      <yandex-map :coords="coords" :zoom="10">
        <ymap-marker
          :coords="coords"
          marker-id="123"
          hint-content="some hint"
        />
      </yandex-map>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coords: [54.82896654088406, 39.831893822753904],
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
