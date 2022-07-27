<template>
  <div class="single-post-page">
    <div class="post">
      <div class="post-header">
        <h1 class="post-header-title">{{ loadedPost.title }}</h1>
        <div class="post-detail">
          <div class="post-detail-author">
            Escrito por: {{ loadedPost.author }}
          </div>
          <div class="post-detail-date">
            Última atualização em: {{ loadedPost.updatedDate | date }}
          </div>
        </div>
      </div>
      <div class="post-content">
        <div class="post-content-body">
          {{ loadedPost.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$axios
      .$get("/posts/" + context.params.id + ".json")
      .then((data) => {
        return { loadedPost: data };
      })
      .catch((err) => context.error(err));
  },
};
</script>

<style>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}
</style>
