<template>
  <div class="chat-input">
    <form class="chat-input__group">
      <div class="chat-input__edit">
        <textarea v-model="message"
                  rows="1"
                  placeholder="Введите текст..."
        ></textarea>
      </div>
      <button @click.prevent class="chat-input__submit"></button>
    </form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: '',
      }
    }
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
      padding: 29px 0;
      textarea {
        display: flex;
        border: none;
        padding-left: 30px;
        width: 100%;
        min-height: 20px;
        max-height: 200px;
        resize: none;
        word-wrap: break-word;
      }
    }
    &__submit {
      position: absolute;
      top: 0;
      right: 0;
      width: 80px;
      height: 79px;
      background: url('../../../static/img/send.svg') no-repeat center, #398bff;
      border: none;
      outline: none;
    }
  }

</style>
