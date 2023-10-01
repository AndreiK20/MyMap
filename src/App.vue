<template>
  <main class="main">
    <header class="header">
      <HeaderForApp></HeaderForApp>
    </header>
    <InformatoinForUser @openPopUp="showPopUp"></InformatoinForUser>
    <section class="section">
      <MapForUse>
      </MapForUse>
      <ListOfPlace
        v-bind:information="information"
        @remove="removeCard"
        @selectItemData="selectItem"
      ></ListOfPlace>
    </section>
    <Dialog
      v-model:visible="visible"
      modal
      header=" "
      :style="{
        width: '80%',
        height: '70%',
        border: '2px solid #000',
        background: 'white',
      }"
    >
      <CreateNewForm @create="createForm"></CreateNewForm>
    </Dialog>
    <Dialog
      v-model:visible="show"
      modal
      header=" "
      :style="{
        width: '80%',
        height: '70%',
        border: '2px solid #000',
        background: 'white',
      }"
    >
      <FullDataForPlace
        v-if="selectedItem"
        class="size"
        :selectedItem="selectedItem"
      ></FullDataForPlace>
    </Dialog>
  </main>
</template>

<script>
import HeaderForApp from "./components/HeaderForApp.vue";
import InformatoinForUser from "./components/InformatoinForUser.vue";
import CreateNewForm from "./components/CreateNewForm.vue";
import ListOfPlace from "./components/ListOfPlace.vue";
import MapForUse from "./components/MapForUse.vue";
import FullDataForPlace from "./components/FullDataForPlace.vue";
import axios from "axios";

export default {
  components: {
    HeaderForApp,
    InformatoinForUser,
    CreateNewForm,
    ListOfPlace,
    FullDataForPlace,
    MapForUse,
  },
  data() {
    return {
      information: [],
      visible: false,
      show: false,
      selectedItem: null,
    };
  },
  mounted() {
    this.fetchUsers();
  },

  methods: {
    selectItem(post) {
      this.selectedItem = post;
      this.show = true;
    },

    createForm(newPlace) {
      newPlace.id = Math.random();
      this.information.push(newPlace);
      this.visible = false;
    },

    showPopUp(value) {
      this.visible = value;
    },

    removeCard(post) {
      this.information = this.information.filter((item) => item.id !== post.id);
    },

    async fetchUsers() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.information = res.data;
      } catch (error) {
        console.log("Что то пошло не так:", error);
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.header {
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
}
.main {
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;
  height: 1500px;
  background: linear-gradient(to right, #2c12d8, #c0a9e6);
}

.section {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 900px;
}
</style>
