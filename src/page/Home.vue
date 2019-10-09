 <template>
    <div class="home">
        <Menu></Menu>
        <router-view></router-view>
    </div>
 </template>
 
 <script>
 import Menu from '../components/Menu'
 export default {
     name:"home",
     data: function() {
         return {
             currentIndex:0,
             models:[
                 "基本信息",
                 "系统日志",
                 "崩溃记录",
                 "Lumberjack",
                 "网络监控",
                 "沙盒",
                 "UI监听",
                 "埋点"
             ]
         }
     },
     methods: {
         menuItemAction: function(index) {
             switch(index) {
                 case 0:
                     this.$router.push({path:"/home/basic"})
                     break 
                case 1:
                    break 
                case 2:
                    break 
                case 3:
                    break 
                case 4:
                    break 
                case 5:
                    break 
                case 6:
                    break 
             }
         }
     },
     components: [
         Menu
     ]
 }
 </script>
 
 <style>
 
 </style>