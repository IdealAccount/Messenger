import ChatMessages from '@/components/Chat/ChatMessages'
import Default from '@/components/Chat/DefaultDialog'

export const routes = [
  {
    path: '*',
    component: Default
  },
  {
    path: '/dialog/:id',
    name: 'dialog',
    component: ChatMessages
  }
];
