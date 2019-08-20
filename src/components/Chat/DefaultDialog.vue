<template>
  <div class="default-container">
    <h3 class="default-title">Выберите диалог из списка.</h3>
    <!--<div class="default-info">-->
      <!--<h4>Последний диалог:</h4>-->
      <!--<div>Дата:-->
        <!--<strong>{{LAST_DIALOG.created}}</strong>-->
      <!--</div>-->
      <!--<div>Тема:-->
        <!--<strong>{{LAST_DIALOG.subject}}</strong>-->
      <!--</div>-->
      <!--<div>Последнее сообщение:-->
        <!--<strong>"{{LAST_DIALOG.messages[LAST_DIALOG.messages.length - 1].text}}"</strong>-->
      <!--</div>-->
      <!--<div>Отправитель:-->
        <!--<strong>"{{LAST_DIALOG.messages[LAST_DIALOG.messages.length - 1].author}}"</strong>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters(['DIALOGS_LENGTH', 'LAST_DIALOG'])
    }
  }
</script>

<style lang="scss">
  .default {
    &-container {
      width: 100%;
      height: 100%;
      background: url('https://s14.stc.all.kpcdn.net/share/i/4/1477768/wx1080.jpg') no-repeat center / cover;
    }
    &-title {
      text-align: center;
      margin-top: 300px;
      font-size: 34px;
      font-weight: 300;
      color: #fff;
      margin-bottom: 50px;
    }
    /*&-info {*/
      /*width: 400px;*/
      /*margin: 0 auto;*/
      /*padding: 30px 0;*/
      /*background: rgba(#fff,1);*/
      /*!*background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%);*!*/
      /*box-shadow: 0 5px 18px rgba(55,55,55,.3);*/
      /*border-radius: 8px;*/
      /*font-size: 16px;*/
      /*color: #000;*/
      /*h4 {*/
        /*text-align: center;*/
        /*font-size: 20px;*/
        /*margin-bottom: 30px;*/
      /*}*/
      /*div {*/
        /*font-weight: 400;*/
        /*padding: 10px 20px;*/
        /*strong {*/
          /*margin-left: 6px;*/
          /*color: #333;*/
        /*}*/
      /*}*/

    /*}*/
  }
</style>
