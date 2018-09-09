<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :data-balloon="'Share on ' + network"
  class="c-base-share"
  data-balloon-pos="up"
  data-balloon-type="mini"
)
  img(
    @click="onClick"
    :src="'/images/components/BaseShare/' + network.toLowerCase() + '.svg'"
    class="c-base-share__image"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    network: {
      type: String,
      required: true
    }
  },

  methods: {
    onClick() {
      this.$emit("click", this.network);
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-base-share";

#{$c} {
  display: inline-block;

  #{$c}__image {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
}
</style>
