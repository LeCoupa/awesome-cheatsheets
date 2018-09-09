<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
  .l-default
    the-github(
      class="l-default__github"
    )

    nuxt

    the-copyright(
      class="l-default__copyright"
    )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import TheGithub from "@/components/TheGithub";
import TheCopyright from "@/components/TheCopyright";

export default {
  components: {
    TheGithub,
    TheCopyright
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".l-default";

html {
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 60px 0 40px;
  min-height: 100%;
  background-color: #1b2431;
  color: white;
  text-align: center;
  word-spacing: 1px;
  font-size: 16px;
  font-family: "Heebo Regular", "Helvetica Neue", Source Sans Pro, Helvetica,
    Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

@font-face {
  font-family: "Heebo Thin";
  src: url("/fonts/heebo/Heebo-Thin.otf");
}

@font-face {
  font-family: "Heebo Light";
  src: url("/fonts/heebo/Heebo-Light.otf");
}

@font-face {
  font-family: "Heebo Regular";
  src: url("/fonts/heebo/Heebo-Regular.otf");
}

@font-face {
  font-family: "Heebo Medium";
  src: url("/fonts/heebo/Heebo-Medium.otf");
}

@font-face {
  font-family: "Heebo Bold";
  src: url("/fonts/heebo/Heebo-Bold.otf");
}

@font-face {
  font-family: "Heebo ExtraBold";
  src: url("/fonts/heebo/Heebo-ExtraBold.otf");
}

@font-face {
  font-family: "Heebo Black";
  src: url("/fonts/heebo/Heebo-Black.otf");
}

#{$c} {
  #{$c}__copyright {
    position: fixed;
    right: 0;
    bottom: 0;
  }
}
</style>

