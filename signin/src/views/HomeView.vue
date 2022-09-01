<template>
  <div class="home">
      <div class="common-layout">
        <el-container>
          <section>
            <el-header class="col-md-12 text-center md-dom-py-50">
              <div>
                <h1>贰玖工作室打卡</h1>
              </div>
            </el-header>
          </section>
          <section>
            <el-main>
            </el-main>
          </section>
          <el-footer>
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
