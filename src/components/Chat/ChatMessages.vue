<template>
  <ul class="msg-list">
    <li v-for="message of chatMessages"
        :key="message.id"
        :class="['msg-list__item',
        message.out ?
        'msg-list__item--out' :
        'msg-list__item--in']"
    >
      <span class="msg">{{message.text}}</span>
      <div class="msg-info">
        <span class="msg-info__author">
          <strong>{{message.author}}</strong>
        </span>
        <span class="msg-info__date">{{message.created}}</span>
      </div>
    </li>
  </ul>
</template>
<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapState(['DIALOGS']),
      chatMessages() {
        for (let item of this.DIALOGS) {
          if (item.id === parseInt(this.$route.params.id)) return item.messages
        }
      },
    },
  }
</script>
<style lang="scss">

  .msg-list {
    margin-top: auto;
    padding: 0;
    &__item {
      display: flex;
      flex-direction: column;
      max-width: 380px;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      &--out {
        margin-left: auto;
        .msg {
          align-self: flex-end;
          margin-left: auto;
          background: #e9f5f4;
          &-info {
            text-align: right;
          }
        }
      }
      &--in {
        .msg {
          margin-right: auto;
          background: #f6f7f9;
        }
      }
    }
  }

  .msg {
    padding: 22px 22px 16px;
    border-radius: 8px;
    margin-bottom: 10px;
    color: #475453;
    font-size: 14px;
    word-break: break-word;
    &-info {
      &__author {
        color: #000;
        margin-right: 10px;
        font-size: 13px;
      }
      &__date {
        font-size: 10px;
        color: #b7c0c8;
      }
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
