<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-base-cheatsheet
  a(
    :href="link"
    class="c-base-cheatsheet__link"
    target="_blank"
  )
    img(
      :src="baseUrl + '/images/components/BaseCheatsheet/' + thumbnail"
      class="c-base-cheatsheet__thumbnail"
    )

  .c-base-cheatsheet__content
    a(
      :href="link"
      class="c-base-cheatsheet__name"
      target="_blank"
    ) The {{ name }} Cheatsheet

    .c-base-cheatsheet__share
      base-share(
        v-for="network in networks"
        :key="network"
        :network="network"
        class="c-base-cheatsheet__network"
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      // --> STATE <--
      baseUrl: process.env.baseUrl,

      // --> COMPONENTS <--
      networks: ["Slack", "Messenger", "Telegram", "Twitter", "LinkedIn"]
    };
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-base-cheatsheet";

#{$c} {
  display: block;
  padding: 10px;
  border: 1px solid $oxford-blue;
  border-radius: 6px;
  background: $ebony-clay;

  #{$c}__link {
    #{$c}__thumbnail {
      width: 100%;
      height: 160px;
      border-radius: 4px;
      user-select: none;
    }
  }

  #{$c}__content {
    padding: 10px;
    text-align: left;

    #{$c}__name {
      margin-bottom: 20px;
      color: $white;
      font-size: 18px;
    }

    #{$c}__share {
      margin-top: 12px;
      display: flex;
      user-select: none;

      #{$c}__network {
        margin-right: 6px;

        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
