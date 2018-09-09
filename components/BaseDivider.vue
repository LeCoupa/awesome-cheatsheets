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
    font-size: 18px;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    margin-right: 40px;
  }

  #{$c}__line {
    flex: 1;
    color: #313d4f;
  }
}
</style>
