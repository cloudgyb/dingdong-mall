export default [
  {
    name: 'Main',
    path: '/',
    component: () => import('../views/Main.vue')
  },
  {
    name: 'Category',
    path: '/category',
    component: () => import('../views/Category.vue')
  },
  {
    name: 'Cart',
    path: '/cart',
    component: () => import('../views/Cart.vue')
  },
  {
    name: 'My',
    path: '/my',
    component: () => import('../views/My.vue')
  }
]
