import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    DIALOGS: [
      {
        id: 1,
        subject: 'Привет',
        created: '12 мая 2023',
        messages: [
          {
            id: 1,
            author: 'Василий',
            created: '2019-08-01 23:59',
            text: 'Привет, как дела?',
            out: true
          },
          {
            id: 2,
            author: 'Петр',
            created: '2019-08-01 23:59',
            text: 'Привет, все хорошо, спасибо',
            out: false
          },
        ],
      },
      {
        id: 2,
        subject: 'Привет',
        created: '12 мая 2023',
        messages: [
          {
            id: 1,
            author: 'Петя',
            created: '2019-08-01 23:59',
            text: 'Вопрос по домену',
            out: false
          },
          {
            id: 2,
            author: 'Василий',
            created: '2019-08-01 23:59',
            text: 'А что с ним не так?',
            out: true
          },
        ]
      },
      {
        id: 3,
        subject: 'Тестовое задание',
        created: '12 мая 2023',
        messages: [
          {
            id: 1,
            author: 'Петя',
            created: '2019-08-01 23:59',
            text: 'Выслал вам тестовое задание, пришлите результат на почту. Срок выполнения 3 дня, срок проверки 3 дня',
            out: false
          },
          {
            id: 2,
            author: 'Василий',
            created: '2019-08-01 23:59',
            text: 'Получил, спасибо',
            out: true
          },
          {
            id: 3,
            author: 'Василий',
            created: '2019-08-01 23:59',
            text: 'Отправил вам результаты. Есть некоторые вопросы, когда будет время, давайте обсудим',
            out: true
          },
        ]
      },
      {
        id: 4,
        subject: 'Вопрос по домену',
        created: '12 мая 2023',
        messages: [
          {
            id: 1,
            author: 'Петя',
            created: '2019-08-01 23:59',
            text: 'Вопрос по домену, с ним что то не так',
            out: false
          },
          {
            id: 2,
            author: 'Василий',
            created: '2019-08-01 23:59',
            text: 'А что с ним не так?',
            out: true
          },
        ]
      },
      {
        id: 5,
        subject: 'Вылет в командировку',
        created: '12 мая 2023',
        messages: [
          {
            id: 1,
            author: 'Василий',
            created: '2019-08-01 23:59',
            text: 'Во сколько летим',
            out: true
          },
          {
            id: 2,
            author: 'Петр',
            created: '2019-08-01 23:59',
            text: 'Купил билеты на 14:20',
            out: false
          },
        ]
      },
      {
        id: 6,
        subject: 'Добавить на сайт контент',
        created: '12 мая 2023',
        messages: [
          {
            id: 1,
            author: 'Петя',
            created: '2019-08-01 23:59',
            text: 'Здравствуйте, есть новости, нужно добавить на первую страницу',
            out: false
          },
          {
            id: 2,
            author: 'Василий',
            created: '2019-08-01 23:59',
            text: 'Доброй ночи, я уже занимаюсь этим',
            out: true
          },
        ]
      },
      {
        id: 7,
        subject: 'Удалить иконки',
        created: '12 мая 2023',
        messages: [
          {
            id: 1,
            author: 'Лена',
            created: '2019-08-01 23:59',
            text: 'Мне нужно удалить все иконки с рабочего стола,а у меня пропала "мышка", ты ж программист, приди разберись.',
            out: false
          },
          {
            id: 2,
            author: 'Василий',
            created: '2019-08-01 23:59',
            text: 'Мышку поймал Том, всех благ вам',
            out: true
          },
        ]
      },{
        id: 8,
        subject: 'Удалить иконки',
        created: '12 мая 2023',
        messages: [
          {
            id: 1,
            author: 'Лена',
            created: '2019-08-01 23:59',
            text: 'Мне нужно удалить все иконки с рабочего стола,а у меня пропала "мышка", ты ж программист, приди разберись.',
            out: false
          },
          {
            id: 2,
            author: 'Василий',
            created: '2019-08-01 23:59',
            text: 'Мышку поймал Том, всех благ вам',
            out: true
          },
        ]
      },{
        id: 9,
        subject: 'Удалить иконки',
        created: '12 мая 2023',
        messages: [
          {
            id: 1,
            author: 'Лена',
            created: '2019-08-01 23:59',
            text: 'Мне нужно удалить все иконки с рабочего стола,а у меня пропала "мышка", ты ж программист, приди разберись.',
            out: false
          },
          {
            id: 2,
            author: 'Василий',
            created: '2019-08-01 23:59',
            text: 'Мышку поймал Том, всех благ вам',
            out: true
          },{
            id: 3,
            author: 'Лена',
            created: '2019-08-01 23:59',
            text: 'Мне нужно удалить все иконки с рабочего стола,а у меня пропала "мышка", ты ж программист, приди разберись.',
            out: false
          },
          {
            id: 4,
            author: 'Василий',
            created: '2019-08-01 23:59',
            text: 'Мышку поймал Том, всех благ вам',
            out: true
          },{
            id: 5,
            author: 'Лена',
            created: '2019-08-01 23:59',
            text: 'Мне нужно удалить все иконки с рабочего стола,а у меня пропала "мышка", ты ж программист, приди разберись.',
            out: false
          },
          {
            id: 6,
            author: 'Василий',
            created: '2019-08-01 23:59',
            text: 'Мышку поймал Том, всех благ вам',
            out: true
          },{
            id: 7,
            author: 'Лена',
            created: '2019-08-01 23:59',
            text: 'Мне нужно удалить все иконки с рабочего стола,а у меня пропала "мышка", ты ж программист, приди разберись.',
            out: false
          },
          {
            id: 8,
            author: 'Василий',
            created: '2019-08-01 23:59',
            text: 'Мышку поймал Том, всех благ вам',
            out: true
          },{
            id: 9,
            author: 'Лена',
            created: '2019-08-01 23:59',
            text: 'Мне нужно удалить все иконки с рабочего стола,а у меня пропала "мышка", ты ж программист, приди разберись.',
            out: false
          },
          {
            id: 10,
            author: 'Василий',
            created: '2019-08-01 23:59',
            text: 'Мышку поймал Том, всех благ вам',
            out: true
          },{
            id: 11,
            author: 'Лена',
            created: '2019-08-01 23:59',
            text: 'Мне нужно удалить все иконки с рабочего стола,а у меня пропала "мышка", ты ж программист, приди разберись.',
            out: false
          },
          {
            id: 12,
            author: 'Василий',
            created: '2019-08-01 23:59',
            text: 'Мышку поймал Том, всех благ вам',
            out: true
          },
        ]
      },
    ],
  },
  getters: {
    DIALOGS_LENGTH: state => {
      return state.DIALOGS.length;
    },
    DIALOGS_REVERSE: state => {
      return state.DIALOGS.reverse();
    },
    LAST_DIALOG: state => {
      return state.DIALOGS.reverse()[state.DIALOGS.length - 1]
    }
  },
  mutations: {
    ADD_MESSAGE: (state, payload) => {
      state.DIALOGS.forEach(dialog => {
        if (dialog.id === parseInt(payload.id)) {
          dialog.created = payload.created;
          dialog.messages.push(payload.message);
        }
      })
    },
  },
  actions: {
    SEND_MESSAGE: async (context, payload) => {
      await setTimeout(() => {
        context.commit('ADD_MESSAGE', payload)
      }, 1000)
    },
  }
});
