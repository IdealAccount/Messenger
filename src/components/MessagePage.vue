<template>
  <div class="msg-viewer">
    <dialogs-sidebar></dialogs-sidebar>
    <chat-viewport></chat-viewport>
  </div>
</template>

<script>
  import DialogsSidebar from './Dialogs/DialogsSidebar'
  import ChatViewport from './Chat/ChatViewport'
  export default {
    components: {
      DialogsSidebar,
      ChatViewport
    }
  }
</script>
<style lang="scss">
  .msg-viewer {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    max-height: 720px;
  }
</style>
