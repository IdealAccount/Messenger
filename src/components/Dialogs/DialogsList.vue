<template>
  <div class="dialogs-wrapper">
    <ul class="dialogs">
      <router-link tag="li"
                   v-for="(dialog) of DIALOGS_REVERSE"
                   class="dialog-frame"
                   :key="dialog.id"
                   :to="{path: `/dialog/${dialog.id}`}"
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
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['DIALOGS_REVERSE']),
    },
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
</style>
