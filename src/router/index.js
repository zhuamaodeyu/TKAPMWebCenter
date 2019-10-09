import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home.vue'

import NetworkEye from '@/component/content/NetworkEye'
import Log from '@/component/content/Log'
import Crash from '@/component/content/Crash'
import UIMonitor from '@/component/content/UIMonitor'
import BuriedPoint from '@/component/content/BuriedPoint'
import SandBox from '@/component/content/SandBox'
import Lumberjack from '@/component/content/Lumberjack'
import BasicMessage from '@/component/content/BasicMessage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
