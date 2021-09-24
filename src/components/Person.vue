<template>
  <div>
    <div class="container-wrapper bg-1 pt-16">
      <v-container class="pt-16">
        <v-row class="text-center">

          <v-col cols="12">
            <h2 class="mb-3">
              プロフィール
            </h2>
            <div class="col-main">
              名前
            </div>

          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="container-wrapper bg-2 pt-16">
      <v-container>
      </v-container>
    </div>
    <div class="container-wrapper bg-3 pt-16">
      <v-container>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Person',

  data: () => ({}),
}
</script>
<style scoped lang="scss">
@use '../sass/main' as main;


</style>
