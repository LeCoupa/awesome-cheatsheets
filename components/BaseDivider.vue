<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-base-divider
  span.c-base-divider__category {{ category }}

  hr.c-base-divider__line
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    category: {
      name: String,
      required: true
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-base-divider";

#{$c} {
  display: flex;
  align-items: center;

  #{$c}__category {
    margin-right: 40px;
    color: #ffffff;
    text-align-last: left;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
  }

  #{$c}__line {
    flex: 1;
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #313d4f;
  }
}
</style>
