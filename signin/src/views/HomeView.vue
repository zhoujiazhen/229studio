<template>
  <div class="home">
      <div class="common-layout">
        <el-container>
          <section>
            <el-header class="col-md-12 text-center dom-py-50">
              <div>
                <h1>贰玖工作室</h1>
              </div>
            </el-header>
          </section>
          <section>
            <el-main>
              <div class="row">
                <div class="col-md-7"></div>
                <el-card class="login col-md-5 col-sm-12 col-xs-12">
                  <form action="">
                    <div class="input-group dom-pb-15">
                      <label class="input-label dom-pr-20" for="" name="account">
                        <i class="fa fa-user"></i>
                      </label>
                      <input class="form-control" type="text" placeholder="Please enter your account" onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');">
                      <!-- 上面的input做了一个正则表达式，只允许数字 -->
                    </div>
                    <div class="input-group dom-pb-5">
                      <label class="input-label dom-pr-20" for="" name="account">
                        <i class="fa fa-lock"></i>
                      </label>
                      <input class="form-control" type="password" placeholder="Please enter your password" oninput="value=value.replace(/[^\w\.\/]/ig,'')">
                      <!-- 上面的input做了一个正则表达式，只允许数字+英文 -->
                    </div>
                    <div class="row">
                      <div class=" col-md-12 text-start">
                        <router-link to="/register">
                         <span>没有账号？注册一个吧>></span>
                        </router-link>
                       </div>
                    </div>
                    <div class="row dom-pt-10">
                      <div class="col-md-12">
                        <button type="submit" class="btn btn-primary">登录</button>
                        <button type="reset" class="btn btn-primary dom-ml-10">重置</button>
                      </div>
                    </div>
                    <div class="forget-password text-end dom-pt-10">
                      <router-link to="/forget"><span>忘记密码？</span></router-link>
                    </div>
                  </form>
                </el-card>
              </div>
            </el-main>
          </section>
          <el-footer class="dom-pt-50">
            <indexfooter/>
          </el-footer>
        </el-container>
      </div>
  </div>
</template>

<script>
import indexfooter from '../components/footer.vue';
export default {
  components: {
    indexfooter,
  }
}
</script>
