import Vue from 'vue';
import VueRouter from "vue-router";
import App from '../App.vue';
import About from '../about.vue';
import Support from '../support.vue';
import Talk from '../talk.vue';

import '../assets/styles/global.styl'
import '../assets/styles/footer.styl'
import '../assets/styles/test.css'
import '../assets/images/bg.jpg'
import '../assets/images/done.png'
import '../assets/images/round.png'

Vue.use(VueRouter);

const routers = [
    { 
        path:"/talk", 
        componet: Talk 
    },
    { 
        path:"/about",
        componet: About 
    },
    { 
        path:"/support",
        componet: Support 
    },
    {
        path: '/',
        redirct:'/App'
    }


]

const router = new VueRouter({
    routes: routers
  })
  
export default router;