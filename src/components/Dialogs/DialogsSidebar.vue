<template>
  <div class="sidebar-dialogs sidebar">
    <div class="sidebar-title">Сообщения <span>{{DIALOGS_LENGTH}}</span></div>
    <dialogs-list></dialogs-list>
    <div class="sidebar-footer"></div>
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
      ...mapGetters(['DIALOGS_LENGTH'])
    }
  }
</script>
<style lang="scss">
  .sidebar {
    &-dialogs {
      max-width: 300px;
      background: #f3f6f8;
      /*padding-bottom: 60px;*/
      overflow: hidden;
      &:after {
        content: '';
        position: relative;
        bottom: 0;
        left: 0;
        z-index: 10;
        display: block;
        width: 100%;
        height: 60px;
        border-top: 1px solid #e9edf2;
      }
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
    /*&-footer {*/
      /*z-index: 10;*/
      /*background: inherit;*/
      /*display: block;*/
      /*width: 100%;*/
      /*height: 60px;*/
      /*border-top: 1px solid #e9edf2;*/
    /*}*/
  }
</style>
