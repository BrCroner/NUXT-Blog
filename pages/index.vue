<template>
  <div class="home-page">
    <section class="intro">
      <h1>Meus últimos posts</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/main-page-background.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  width: 90%;
  font-size: 2.6rem;
  color: black;
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;
}
@media (min-width: 850px) {
  .featured-posts {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
}
</style>
