<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
a(
  :href="link"
  class="c-base-cheatsheet"
  targer="_blank"
)
  img(
    :src="'/images/components/BaseCheatsheet/' + thumbnail"
    class="c-base-cheatsheet__thumbnail"
  )
  .c-base-cheatsheet__content
    span.c-base-cheatsheet__name The {{ name }} Cheatsheet

    .c-base-cheatsheet__share
      span(
        v-for="network in networks"
        :src="'/images/components/BaseCheatsheet/' + network"
        class="c-base-cheatsheet__icon"
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      // --> COMPONENTS <--
      networks: ["twitter", "slack", "messenger", "telegram", "linkedin"]
    };
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-base-cheatsheet";

#{$c} {
  display: block;
  padding: 10px;
  border: 1px solid #313d4f;
  border-radius: 4px;
  background: #273142;
  cursor: pointer;

  #{$c}__thumbnail {
    margin-bottom: 5px;
    width: 100%;
    height: 160px;
    border-radius: 4px;
  }

  #{$c}__content {
    padding: 10px;
    text-align: left;

    #{$c}__name {
      margin-bottom: 20px;
      color: #ffffff;
      font-size: 18px;
    }
  }
}
</style>
