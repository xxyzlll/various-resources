import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ResourceList from './components/ResourceList.vue'
import ResourceDetail from './components/ResourceDetail.vue'

const routes = [
  { path: '/', component: ResourceList },
  { path: '/detail/:id', component: ResourceDetail, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
