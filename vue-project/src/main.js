import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import Country from './components/Country.vue'
import CommentForm from './components/CommentForm.vue'
import Comment from './components/Comment.vue'
import PersonalProfile from './components/PersonalProfile.vue'
import RestApi from './components/RestApi.vue'

const app = createApp(App)

app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('country', Country)
app.component('comment-form', CommentForm)
app.component('comment', Comment)
app.component('personal-profile', PersonalProfile)
app.component('rest-api', RestApi)
app.mount('#app')