<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-index
  img(
    src="/images/common/logo.png"
    srcset="/images/common/logo@2x.png"
    class="c-index__logo"
  )
  p(
    v-html="description"
    class="c-index__description"
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
        They include everything you should know in one single file. 👩‍💻👨‍💻
      `
    };
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-index";

#{$c} {
  #{$c}__logo {
    width: 245px;
    height: 165px;
    user-select: none;
  }

  #{$c}__description {
    margin: 0;
    margin: 40px 0;
    font-size: 24px;
    line-height: 36px;
  }
}
</style>
