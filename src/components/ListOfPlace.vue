<template>
  <div class="lists">
    <div class="top">
      <h2 class="title">Список Мест</h2>
    </div>
    <div class="list" v-for="post in information" :key="post.id">
      <div>
        <p><strong>Название:</strong>{{ post.name }}</p>
        <p>
          <strong>Адрес:</strong>{{ post.address.city }},{{ post.address.street}},{{ post.address.suite }}
        </p>
        <p><strong>Телефон:</strong> {{ post.phone }}</p>
      </div>
      <div class="couple">
        <button class="about" @click="$emit('selectItemData', post) ">Подробно</button>
        <button class="deleted" @click="$emit('remove', post)">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    information: {
      type: Array,
      required: true,
    },
  },
  emits: ["remove", "selectItemData"],
};
</script>

<style scoped>
.lists {
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 100%;
  gap: 20px;
  overflow-y: scroll;
}
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100px;
}
.button:hover {
  cursor: pointer;
}
.list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  border: 2px solid rgb(11, 10, 10);
}
.title {
  margin-left: auto;
  margin-right: auto;
  text-decoration: underline;
}
.couple {
  height: 100%;
  display: flex;
  gap: 20px;
}
.deleted {
  border-radius: 30%;
  background: #dbc6eb;
}
.deleted:hover {
  cursor: pointer;
}
.about {
  border-radius: 30%;
  background:  #dbc6eb;
}
.about:hover {
    cursor: pointer;
}
</style>
