<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
  .c-layout-default
    github-corner

    nuxt
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import GithubCorner from "@/components/GithubCorner";

export default {
  components: {
    GithubCorner
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
html {
  box-sizing: border-box;
  background-color: #1b2431;
  color: white;
  text-align: center;
  word-spacing: 1px;
  font-size: 16px;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
</style>

