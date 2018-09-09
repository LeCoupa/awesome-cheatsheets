<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
a(
  class="c-the-copyright"
  href="https://twitter.com/LeCoupa"
  target="_blank"
)
  span.c-the-copyright__name By LeCoupa

  img(
    :src="baseUrl + '/images/common/lecoupa.jpg'"
    class="c-the-copyright__picture"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  data() {
    return {
      // --> STATE <--
      baseUrl: process.env.baseUrl
    };
  },

  methods: {
    onClick() {
      console.log("onClick");
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-the-copyright";

#{$c} {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-top: 1px solid $oxford-blue;
  border-left: 1px solid $oxford-blue;
  border-top-left-radius: 4px;
  background-color: $mirage2;

  #{$c}__name {
    margin-right: 6px;
    color: $white;
    font-size: 14px;
  }

  #{$c}__picture {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
}
</style>
