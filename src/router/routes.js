import ChatMessages from '@/components/Chat/ChatMessages'

export const routes = [
  {
    path: '/dialog/:id',
    name: 'dialog',
    component: ChatMessages
  }
]
