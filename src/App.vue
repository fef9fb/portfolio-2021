<template>
  <v-app>
    <v-app-bar
        app
        flat
    >
      <v-toolbar-title>
        <a href="/">
          Portfolio
        </a>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
          href="/person"
          text
      >
        人物
      </v-btn>

      <v-btn
          href="/background"
          text
      >
        経歴
      </v-btn>

      <v-btn
          href="#"
          text
      >
        Blog
      </v-btn>

      <v-btn
          href="#"
          text
      >
        Github
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  props: [ 'title' ],

  data: () => ({
  }),

  created() {
    console.log(this.$route)
  }

};
</script>

<style scoped lang="scss">

.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: rgba(255, 255, 255, 0);
}

.v-main {
  padding: 0 !important;
}
</style>
