<script>
export default {
  methods: {
    scrollNext: function () {
      const firstSectionEnd = document.getElementById('first-section').clientHeight;
      const secondSection = document.getElementById('second-section');
      const secondSectionEnd = firstSectionEnd + secondSection.clientHeight;
      let rect = 0;
      let offset = 0;

      if (window.scrollY < firstSectionEnd) {
        rect = secondSection.getBoundingClientRect().top;
        offset = window.pageYOffset;
      }

      if (window.scrollY >= firstSectionEnd && window.scrollY < secondSectionEnd) {
        const thirdSection = document.getElementById('third-section');
        rect = thirdSection.getBoundingClientRect().top;
        offset = window.pageYOffset;
      }

      const target = rect + offset;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });

    }
  }
}
</script>
