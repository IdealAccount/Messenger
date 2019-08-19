<template>
  <div class="chat-body">
    <div class="viewport-loader">
      <div class="viewport-inner viewport-one"></div>
      <div class="viewport-inner viewport-two"></div>
      <div class="viewport-inner viewport-two"></div>
    </div>
    <div class="chat-wrapper" ref="track">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
  import ChatMessages from './ChatMessages'

  export default {
    components: {
      ChatMessages
    },
    data() {
      return {
        isLoad: false
      }
    },
    mounted() {
      this.isLoad = true;
      this.scrollToBottom()
    },
    updated() {
      this.scrollToBottom()
    },
    methods: {
      scrollToBottom() {
        this.$refs.track.scrollTop = this.$refs.track.children[0].scrollHeight
      }
    }
  }
</script>
<style lang="scss">
  .chat {
    &-body {
      position: relative;
      height: 100%;
      overflow: hidden;
      padding-top: 20px;
    }
    &-wrapper {
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      overflow-x: hidden;
      width: calc(100% + 32px);
      padding: 23px 40px 43px 39px;
      max-height: 660px;
      height: 100%;
    }
  }

  // ANIMATION
  .fade-enter-active, .fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .fade-leave, .fade-enter-to {
    opacity: 1;
  }

  .viewport-loader {
    display: none;
    top: 50%;
    left: 50%;
    z-index: 20;
    transform: translate(-50%,-50%);
    &.active {
      display: block;
    }
  }
</style>
