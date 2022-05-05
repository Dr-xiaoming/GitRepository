<template>
  <el-container
    class="layout-container-demo"
    style="height: 100vh; border: 1px solid #eee"
  >
    <el-aside width="200px" >
      <el-scrollbar>
        <el-menu :default-openeds="['1', '3']">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><message /></el-icon>Navigator One
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click=handlepush>Option 1</el-menu-item>
              <el-menu-item index="1-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="1-3" @click="handlepush1">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>Option4</template>
              <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><icon-menu /></el-icon>Navigator Two
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">Option 1</el-menu-item>
              <el-menu-item index="2-2">Option 2</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group >
              <el-menu-item index="2-3">Option 3</el-menu-item>
            </el-menu-item-group>

            <el-sub-menu index="2-4">
              <template #title>Option 4</template>
              <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div>
          <div class="navbar">外贸订单管理系统系统</div>
          <div class="toolbar">
            <el-button type="primary" @click="handleExit">退出</el-button>、
          </div>
        </div>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Message, Menu as IconMenu, Setting } from '@element-plus/icons-vue'
import localCache from '@/utils/cache'
import router from '@/router'
const handleExit = ()=>{
  localCache.deleteCache('token')
  router.push("/login")
}



const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array(10).fill(item))

const handlepush = ()=>{
  router.push("./person")
}

const handlepush1 =()=>{
  router.push("./home1")
}

</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: #5690e0;
}
.layout-container-demo .el-aside {
  width: 240px;
  background-color: rgb(101, 148, 230);
  border-right: solid 1px #e6e6e6;
  box-sizing: border-box;
}
 .el-menu{
  border-right: none;
  background-color: rgb(101, 148, 230);
  color: #56e056;
}
  .el-menu-item{
    background-color: rgb(101, 148, 230);
  }
  .el-menu-item.is-active{
    color: #56e056;
  }
  .el-sub-menu{
     background-color: rgb(101, 148, 230);
  }
  .el-menu-item-group{
    background-color: rgb(101, 148, 230);
    color: #000;
  }


.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  position: absolute;
  display: inline-flex;
  align-items: center;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}
.layout-container-demo .navbar {
  display: flex;
  justify-content: center;
  font-size: 35px;
  margin-top: 5px;
}
</style>
