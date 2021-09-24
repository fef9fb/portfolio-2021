<template>
  <div>
    <div class="container-wrapper bg-1 pt-16">
      <v-container class="pt-16">
        <v-row class="text-center">
          <v-col
              cols="12"
              class="mb-5"
          >
            <h2 class="mb-3">
              プロフィール
            </h2>
            <div class="col-main">
              <v-avatar
                  size="128"
                  class="mb-3"
              >
                <v-img
                    :src="require('../assets/IMG_6402.jpg')"
                    alt="fef9fb"
                />
              </v-avatar>
              <p>
                @fef9fb<br>
                神奈川県藤沢市出身<br>
                国際学部卒<br>
                バックエンドエンジニア5年<br>
                フロントエンドエンジニア1.5年<br>
                お酒が飲めないエンジニアのポートフォリオです。
              </p>
            </div>
          </v-col>

        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
<style scoped lang="scss">
@use '../sass/main' as main;
</style>
