 <template>
    <div class="home">
        <Headers></Headers>
        <div class="container">
            <Menus></Menus>
            <router-view></router-view>
        </div>
        <Footers></Footers>
    </div>
 </template>
 
 <script>
 import Menus from '../components/Menu'
 import Headers from '../components/Header'
 import Footers from '../components/Footer'
 export default {
     name:"home",
     data: function() {
        return  {
            clientHeight:0
        }
     },
     methods: {
        
     },
     components: {
         Menus,
         Footers,
         Headers
     }
 }
 </script>

 <style>

.container {
    width: 100%;
    min-height: 400px;
}

 </style>