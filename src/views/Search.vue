<template>
  <main>
    <header>
      <h1>The <strong>Anime</strong> Search</h1>
      <form class="search-box" @submit.prevent="HandleSearch">
        <input
          type="search"
          class="search-field"
          placeholder="Seach for anime ...."
          required
          v-model="search_query"
        />
      </form>
    </header>
    <div class="cards">
      <Card v-for="anime in list" :key="anime.mal_id" :anime="anime"></Card>
    </div>
  </main>
</template>

<script>
import Card from "../components/Cards.vue";

export default {
  components: { Card },
  data() {
    return {
      search_query: "",
      list: [],
    };
  },
  methods: {
    async HandleSearch() {
      await fetch(`https://api.jikan.moe/v4/anime?q=${this.search_query}`)
        .then((res) => res.json())
        .then((data) => {
          this.list = data.data;
          console.log(this.list);
          this.search_query = "";
        });
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  padding-top: 20px;
  padding-bottom: 20px;

  h1 {
    color: #888;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 30px;

    strong {
      color: #313131;
    }
    &:hover {
      color: #313131;
    }
  }
  form {
    margin: 0 auto;
    width: 500px;
  }
  .search-box {
    display: flex;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;

    .search-field {
      appearance: none;
      background: none;
      border: none;
      outline: none;

      background-color: #f3f3f3;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
      display: block;
      width: 100%;
      max-width: 600px;
      padding: 15px;
      border-radius: 8px;

      color: #313131;
      font-size: 20px;
      transition: 0.4s;
      &::placeholder {
        color: #aaa;
      }
      &:focus,
      &:valid {
        color: #fff;
        background-color: #313131;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
      }
    }
  }
}

.cards {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
}
</style>
