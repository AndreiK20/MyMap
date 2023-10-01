<template>
  <div class="size" v-if="selectedItem">
    <h3 class="large">{{ selectedItem.name }}</h3>
    <ul class="small">
      <li>
        <strong>Адрес:</strong> {{ selectedItem.address.city }},
        {{ selectedItem.address.street }}, {{ selectedItem.address.suite }}
      </li>
      <li><strong>Телефон:</strong> {{ selectedItem.phone }}</li>
      <li><strong>Почта:</strong> {{ selectedItem.email }}</li>
      <li><strong>Сайт:</strong> {{ selectedItem.website }}</li>
      <li>Координаты:</li>
      <li><strong>Ширина:</strong> {{ selectedItem.address.geo.lat }}</li>
      <li><strong>Долгота:</strong> {{ selectedItem.address.geo.lng }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    selectedItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.size {
  display: flex;
  width: 100%;
  height: 800px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 200px;
}
.large {
    display: block;
  font-size: 60px;
  color: #333;
  font-weight: bold;
}
.small{
  display: flex;
  flex-direction: column;
  font-size: 30px;
  color: #333;
  font-weight: bold;
  text-decoration: none;
  list-style-type: none;
  gap:40px;
}
</style>

<!-- {{ selectedItem.address.street }}, {{ selectedItem.address.suite }} -->
