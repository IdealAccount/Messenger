<template>
  <div class="chat-input">
    <form class="chat-input__group">
      <div class="chat-input__edit">
        <textarea v-model="message"
                  placeholder="Введите текст..."
                  ref="input"
        ></textarea>
      </div>
      <button class="chat-input__submit"
              type="submit"
              @click.prevent="sendMessage"
              ref="submit"
      ></button>
    </form>
    <div class="loader-container" ref="loader">
      <div class="bubbles">
        <div class="bubble" v-for="n of 4">
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
      }
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
    },
    methods: {
      ...mapActions(['SEND_MESSAGE']),
      sendMessage(event) {
        if (this.message === '') return;

        this.inSending();
        // отправитель
        let sender;
        this.thatDialog.messages.forEach(message => {
          if (event.ctrlKey) {
            if (!message.out) {
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
        setTimeout(() => this.autoScroll(), 1000)
      },
      inSending() {
        // Показать прелоадер
        let loader = this.$refs.loader;
        loader.classList.add('active');

        // Блокируем ввод
        let input = this.$refs.input;
        input.disabled = true;
        // Блокировать отправку
        let btn = this.$refs.submit;
        btn.disabled = true;
        btn.style.backgroundColor = '#828282';
        // отменить все модификации через 1сек
        setTimeout(() => {
          input.disabled = false;
          btn.disabled = false;
          btn.style.background = '';
          loader.classList.remove('active');
        }, 1000);
      },
      autoScroll() {
        let msgList = document.querySelector('.msg-list');
        let track = document.querySelector('.chat-wrapper');

        track.scrollTop = msgList.scrollHeight;
        console.log(msgList.scrollHeight)
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
        display: flex;
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
    }
  }

</style>
