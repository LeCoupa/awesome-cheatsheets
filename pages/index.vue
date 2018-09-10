<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-index
  a(
    class="c-index__link"
    href="https://github.com/LeCoupa/awesome-cheatsheets"
    target="_blank"
  )
    img(
      :src="baseUrl + '/images/common/logo.png'"
      :srcset="baseUrl + '/images/common/logo@2x.png'"
      class="c-index__logo"
    )

  p.c-index__description
    | Awesome cheatsheets for popular programming languages, frameworks and development tools.<br/>
    | They include everything you should know in one single file. 👩‍💻👨‍💻

  the-github-buttons(
    repo="awesome-cheatsheets"
    user="LeCoupa"
    class="c-index__github-buttons"
  )
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
        :link="cheatsheet.link"
        :name="cheatsheet.name"
        :thumbnail="cheatsheet.thumbnail"
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import TheGithubButtons from "@/components/TheGithubButtons";

export default {
  components: {
    TheGithubButtons
  },

  data() {
    return {
      // --> STATE <--
      baseUrl: process.env.baseUrl,

      // --> COMPONENTS <--
      categories: [
        {
          name: "Languages",
          cheatsheets: [
            {
              name: "Bash",
              thumbnail: "bash.jpg",
              link:
                "https://github.com/LeCoupa/awesome-cheatsheets/blob/master/languages/bash.sh"
            },
            {
              name: "C",
              thumbnail: "c.jpg",
              link:
                "https://github.com/LeCoupa/awesome-cheatsheets/blob/master/languages/C.txt"
            },
            {
              name: "C#",
              thumbnail: "c-sharp.jpg",
              link:
                "https://github.com/LeCoupa/awesome-cheatsheets/blob/master/languages/C%23.txt"
            },
            {
              name: "JavaScript",
              thumbnail: "javascript.jpg",
              link:
                "https://github.com/LeCoupa/awesome-cheatsheets/blob/master/languages/javascript.js"
            },
            {
              name: "PHP",
              thumbnail: "php.jpg",
              link:
                "https://github.com/LeCoupa/awesome-cheatsheets/blob/master/languages/php.php"
            }
          ]
        },
        {
          name: "Backend",
          cheatsheets: [
            {
              name: "Django",
              thumbnail: "django.jpg",
              link:
                "https://github.com/LeCoupa/awesome-cheatsheets/blob/master/backend/django.py"
            },
            {
              name: "Feathers.js",
              thumbnail: "feathers.jpg",
              link:
                "https://github.com/LeCoupa/awesome-cheatsheets/blob/master/backend/feathers.js"
            },
            {
              name: "Moleculer",
              thumbnail: "moleculer.jpg",
              link:
                "https://github.com/LeCoupa/awesome-cheatsheets/blob/master/backend/moleculer.js"
            },
            {
              name: "Node.js",
              thumbnail: "node.jpg",
              link:
                "https://github.com/LeCoupa/awesome-cheatsheets/blob/master/backend/node.js"
            },
            {
              name: "Sails.js",
              thumbnail: "sails.jpg",
              link:
                "https://github.com/LeCoupa/awesome-cheatsheets/blob/master/backend/sails.js"
            }
          ]
        },
        {
          name: "Frontend",
          cheatsheets: [
            {
              name: "Angular.js",
              thumbnail: "angularjs.jpg",
              link:
                "https://github.com/LeCoupa/awesome-cheatsheets/blob/master/frontend/angularjs.js"
            },
            {
              name: "Angular 2+",
              thumbnail: "angular.jpg",
              link:
                "https://github.com/LeCoupa/awesome-cheatsheets/blob/master/frontend/angular.js"
            },
            {
              name: "Ember.js",
              thumbnail: "ember.jpg",
              link:
                "https://github.com/LeCoupa/awesome-cheatsheets/blob/master/frontend/ember.js"
            },
            {
              name: "HTML5",
              thumbnail: "html5.jpg",
              link:
                "https://github.com/LeCoupa/awesome-cheatsheets/blob/master/frontend/html5.html"
            },
            {
              name: "React.js",
              thumbnail: "react.jpg",
              link:
                "https://github.com/LeCoupa/awesome-cheatsheets/blob/master/frontend/react.js"
            },
            {
              name: "Vue.js",
              thumbnail: "vue.jpg",
              link:
                "https://github.com/LeCoupa/awesome-cheatsheets/blob/master/frontend/vue.js"
            }
          ]
        },
        {
          name: "Databases",
          cheatsheets: [
            {
              name: "Redis",
              thumbnail: "redis.jpg",
              link:
                "https://github.com/LeCoupa/awesome-cheatsheets/blob/master/databases/redis.sh"
            }
          ]
        },
        {
          name: "Tools",
          cheatsheets: [
            {
              name: "Docker",
              thumbnail: "docker.jpg",
              link:
                "https://github.com/LeCoupa/awesome-cheatsheets/blob/master/tools/docker.sh"
            },
            {
              name: "Kubernetes",
              thumbnail: "kubernetes.jpg",
              link:
                "https://github.com/LeCoupa/awesome-cheatsheets/blob/master/tools/kubernetes.sh"
            },
            {
              name: "VIM",
              thumbnail: "vim.jpg",
              link:
                "https://github.com/LeCoupa/awesome-cheatsheets/blob/master/tools/vim.txt"
            },
            {
              name: "Xcode",
              thumbnail: "xcode.jpg",
              link:
                "https://github.com/LeCoupa/awesome-cheatsheets/blob/master/tools/xcode.txt"
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
    margin: 30px 0;
    font-size: 18px;
    line-height: 32px;
  }

  #{$c}__github-buttons {
    margin-bottom: 40px;
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

@include mq($from: tablet) {
  #{$c} {
    #{$c}__description {
      font-size: 22px;
    }

    #{$c}__github-buttons {
      margin-bottom: 60px;
    }
  }
}
</style>
