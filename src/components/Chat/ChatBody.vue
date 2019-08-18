<template>
  <div class="chat-body">
    <div class="chat-track">
      <!--<chat-messages></chat-messages>-->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import ChatMessages from './ChatMessages'
  export default {
    components: {
      ChatMessages
    }
  }
</script>
<style lang="scss">
  .chat-body {
    padding: 43px 16px 43px 39px;
    height: 100%;
    overflow: hidden;
  }
  .chat-track {
    height: auto;
    min-height: 100%;
  }
</style>
