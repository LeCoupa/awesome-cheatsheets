<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
img(
  @click="onClick"
  :src="'/images/components/BaseShare/' + network + '.svg'"
  class="c-base-share"
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
  display: block;
  width: 32px;
  height: 32px;
  cursor: pointer;
}
</style>
