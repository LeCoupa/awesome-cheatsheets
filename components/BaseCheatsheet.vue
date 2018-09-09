<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-base-cheatsheet
  img(
    :src="thumbnail"
    class="c-base-cheatsheet__thumbnail"
  )
  .c-base-cheatsheet__content
    span.c-base-cheatsheet__name The {{ name }} Cheatsheet
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-base-cheatsheet";

#{$c} {
  padding: 10px;
  border: 1px solid #313d4f;
  border-radius: 4px;
  background: #273142;

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
