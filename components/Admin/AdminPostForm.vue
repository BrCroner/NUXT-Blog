<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Nome do Autor</AppControlInput>
    <AppControlInput v-model="editedPost.title">Título</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail">
      Thumbnail
    </AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.content">
      Conteúdo
    </AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.previewText">
      Texto de amostra
    </AppControlInput>
    <AppButton type="submit">Salvar</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
    >
      Cancelar
    </AppButton>
  </form>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            thumbnail: "",
            content: "",
            previewText: "",
          },
    };
  },
  methods: {
    onSave() {
      this.$emit("submit", this.editedPost);
    },
    onCancel() {
      this.$router.push("/admin");
    },
  },
};
</script>
