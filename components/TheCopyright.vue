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

  span.c-the-copyright__picture
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
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
  padding: 5px 5px 5px 10px;
  border-top: 1px solid #313d4f;
  border-left: 1px solid #313d4f;
  border-top-left-radius: 4px;
  background-color: #171e29;
  text-decoration: none;
  cursor: pointer;

  #{$c}__name {
    margin-right: 6px;
    color: #ffffff;
    font-size: 14px;
  }

  #{$c}__picture {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-image: url("/images/common/lecoupa.jpg");
    background-size: cover;
  }
}
</style>
