<template>
  <div class="sidebar-dialogs sidebar">
    <div class="sidebar-title">Сообщения <span>{{dialogsLength}}</span></div>
    <dialogs-list></dialogs-list>
  </div>
</template>
<script>
  import DialogsList from './DialogsList'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      DialogsList
    },
    computed: {
      ...mapGetters(['dialogsLength'])
    }
  }
</script>
<style lang="scss">
  .sidebar {
    &-dialogs {
      max-width: 300px;
      background: #f3f6f8;
      padding-bottom: 60px;
    }
    &-title {
      font-size: 14px;
      padding: 20px;
      border-bottom: 1px solid #e9edf2;
      color: #656b77;
      span {
        color: #d2d8de;
        margin-left: 10px;
      }
    }
  }
</style>
