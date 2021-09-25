<script>
export default {
  methods: {
    changeColor: function () {
      const h1Title = document.getElementById('h1-title');
      const h1TitlePosition = window.scrollY + 110;
      const firstSectionEnd = document.getElementById('first-section').clientHeight;
      const secondSectionEnd = firstSectionEnd + document.getElementById('second-section').clientHeight;

      if(h1TitlePosition <= firstSectionEnd) {
        h1Title.classList.remove('color-second');
        h1Title.classList.add('color-first');
      }

      if (h1TitlePosition > firstSectionEnd && h1TitlePosition <= secondSectionEnd) {
        h1Title.classList.remove('color-first');
        h1Title.classList.remove('color-third');
        h1Title.classList.add('color-second');
      }

      if (h1TitlePosition > secondSectionEnd) {
        h1Title.classList.remove('color-second');
        h1Title.classList.add('color-third');
      }

    }
  }
}
</script>
