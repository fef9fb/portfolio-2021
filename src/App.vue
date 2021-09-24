<template>
  <v-app>
    <v-app-bar
        app
        flat
    >
      <v-toolbar-title>Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
          href="#"
          text
      >
        人物
      </v-btn>

      <v-btn
          href="#"
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
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped lang="scss">

.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: rgba(255, 255, 255, 0);
}
</style>
