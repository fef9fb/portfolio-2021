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
      <h1 class="display-2 font-weight-bold">
        人物
      </h1>
      <Person/>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Person from './components/Person';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    Person,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped lang="scss">

h1 {
  position: fixed;
  width: 1200px;
  top: 64px;
  left: 50%;
  transform: translateX(-50%);
}

.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: rgba(255, 255, 255, 0);
}

.v-main {
  padding: 0 !important;
}
</style>
