<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader";
import TheSidenav from "@/components/Navigation/TheSidenav";
import TheFooter from "@/components/TheFooter";

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheFooter,
  },
  data() {
    return {
      displaySidenav: false,
    };
  },
};
</script>

<style>
html,
body {
  margin: 0 !important;
  padding: 0 !important;
  font-family: "Teko", sans-serif;
  font-size: 16px;
}
h1,
h2,
h3 {
  font-family: "Bebas Neue", cursive;
  letter-spacing: 1px;
}
h1 {
  text-transform: uppercase;
}
p {
  font-size: 18px;
}
</style>
