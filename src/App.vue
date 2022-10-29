<template>
  <div class="layout page-base">
    <!--如果是需要菜单的页面-->
    <el-container
        v-if="state.showMenu"
        class="container">
      <el-aside>
        <!--菜单栏头部-->
        <div>
        </div>
        <!--菜单内容-->
        <el-menu>
          <el-submenu index="1">
            <template #title>
              <span>Dashboard</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                  index="/dashboard">
                Dashboard
              </el-menu-item>
              <el-menu-item
                  index="/add">
                添加商品
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template #title>
              <span>首页配置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                  index="/swiper">
                轮播图配置
              </el-menu-item>
              <el-menu-item
                  index="/hot">
                热销商品配置
              </el-menu-item>
              <el-menu-item
                  index="/new">
                新品上线配置
              </el-menu-item>
              <el-menu-item
                  index="/recommend">
                为你推荐配置
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template #title>
              <span>模块管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item>
                分类管理
              </el-menu-item>
              <el-menu-item>
                商品管理
              </el-menu-item>
              <el-menu-item>
                会员管理
              </el-menu-item>
              <el-menu-item>
                订单管理
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template #title>
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item>
                修改密码
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!--内容区域-->
      <el-container>
        <router-view>
        </router-view>
      </el-container>
    </el-container>
    <!--如果是不需要菜单的页面-->
    <el-container
        v-else
        class="container">
      <router-view>
      </router-view>
    </el-container>
  </div>
</template>

<script>
import {reactive} from 'vue'

export default {
  name: 'App',
  components: {},
  setup() {
    const state = reactive({
      showMenu: false
    })
    return {
      state
    }
  }
}
</script>

<style lang="scss">
.layout {
  .container {
    height: 100%;
  }
}
</style>
