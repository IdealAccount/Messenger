<template>
  <div class="chat-viewport">
    <chat-body></chat-body>
    <chat-input></chat-input>
  </div>
</template>

<script>
  import ChatInput from './ChatInput'
  import ChatBody from './ChatBody'
  export default {
    components: {
      ChatInput,
      ChatBody
    }
  }

</script>

<style lang="scss">
  .chat-viewport {
    display: flex;
    flex-direction: column;
    max-width: 680px;
    width: 100%;
    background: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, .1);
    z-index: 10;
  }

</style>
