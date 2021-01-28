
import {createRouter,createWebHistory} from 'vue-router'

import CoachDetails from './pages/coaches/CoachDetails.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachRegisteration from './pages/coaches/CoachRegistraion'
import Contact from './pages/requests/Contact.vue'
import RequestsReceived from './pages/requests/RequestsReceived.vue'
import NotFound from './pages/NotFound.vue'
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', redirect: '/coaches'},
        {path:'/coaches', component:CoachesList},
        {path:'/coaches/:id', component:CoachDetails,
        props:true,
        children:[
            {path:'contact', component:Contact}
        ]},
        {path:'/register', component:CoachRegisteration},
        {path:'/requests', component:RequestsReceived},
        {path:'/:notFound(.*)', component:NotFound}
    ]
})

export default router