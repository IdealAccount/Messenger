import ChatMessages from '@/components/Chat/ChatMessages'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: ChatMessages
  },
  {
    path: '/dialog/:id',
    name: 'dialog',
    component: ChatMessages
  }
]
