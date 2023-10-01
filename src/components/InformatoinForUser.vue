<template>
  <div class="information">
    <div class="position">
      <h3>Для добавления своего места на карту =></h3>
      <button class="click" @click="$emit('openPopUp', true)">нажми</button>
    </div>
  </div>
</template>

<script>
export default {
    emits: ["openPopUp"],
};
</script>

<style scoped>
.information {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 28px;
  color: #333;
  font-weight: bold;
}
.position {
  display: flex;
}
.click{
    background-color: rgb(210, 187, 243);
    border-radius: 25px;
    width: 60px;
    height: 50px;
}
.click:hover{
    cursor: pointer;
}
</style>