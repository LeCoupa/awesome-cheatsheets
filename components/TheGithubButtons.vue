<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-the-github-buttons
  span.c-the-github-buttons__wrapper
    iframe(
      :src="'https://ghbtns.com/github-btn.html?user=' + user + '&repo=' + repo + '&type=star&count=true'"
      frameborder="0"
      scrolling="0"
      height="20px"
      class="c-the-github-buttons__button c-the-github-buttons__button--star"
    )

  span.c-the-github-buttons__wrapper
    iframe(
      :src="'https://ghbtns.com/github-btn.html?user=' + user + '&repo=' + repo + '&type=watch&count=true&v=2'"
      frameborder="0"
      scrolling="0"
      height="20px"
      class="c-the-github-buttons__button c-the-github-buttons__button--watch"
    )

  span.c-the-github-buttons__wrapper
    iframe(
      :src="'https://ghbtns.com/github-btn.html?user=' + user + '&repo=' + repo + '&type=fork&count=true'"
      frameborder="0"
      scrolling="0"
      height="20px"
      class="c-the-github-buttons__button c-the-github-buttons__button--fork"
    )

  span.c-the-github-buttons__wrapper
    iframe(
      :src="'https://ghbtns.com/github-btn.html?user=' + user + '&type=follow&count=true'"
      frameborder="0"
      scrolling="0"
      height="20px"
      class="c-the-github-buttons__button c-the-github-buttons__button--follow"
    )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    repo: {
      type: String,
      required: true
    },
    user: {
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
$c: ".c-the-github-buttons";

#{$c} {
  #{$c}__wrapper {
    display: inline-block;
    margin-bottom: 10px;
    width: 100%;

    #{$c}__button {
      margin: 0 auto;

      &--star {
        width: 110px;
      }

      &--watch {
        width: 110px;
      }

      &--fork {
        width: 100px;
      }

      &--follow {
        width: 160px;
      }

      &:nth-last-of-type  {
        margin-bottom: 0;
      }
    }
  }
}

@include mq($from: tablet) {
  #{$c} {
    display: flex;
    justify-content: center;

    #{$c}__wrapper {
      margin-bottom: 0;
      width: initial;
    }
  }
}
</style>
