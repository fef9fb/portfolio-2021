<template>
  <div>
    <h1 v-if="title" class="display-2 font-weight-bold">
      {{ title }}
    </h1>
    <div class="container-wrapper bg-2 pt-16">
      <v-container>
        <v-row class="text-center">

          <v-col
              cols="12"
              class="mb-5"
          >
            <h2 class="mb-3">
              好きなことなど
            </h2>
            <div class="col-main">
              <h3 class="mb-2">漫画、アニメ</h3>
              <p>
                好きなものだけを何回も見たり読んだりするタイプで周りの話にはついていけない。<br>
                何回見ても読んでもキャラの名前は忘れる。
              </p>

              <h4 class="mb-1">ハンターハンター</h4>
              <p>
                旧アニメ4周、新アニメヨークシン以降1周、コミック2周程度。<br>
                何編が好きかいつも聞かれるけど選べない。強いて言うならGI編。ビノールト戦が好き。<br>
                キャラ誰が好きかいつも聞かれるけど選べない。強いて言うならイカルゴ。背中を預け合える仲間が欲しかったという台詞に共感の嵐。
              </p>

              <h4 class="mb-1">キングダム</h4>
              <p>
                アニメ4周、コミックかいつまんで2周。いつも同じところで泣く。<br>
                英雄に憧れる蒙驁将軍の気持ちがわかりすぎて好き。
              </p>

              <h4 class="mb-1">ワールドトリガー</h4>
              <p>
                アニメ1.5周とコミック読みかけ。私は絶対にアタッカーがいい。
              </p>

              <h4 class="mb-1">Dr.STONE</h4>
              <p>
                アニメ3周、コミック2周。<br>
                ド文系でわからなすぎるけど、ちゃんと科学しながら少年漫画をやっていてすき。一生懸命な人を見ると泣ける。
              </p>

              <h3 class="mb-2">パフェ</h3>
              <p>いつのまにかフォルダがパフェの写真だらけになっている。</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="container-wrapper bg-3 pt-16">
      <v-container>
        <v-row class="text-center">

          <v-col
              cols="12"
              class="mb-5"
          >
            <h2 class="mb-3">
              性格など
            </h2>
            <div class="col-main">
              <h3 class="mb-2">長所</h3>
              <p>
                できないことや知らないことをできるようになるまで<br>
                調べたり試したりして試行錯誤して、自分なりにできるようになれること。<br>
                片付けや料理にはじまりプログラミングなど、できない事ややったことないことは<br>
                自分が掴み取れるようになるまで調べる、聞く、やってみる。<br>
                ただ、できている人には当然にできていることなので威張れることではない、、。
              </p>

              <h3 class="mb-2">短所</h3>
              <p>
                めんどくさがり、コツコツした努力ができない。飽きっぽい。<br>
                楽しくてのってるとき、のめりこんでるときはできるけれどコツコツと続けられない。<br>
                成果がみえないと飽きがち。。
              </p>

              <h3>課題</h3>
              <p>
                長所を生かして短所を直そうと試行錯誤中。<br>
                やったほうがいいのに言い訳してきてやらなかった努力などをできるように<br>
                コツコツ積み重ねていける工夫や、飽きない工夫を模索中、、。
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
  name: 'Person',
  props: ['title'],
  data: () => ({}),
}
</script>
<style scoped lang="scss">
@use '../sass/main' as main;
</style>
