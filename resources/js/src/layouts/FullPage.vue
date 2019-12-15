<!-- =========================================================================================
  File Name: FullPage.vue
  Description: Full page layout
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="layout--full-page">
    <slot/>
  </div>
</template>

<script>

  export default {
      created(){
          this.toggleClassInBody(this.$store.state.theme);
      },
      watch: {
          '$store.state.theme'(val) {
              this.toggleClassInBody(val);
          }
      },
      methods: {
          toggleClassInBody(className){
              if (className == 'dark') {
                  if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
                  document.body.classList.add('theme-dark');
              } else if (className == 'semi-dark') {
                  if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
                  document.body.classList.add('theme-semi-dark');
              } else {
                  if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
                  if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
              }
          }
      }
  }

</script>