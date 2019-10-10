import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home.vue'

import NetworkEye from '@/components/content/NetworkEye.vue'
import Log from '@/components/content/Log.vue'
import Crash from '@/components/content/Crash.vue'
import UIMonitor from '@/components/content/UIMonitor.vue'
import BuriedPoint from '@/components/content/BuriedPoint.vue'
import SandBox from '@/components/content/SandBox.vue'
import Lumberjack from '@/components/content/Lumberjack.vue'
import BasicMessage from '@/components/content/BaseMessage.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/basic',
      name: 'home',
      component: Home,
      children: [
        {
          path:"basic",
          name:"基本信息",
          component:BasicMessage
        },
        {
          path:"network_eye",
          name:"流量监控",
          component:NetworkEye
        },
        {
          path:"log",
          name:"日志",
          component:Log
        }, 
        {
          path:"crash",
          name:"崩溃信息",
          component: Crash
        },
        {
          path:"ui_monitor",
          name:"UI 检测",
          component:UIMonitor
        },
        {
          path:"buried_point",
          name:"埋点",
          component:BuriedPoint
        },{
          path:"sandbox",
          name:"沙盒",
          component:SandBox
        }, {
          path:"lumberjack",
          name:"Lumberjack",
          component:Lumberjack
        }
      ]
    }
  ]
})
