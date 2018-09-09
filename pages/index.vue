<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-index
  h2(
    v-html="description"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  data() {
    return {
      description: `
        Awesome cheatsheets for popular programming languages, frameworks and development tools.<br/>
        They include everything you should know in one single file. 🤓👌
      `
    };
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss"></style>
