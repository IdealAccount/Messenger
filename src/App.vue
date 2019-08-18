<template>
  <div id="app">
    <message-page></message-page>
  </div>
</template>

<script>
  import MessagePage from './components/MessagePage';
export default {
  components: {
    MessagePage
  }
}
</script>

<style lang="scss">
  @import 'assets/scss/main';
  body {
    font-family: 'TT Norms', sans-serif;
    background: #e5e5e5;
  }
</style>
