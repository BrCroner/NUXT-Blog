<template>
  <section class="post-list">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :title="post.title"
      :thumbnail="post.thumbnail"
      :previewText="post.previewText"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";

export default {
  components: {
    PostPreview: PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      require: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
</style>
