<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-index
  img(
    src="/images/common/logo.png"
    srcset="/images/common/logo@2x.png"
    class="c-index__logo"
  )
  p.c-index__description
    | Awesome cheatsheets for popular programming languages, frameworks and development tools.<br/>
    | They include everything you should know in one single file. 👩‍💻👨‍💻

  section(
    v-for="(category, index) in categories"
    :key="category.name"
    class="c-index__category"
  )
    base-divider(
      :category="'0' + (index + 1) + '. ' + category.name"
      class="c-index__divider"
    )
    .c-index__cheatsheets
      base-cheatsheet(
        v-for="cheatsheet in category.cheatsheets"
        :key="cheatsheet.name"
        :name="cheatsheet.name"
        :thumbnail="cheatsheet.thumbnail"
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
import BaseCheatsheet from "@/components/BaseCheatsheet";
import BaseDivider from "@/components/BaseDivider";

export default {
  components: {
    BaseCheatsheet,
    BaseDivider
  },

  data() {
    return {
      // --> COMPONENTS <--
      categories: [
        {
          name: "Languages",
          cheatsheets: [
            {
              name: "Bash",
              thumbnail: "bash.jpg"
            },
            {
              name: "JavaScript",
              thumbnail: "javascript.jpg"
            },
            {
              name: "PHP",
              thumbnail: "php.jpg"
            }
          ]
        },
        {
          name: "Backend",
          cheatsheets: [
            {
              name: "Django",
              thumbnail: "django.jpg"
            },
            {
              name: "Feathers.js",
              thumbnail: "feathers.jpg"
            },
            {
              name: "Moleculer",
              thumbnail: "moleculer.jpg"
            },
            {
              name: "Node.js",
              thumbnail: "node.jpg"
            }
          ]
        },
        {
          name: "Frontend",
          cheatsheets: [
            {
              name: "Angular.js",
              thumbnail: "angularjs.jpg"
            },
            {
              name: "HTML5",
              thumbnail: "html5.jpg"
            },
            {
              name: "React.js",
              thumbnail: "react.jpg"
            },
            {
              name: "Vue.js",
              thumbnail: "vue.jpg"
            }
          ]
        },
        {
          name: "Databases",
          cheatsheets: [
            {
              name: "Redis",
              thumbnail: "redis.jpg"
            }
          ]
        },
        {
          name: "Tools",
          cheatsheets: [
            {
              name: "Docker",
              thumbnail: "docker.jpg"
            },
            {
              name: "Kubernetes",
              thumbnail: "kubernetes.jpg"
            },
            {
              name: "VIM",
              thumbnail: "vim.jpg"
            },
            {
              name: "Xcode",
              thumbnail: "xcode.jpg"
            }
          ]
        }
      ]
    };
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-index";

#{$c} {
  #{$c}__logo {
    width: 245px;
    height: 165px;
    user-select: none;
  }

  #{$c}__description {
    margin: 0;
    margin: 30px 0 40px;
    font-size: 24px;
    line-height: 36px;
  }

  #{$c}__category {
    margin-bottom: 40px;

    &:last-of-type {
      margin-bottom: 0;
    }

    #{$c}__divider {
      margin-bottom: 40px;
    }

    #{$c}__cheatsheets {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fill, 270px);
      justify-content: center;
    }
  }
}
</style>
