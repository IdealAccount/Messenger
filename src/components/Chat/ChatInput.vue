<template>
  <div class="chat-input">
    <form class="chat-input__group">
      <div class="chat-input__edit">
        <textarea v-model="message"
                  placeholder="Введите текст..."
                  :disabled="isLocking"
                  @keyup.prevent="sendMessage"
        ></textarea>
      </div>
      <button :class="['chat-input__submit', {active: isLocking}]"
              type="submit"
              @click.prevent="sendMessage"
              @mouseover="active = true"
              @mouseleave="active = false"
              :disabled="isLocking"
      >
        <span class="submit-title"
              ref="title"
              v-show="active"
        >
          Чтобы получить входящее сообщение
          зажмите CTRL
        </span>
      </button>
    </form>
    <div class="loader-container" v-if="isLocking">
      <div class="bubbles">
        <div class="bubble" v-for="n in 4">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState,mapActions} from 'vuex'

  export default {
    data() {
      return {
        message: '',
        active: false,
        isLocking: false
      }
    },
    mounted() {
      // window.onkeydown = (e) => console.log(e)
    },
    computed: {
      ...mapState(['DIALOGS']),
      thatDialog() {
        for (let item of this.DIALOGS) {
          if (item.id === parseInt(this.$route.params.id)) return item
        }
      },
      getDate() {
        return this.getFullDate();
      },
      // authorName() {
      //   for (let message of this.thatDialog.messages) {
      //     if (!message.out) return message.author
      //   }
      // }
    },
    methods: {
      ...mapActions(['SEND_MESSAGE']),

      sendMessage(event) {
        if ((event.keyCode === 13 && !event.shiftKey) || event.type === 'click') {
          if (this.message.trim() === '') return;

          let sender = this.getSender(event);
          this.locking();
          // отправитель

          let msgParams = {
            id: this.$route.params.id,
            created: this.getDate.date,
            message: {
              id: this.thatDialog.messages.length + 1,
              author: sender.author,
              out: sender.out,
              text: this.message,
              created: this.getDate.fullDate
            }
          };
          this.SEND_MESSAGE(msgParams);
          this.message = '';
          setTimeout(() => this.autoScroll(), 400)
        }
      },
      locking() {
        this.isLocking = true;
        // отменить все модификации через 1сек
        setTimeout(() => this.isLocking = false, 400);

      },
      getSender(event) {
        let sender;
        this.thatDialog.messages.forEach(message => {
          if (event.ctrlKey) {
            if (!message.out) {
              this.author = message.author;
              return sender = {
                author: message.author,
                out: message.out
              }
            }
          }
          else {
            if (message.out) {
              return sender = {
                author: message.author,
                out: message.out
              }
            }
          }
        });
        return sender;
      },
      getFullDate() {
        let date = new Date();
        let months = ["янв", "фев", "мар", "апр",
          "мая", "июн", "июл", "авг",
          "сен", "окт", "ноя", "дек"];

        let dd = date.getDate();
        if (dd < 10) dd = `0${dd}`;

        let mm = date.getMonth() + 1;
        if (mm < 10) mm = `0${mm}`;

        let yy = date.getFullYear();

        let hh = date.getHours();
        if (hh < 10) hh = `0${hh}`;

        let min = date.getMinutes();
        if (min < 10) min = `0${min}`;

        return {
          fullDate: `${dd}-${mm}-${yy} ${hh}:${min}`,
          date: `${dd} ${months[mm - 1]} ${yy}`
        }
      },
      autoScroll() {
        let msgList = document.querySelector('.msg-list');
        let scrollTrack = document.querySelector('.chat-wrapper');

        scrollTrack.scrollTop = msgList.scrollHeight;
      },
    },

  }
</script>

<style lang="scss">
  .chat-input {
    position: relative;
    margin-top: auto;
    &__group {
      display: flex;
      border-top: 1px solid #e9edf2;
    }
    &__edit {
      width: 100%;
      padding: 29px 0 16px;
      textarea {
        border: none;
        padding-left: 30px;
        padding-right: 80px;
        width: 100%;
        max-height: 200px;
        resize: none;
        word-wrap: break-word;
        &::placeholder {
          font-family: TT Norms, sans-serif;
          font-size: 14px;
        }
        &:disabled {
          background: none;
        }
      }
    }
    &__submit {
      position: absolute;
      top: 0;
      right: 0;
      width: 80px;
      height: 100%;
      background: url('../../../static/img/send.svg') no-repeat center, #398bff;
      border: none;
      outline: none;
      transition: .3s;
      &:hover {
        background-color: #0557CB;
      }
      &.active {
        background-color: rgb(130,130,130);
      }
      .submit-title {
        position: absolute;
        transition: .3s ease-in-out;
        width: 150px;
        padding: 20px 10px;
        font-size: 12px;
        background: #333;
        border-radius: 6px;
        color: #fff;
        top: calc(100% + 20px);
        left: calc(-50% + 5px);
        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -100%);
          display: inline-block;
          border: 10px solid;
          border-color: transparent transparent #333 transparent;
        }
      }
    }
  }

</style>
