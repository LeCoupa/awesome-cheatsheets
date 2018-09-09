<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-the-copyright
  span.c-the-copyright__name By LeCoupa

  span.c-the-copyright__picture
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {};
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
  padding: 5px 5px 5px 15px;
  border-top: 1px solid #313d4f;
  border-left: 1px solid #313d4f;
  border-top-left-radius: 4px;
  background-color: #171e29;

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
    background-size: cover;
    background-image: url("/images/common/lecoupa.jpg");
  }
}
</style>
