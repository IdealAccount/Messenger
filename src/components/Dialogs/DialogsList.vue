<template>
  <div class="dialogs-wrapper">
    <ul class="dialogs" @click="goTo">
      <router-link tag="li"
                   v-for="(dialog) of DIALOGS_REVERSE"
                   class="dialog-frame"
                   :key="dialog.id"
                   :to="{name: 'dialog', params: {id: dialog.id}}"
      >
        <div class="dialog-frame__subj">
          <strong>{{dialog.subject}}</strong>
        </div>
        <p class="dialog-frame__text">{{dialog.messages[dialog.messages.length - 1].text}}</p>
        <span class="dialog-frame__date">{{dialog.created}}</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters(['DIALOGS_REVERSE']),
    },
    methods: {
      goTo(event) {
        let dialog = event.target;
        if (dialog.classList.contains('active')) return;

        let loader = document.querySelector('.viewport-loader');
        let loaderBg = document.createElement('div');

        dialog.classList.add('active');

        loaderBg.classList.add('loader-bg');
        document.querySelector('.chat-body').append(loaderBg);
        loader.classList.add('active');

        setTimeout(() => {
          loaderBg.remove();
          loader.classList.remove('active');
        }, 800);
      }
    }
  }
</script>
<style lang="scss">
  .dialogs-wrapper {
    width: 316px;
    max-height: calc(100% - 120px);
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .dialogs {
    max-width: 300px;
    width: 100%;
    min-height: 100%;
  }

  .dialog-frame {
    position: relative;
    max-width: 300px;
    width: 300px;
    height: 100px;
    padding: 20px;
    background: #f3f6f8;
    border-bottom: 1px solid #e9edf2;
    transition: .3s;
    cursor: pointer;
    &:after {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 20;
    }
    &:before {
      content: '';
      position: absolute;
      display: block;
      height: 100%;
      width: 2px;
      background: #398bff;
      top: 0;
      left: 0;
      opacity: 0;
      transition: .3s;
    }
    &__link {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
    &__subj {
      font-size: 14px;
      color: #35383d;
      margin-bottom: 5px;
      max-width: 150px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    &__text {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-size: 14px;
      color: #7d8790;
    }
    &__date {
      position: absolute;
      right: 20px;
      top: 20px;
      font-size: 10px;
      letter-spacing: .05em;
      text-transform: uppercase;
      color: #b7c0c8;
    }
  }

  .router-link-exact-active {
    background: #fff;
    &:before {
      opacity: 1;
    }
    .dialog-frame__date {
      color: #7d8790;
    }
  }

  .loader-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(#fefefe, .98);
  }
</style>
