<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput type="email" v-model="email">E-Mail</AppControlInput>
        <AppControlInput type="password" v-model="password"
          >Senha</AppControlInput
        >
        <AppButton type="submit">{{
          isLogin ? "Login" : "Cadastro"
        }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
          >Alterar para {{ isLogin ? "Cadastro" : "Login" }}</AppButton
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  name: "AdminAuthPage",
  data() {
    return {
      isLogin: true,
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("authenticateUser", {
          isLogin: this.isLogin,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push("/admin");
        });
    },
  },
};
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  max-width: 400px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}

.buttons-center {
  display: flex;
  align-content: center;
  justify-content: space-between;
}
</style>
