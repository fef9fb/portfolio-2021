<template>
  <div>
    <h1 v-if="title" v-scroll="changeColor" id="h1-title" class="display-2 font-weight-bold color-first">
      {{ title }}
    </h1>
    <div id="first-section" class="container-wrapper bg-4 pt-16">
      <v-container class="pt-16">
        <v-row class="text-center">
          <v-col
              cols="12"
              class="mb-5"
          >
            <h2 class="mb-2">スキルセット</h2>
            <div class="col-main">
              <h3 class="mb-1">実務経験3年以上</h3>
              <p>
                PHP, Laravel, JavaScript, Vue.js,<br>
                MySQL, Git
              </p>
              <h3 class="mb-1">実務経験1年以上</h3>
              <p>
                C, HTML, CSS, Sass, jQuery,<br>
                WebPack, PostgreSQL, Linux(Redhat)
              </p>
              <h3 class="mb-1">ビギナー</h3>
              <p>
                Java, Python, Swift, GAS,<br>
                AWS, Linux(Debian)
              </p>
            </div>
          </v-col>

        </v-row>
      </v-container>
    </div>
    <div id="second-section" class="container-wrapper bg-5 pt-16">
      <v-container class="pt-16">
        <v-row class="text-center">
          <v-col
              cols="12"
              class="mb-5"
          >
            <h2 class="mb-2">大学</h2>
            <div class="col-main">
              <h3 class="mb-1">1年</h3>
              <p>
                特に目標もなく、バイト先の出版社に就職しようと思っていた。一般教養で必修だった情報学基礎を履修。
              </p>
              <h3 class="mb-1">2年</h3>
              <p>
                iPhoneが欲しかったけどお金がなくWILLCOMユーザだったので中古で購入。<br>
                アクティベートしないと使用できないことを知り、解除するために脱獄に挑戦。<br>
                脱獄成功後、UIのカスタマイズにハマってアプリを作ることに興味を持つ。<br>
                プログラマという仕事に着きたいと考えて1年の頃に履修した情報学基礎の先生の授業をすべて受ける。<br>
                先生と仲良くなって勉強のアドバイスをもらうようになった。
              </p>
              <h3 class="mb-1">3年</h3>
              <p>
                自分の学部のゼミを諦めて情報学の先生のゼミを受ける。<br>
                プログラマ一本に絞って就活をして落ち続ける。1社から内定をもらってそこへ就職希望を出す。<br>
                基本情報に落ちる。
              </p>
              <h3 class="mb-1">4年</h3>
              <p>
                内定後、就職先にバイトとして勤務。<br>
                基本情報2回目受験して落ちる。
              </p>
            </div>
          </v-col>

        </v-row>
      </v-container>
    </div>
    <div class="container-wrapper bg-6 pt-16">
      <v-container class="pt-16">
        <v-row class="text-center">
          <v-col
              cols="12"
              class="mb-5"
          >
          <h2 class="mb-2">社会人</h2>
          <div class="col-main">
            <h3 class="mb-1">1〜2年目</h3>
            <p>
              3ヶ月の研修後、SESで社外へ。<br>
              3次請けの中小企業でデータ集計用プログラムの作成に携わる。開発言語はC。<br>
              とりあえずなんでもやってやる精神で、現場の誰もやりたがらなかったプログラムを1から書かせてもらった。<br>
              現場の誰もPHPを書いたことがなく、宙ぶらりんだったPHPのプログラムの保守開発もやらせてもらい、はじめてPHPに触れる。<br>
              バージョン管理ツールは使っておらず、ファイル名に日付を書いて量産するタイプの管理方法で疲労。<br>
              2年の間ほぼ毎日終電まで勤務。
            </p>
            <h3 class="mb-1">3年目</h3>
            <p>
              2年契約が終了し、次の案件に希望が出せるようになる。<br>
              もう少しフロントっぽいことがやりたいと思い、再び社外へ。<br>
              Wordpressを使った人材系の会社のWebサイトリニューアル案件に携わる。<br>
              生まれてはじめてGitHubを業務で使用して感動する。<br>
              今まで知らなかったことが多すぎて目からウロコ半分、毎日のように叱られていた。
            </p>
            <h3 class="mb-1">4〜5年目</h3>
            <p>
              社内に戻り、Laravelを使ったWebアプリケーションの開発案件にいくつかまたがって携わる。<br>
              一番大きな案件が落ち着いたところで、フロントエンドエンジニアに憧れ、会社とは方向性が違ったため転職。
            </p>
            <h3 class="mb-1">6年目〜現在</h3>
            <p>
              フロントエンドエンジニアとして転職。自社のメディアサイトやLPの開発に携わる。<br>
              HTMLやCSSについての業務経験が詰めたが、もう少しJavascriptをやりたかった自分と現場の方向性が合わず転職を決意。
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
  name: 'Background',
  props: ['title'],
}
</script>
<style scoped lang="scss">
@use '../sass/main' as main;

h1.color-first {
  color: main.$title_color4;
  transition: color 0.2s ease-out;
}

h1.color-second {
  color: main.$title_color5;
  transition: color 0.2s ease-out;
}

h1.color-third {
  color: main.$title_color6;
  transition: color 0.2s ease-out;
}

</style>
