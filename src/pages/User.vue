<template>
  <div class="user">
    <div class="btn">
      <el-button type="info" size='mini' @click='toAdduser'>新增</el-button>
    </div>
    <!-- 用户管理区 -->
    <div v-loading="loading">
      <el-row>
        <el-col class="tbl" :sm="7" v-for='user in users' :key='user.id'>
          <div class="img_cir">
            <img style="width: 150px;height: 150px;" :src="user.userface?user.userface:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514093920321&di=913e88c23f382933ef430024afd9128a&imgtype=0&src=http%3A%2F%2Fp.3761.com%2Fpic%2F9771429316733.jpg'" alt="图片找不到了">
          </div>
          <el-row>
            <el-col :sm="8" :offset="2">用户名</el-col>
            <el-col :sm="12">{{user.username?user.username:'-'}}</el-col>
          </el-row>
          <el-row>
            <el-col :sm="8" :offset="2">真实姓名</el-col>
            <el-col :sm="12">{{user.nickname?user.nickname:'-'}}</el-col>
          </el-row>
          <el-row>
            <el-col :sm="8" :offset="2">注册时间</el-col>
            <el-col :sm="12">{{user.regTime?user.regTime:'-'}}</el-col>
            <!-- <el-col :sm="12"><a href="">{{user.regTime?user.regTime:'-'}}</a></el-col> -->
          </el-row>
          <el-row>
            <el-col :sm="8" :offset="2">email</el-col>
            <el-col :sm="12">{{user.email?user.email:'-'}}</el-col>
          </el-row>
          <el-row>
            <el-col :sm="8" :offset="2">状态</el-col>
            <el-col :sm="12">
              <el-switch
                v-model="user.status"
                active-color="#67C23A"
                inactive-color="#909399">
              </el-switch>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <!-- 用户管理区域结束 -->
    <!-- 模态框 -->
    <el-dialog width="35%" :title="uDialog.title" :visible.sync="uDialog.visible" center>
        <el-form ref='userForm' :rules='rules' :model="uDialog.form" size='mini' label-position='left'>
          <el-form-item prop="username" label="用户名" label-width="6em">
              <el-input v-model="uDialog.form.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码" label-width="6em">
              <el-input v-model="uDialog.form.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="password1" label="确认密码" label-width="6em">
              <el-input v-model="uDialog.form.password1" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名" label-width="6em">
              <el-input v-model="uDialog.form.nickname" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" label-width="6em">
              <el-input v-model="uDialog.form.email" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button size='mini' @click='closeUDialog'>取 消</el-button>
          <el-button type="primary" size='mini' @click='saveOrUpdateUser'>确 定</el-button>
      </div>
    </el-dialog>
    <!-- 模态框结束 -->
  </div>           
</template>
<script>
  import axios from '@/http/axios'
  export default {
    data(){
      return {
        loading:false,
        users:[],
        multipleSelection:[],
        uDialog:{
          title:'',
          visible:false,
          form:{}
        },
        rules:{
          username:[{
            required:true,
            message:'请输入用户名',
            trigger:'blur'
          }],
          password:[{
            required:true,
            message:'请输入密码',
            trigger:'blur'
          }],
          password1:[{
            required:true,
            message:'请确认密码',
            trigger:'blur'
          }]
        }
      }
    },

    created(){
      this.loadAllUsers();
    },

    methods:{
      // 提交保存用户信息表单
      saveOrUpdateUser(){
        this.$refs.userForm.validate((valid)=>{
          if(valid){
            axios.post('/manager/user/saveOrUpdateUser',this.uDialog.form)
            .then(()=>{
                this.$notify.success({
                    title: '成功',
                    message: '提交成功！'
                });
                this.closeUDialog();
                this.loadAllUsers();
            })
            .catch(()=>{
                this.$notify.error({
                    title: '错误',
                    message: '提交失败！'
                });
            })
          }
        })
      },

      // 关闭模态框
      closeUDialog(){
        this.$refs.userForm.resetFields();
        this.uDialog.form = {};
        this.uDialog.visible = false;
      },

      // 弹出新增模态框
      toAdduser(){
        this.uDialog.title = '添加用户';
        this.uDialog.visible = true;
      },
      handleSelectionChange(val) {
            this.multipleSelection = val;
          },
          // 加载所有用户信息
      loadAllUsers(){
        axios.get('/manager/user/findAllUser')
        .then(({data:result})=>{
          this.users = result.data;
        })
        .catch(()=>{
          this.$notify.error({
            title: '错误',
            message: '网络异常！'
          });
        })
        .finally(()=>{
          this.loading = false;
        })
      }
    } 
  }
</script>
<style>
    .user {
      padding: 1em;
    }
    .btn {
      margin-left: 10px;
    }
    /*a {
      text-overflow: ellipsis;
    }*/
    .el-row {
      margin-bottom: 10px;
    }
    .img_cir {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      overflow: hidden;
      /*margin: 10px;*/
      /*margin-left: 25px;*/
      margin: 0 auto;
    }
    .tbl {
      border: 1px solid #cdcdcd;
      margin: 20px;
      padding: 10px;
      padding-left: 30px;
    }
</style>