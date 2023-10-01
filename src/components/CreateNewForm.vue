<template>
  <div class="creator">
    <h2 class="mesto">Форма для публикации</h2>
    <form @submit.prevent class="form">
      <input
        v-model="newPlace.name"
        @input="newPlace.name = $event.target.value"
        class="input"
        type="text"
        placeholder="Название"
      />
      <input
        v-model="newPlace.email"
        @input="newPlace.email = $event.target.value"
        class="input"
        type="text"
        placeholder="email"
      />
      <input
        v-model="newPlace.address.city"
        @input="newPlace.address.city = $event.target.value"
        class="input"
        type="text"
        placeholder="Город"
      />
      <input
        v-model="newPlace.address.street"
        @input="newPlace.address.street = $event.target.value"
        class="input"
        type="text"
        placeholder="Улица"
      />
      <input
        v-model="newPlace.address.suite"
        @input="newPlace.address.suite = $event.target.value"
        class="input"
        type="text"
        placeholder="Номер дома"
      />
      <input
        v-model="newPlace.phone"
        @input="newPlace.phone = $event.target.value"
        class="input"
        type="text"
        placeholder="Телефон"
      />
      <input
        v-model="newPlace.website"
        @input="newPlace.website = $event.target.value"
        class="input"
        type="text"
        placeholder="Сайт"
      />
      <p>Местоположения / Координаты места</p>
      <input
        v-model="newPlace.address.geo.lat"
        @input="newPlace.address.geo.lat = $event.target.value"
        class="input"
        type="text"
        placeholder="Ширина"
      />
      <input
        v-model="newPlace.address.geo.lng"
        @input="newPlace.address.geo.lng = $event.target.value"
        class="input"
        type="text"
        placeholder="Долгота"
      />
    </form>
    <button class="buttonForCreatForm" @click="createForm">Создать</button>
  </div>
</template>

<script>
export default {
  emits: ["create"],

  data() {
    return {
      newPlace: {
        name: "",
        email: "",
        address: {
          city: "",
          street: "",
          suite: "",
          geo: {
            lat: "",
            lng: "",
          },
        },
        phone: "",
        website: "",
      },
    };
  },

  methods: {
    createForm() {
      if (
        this.newPlace.name &&
        this.newPlace.email &&
        this.newPlace.address.city &&
        this.newPlace.address.street &&
        this.newPlace.address.suite &&
        this.newPlace.phone &&
        this.newPlace.website &&
        this.newPlace.geo.lat &&
        this.newPlace.geo.lng
      ) {
        this.$emit("create", this.newPlace);
        this.newPlace = {
          name: "",
          email: "",
          address: {
            city: "",
            street: "",
            suite: "",
            geo: {
              lat: "",
              lng: "",
            },
          },
          phone: "",
          website: "",
        };
      } else {
        alert("Заполни пожалуйста все поля");
      }
    },
  },
};
</script>

<style scoped>
.creator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.mesto {
  margin-bottom: 20px;
}

.form {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  gap: 20px;
}

.input {
  width: 70%;
  height: 50px;
}
.buttonForCreatForm {
  width: 200px;
  height: 70px;
}
.buttonForCreatForm:hover {
  cursor: pointer;
}
</style>
