<template>
  <ul class="msg-list">
    <li :class="['msg-list__item', msgClass = (message.out ? 'msg-list__item--out' : 'msg-list__item--in')]" v-for="message of chatMessages">
      <div class="msg"
      >{{message.text}}</div>
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
        msgClass: {

        },
      }
    },
    computed: {
      ...mapState(['dialogs']),
      chatMessages() {
        for (let item of this.dialogs) {
          if (item.id === parseInt(this.$route.params.id)) return item.messages
        }
      }
    },
    mounted() {
      console.log(this.chatMessages)
    }
  }
</script>
<style lang="scss">

  .msg-list {
    display: flex;
    flex-direction: column;
    &__item {
      display: flex;
      flex-direction: column;
      max-width: 380px;
      margin-bottom: 20px;
      &--out {
        align-self: flex-end;
        .msg {
          background: #e9f5f4;
          &-info {
            margin-left: auto;
          }
        }
      }
      &--in {
        align-self: flex-start;
        .msg {
          background: #f6f7f9;
        }
      }
    }
  }
  .msg {
    padding: 18px 17px 16px 26px;
    border-radius: 8px;
    margin-bottom: 10px;
    color: #475453;
    font-size: 14px;
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
</style>
