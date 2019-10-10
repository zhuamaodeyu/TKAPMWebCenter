<template>
  <div class="menus">
      <!-- <div class="mCustomScrollBox">
        <div class="container">
          <ul>
            <li class="w-li" v-for="(item, index) in menuModel.menu" :key="index">
              <a
                :class="menuModel.menuSelectIndex == index ? 'w-a active' :'w-a'"
                v-on:click="menuAction(index, $event)"
              >
                <i v-bind:class="item.front_img"></i>
                <span>{{ item.title }}</span>
                <i v-bind:class="menuModel.show == index ? item.back_img : item.back_img_up"></i>
              </a>
              <ul class="ul-bg" v-show="index == menuModel.show ? true : false">
                <li v-for="(name, subindex) in item.sub" :key="subindex">
                  <a
                    v-on:click="cellAction(index, subindex,$event)"
                    :class="menuModel.menuCellSelectIndex == (index + '' + subindex) ? 'a-active' : ''"
                  >{{ name }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div> -->
  </div>
</template>
  
<script>
export default {
  name: "menus",
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
  }
};
</script>

<style>
.menus {
    background-color: yellow;
    width: 150px;
    height: 100%;
}
/* .v-sidbar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  height: 100%;
  width: 224px;
  background: #1e1e27;
  z-index: 11;
  font-size: 15px;
  .logo {
    background: #26262e;
    width: 224px;
    height: 70px;
    padding: 15px 0 0 20px;
    a {
      width: 142px;
      height: 34px;
      display: block;
      background-size: cover;
      position: relative;
      span {
        position: absolute;
        right: 0;
        top: 28px;
        font-size: 12px;
        color: #f4f4f4;
      }
    }
  }
  .s-nav {
    overflow: visible;
    .mCustomScrollBox {
      position: relative;
      overflow: hidden;
      height: 100%;
      max-width: 100%;
      outline: 0;
      direction: ltr;
      .container {
        overflow: hidden;
        width: auto;
        height: auto;
        position: relative;
        top: 0;
        left: 0;
        ul {
          li {
            min-height: 46px;
            a {
              color: #959598;
              line-height: 46px;
              text-decoration: none;
              padding-left: 26px;
              display: block;
              border-left: 3px solid #26262e;
              user-select: none;
              i {
                vertical-align: sub;
                display: inline-block;
                margin: 0 8px 0 0;
              }
              .icon-arrowdown {
                float: right;
                line-height: 40px;
                font-size: 14px;
                font-weight: bold;
                margin-right: 10px;
                display: inline;
              }
              .icon-arrowup {
                float: right;
                line-height: 40px;
                font-size: 14px;
                font-weight: bold;
                margin-right: 10px;
                display: inline;
              }
            }
            .ul-bg {
              // background: rgba(147, 145, 145, 0.1);
              background-color: #26262e;
              li {
                a {
                  padding-left: 50px;
                  cursor: pointer;
                  &:hover {
                    color: #f4f4f4;
                  }
                }
                .a-active {
                  color: #f4f4f4;
                }
              }
            }
          }
          .w-li {
            .w-a {
              cursor: pointer;
              &:hover {
                color: #fff;
                background-color: #303036;
                border-left: 5px solid #fa2b8c;
                i {
                  color: #fff;
                }
              }
            }
            .active {
              color: #fff;
              background-color: #303036;
              border-left: 5px solid #fa2b8c;
              i {
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
} */
</style>