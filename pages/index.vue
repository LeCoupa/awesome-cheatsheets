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
  p.c-index__description
    | Awesome cheatsheets for popular programming languages, frameworks and development tools.<br/>
    | They include everything you should know in one single file. 👩‍💻👨‍💻

  section(
    v-for="(category, index) in categories"
    class="c-index__category"
  )
    base-divider(
      :category="'0' + (index + 1) + '. ' + category.name"
    )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
import BaseDivider from "@/components/BaseDivider";

export default {
  components: {
    BaseDivider
  },

  data() {
    return {
      categories: [
        {
          name: "Languages"
        },
        {
          name: "Backend"
        },
        {
          name: "Frontend"
        },
        {
          name: "Databases"
        },
        {
          name: "Tools"
        }
      ]
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

  #{$c}__category {
    margin-bottom: 30px;
  }
}
</style>
