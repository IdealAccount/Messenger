<template>
  <div class="chat-body">
    <div class="to-bottom"
         ref="arrow"
         @click="scrollToBottom"
    ></div>
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
        scrollBlock: {},
      }
    },
    mounted() {
      this.scrollBlock = this.$refs.track;
      this.scrollBlock.addEventListener('scroll', this.showArrow);
      this.scrollToBottom()
    },
    updated() {
      this.scrollToBottom();
      this.showArrow();
    },
    methods: {
      scrollToBottom() {
        // this.$refs.track.scrollTop = this.$refs.track.children[0].scrollHeight
        this.scrollBlock.scrollTop = this.scrollBlock.children[0].scrollHeight
      },
      showArrow() {
        // let parent = this.$refs.track;
        let toBottom = this.$refs.arrow;
        let msgListHeight = this.scrollBlock.children[0].scrollHeight;
        let scrollTop = this.scrollBlock.scrollTop;
        let height = msgListHeight - this.scrollBlock.clientHeight;

        if (msgListHeight > 1200) {
          if (scrollTop < height) {
            toBottom.classList.add('show');
          } else toBottom.classList.remove('show');
        } else toBottom.classList.remove('show');
      }
    },
    beforeDestroy() {
      this.scrollBlock.removeEventListener('scroll', this.showArrow);
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
      width: calc(100% + 16px);
      padding: 23px 18px 43px 39px;
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
    transform: translate(-50%, -50%);
    &.active {
      display: block;
    }
  }

  .to-bottom {
    display: none;
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, .3);
    &:after {
      content: '';
      position: absolute;
      top: 58%;
      left: 45%;
      width: 10px;
      height: 10px;
      border: solid #000;
      border-width: 0 1px 1px 0;
      transform: rotate(45deg) translate(-88%, -50%);
    }
    &.show {
      display: block;
    }
  }
</style>
