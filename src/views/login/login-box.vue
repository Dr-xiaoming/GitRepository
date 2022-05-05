    <template>
        <div class="login">
            <el-tabs type="border-card" class="box" stretch>
                <el-tab-pane>
                    <template #label>
                    <span><el-icon size="1em"><avatar /></el-icon> 账号登录</span>
                    </template>
                    <el-form label-width="60px" :rules="rules" class="form" :model="account">
                        <el-form-item label="账号" prop="name">
                            <el-input v-model="account.name"></el-input>
                        </el-form-item>

                        <el-form-item label="密码" prop="password">
                            <el-input v-model="account.password" show-password></el-input>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>

                <el-tab-pane>
                    <template #label>
                    <span><el-icon size="1em"><cellphone /></el-icon> 手机登录</span>
                    </template>
                    
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="account-control">
            <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
            <el-link type="primary">忘记密码</el-link>
        </div>
         <el-button class="btn" type="primary" @click="handleLoginClick">立即登录</el-button>
    </template>
    
    <script>
        import { reactive,defineComponent,ref } from 'vue'
        import { Avatar,Cellphone } from '@element-plus/icons' 
        import {rules} from "../configs/configs"
        import { useStore } from 'vuex'
        import router from '@/router'
        import localCache from '@/utils/cache'
        import {ElMessage} from "element-plus"
        

        export default defineComponent({
            components: { Avatar,Cellphone },
            setup(){
                
                const isKeepPassword = ref(false)
                const store = useStore()

                    
                const account = reactive({
                    name: localCache.getCache('name') ?? '',
                    password: localCache.getCache('password') ?? ''
                })

            const handleLoginClick = ()=>{
                if(isKeepPassword.value){
                    localCache.setCache('name', account.name)
                    localCache.setCache('password', account.password)
                } else {
                    localCache.deleteCache('name')
                    localCache.deleteCache('password')
                }

                if(account.password === store.state.password && account.name === store.state.name)    
                    {
                        localCache.setCache("token","88888888")
                        router.push('/')  
                        ElMessage({
                            showClose: true,
                            message: '恭喜您登录成功！',
                            center: true,})
                    }
            }
                

            return {
                store,
                account,
                rules,
                isKeepPassword,
                localCache,
                handleLoginClick
            }
            }
        })

    </script>
    
    <style>
        .login{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .box{
            margin-top: 15%;
            width: 320px;
            height: 200px;
        }
        .form{
            margin-top: 20px;
        }
        .account-control{
            margin-left: 40%;
            width: 300px;
            display: flex;
            justify-content: space-between;
        }
        .btn{
            width: 320px;
        }
    </style>