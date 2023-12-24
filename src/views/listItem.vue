<template>
  <div>
    <template>
       <el-button class="btn" type="primary" round>添加面经</el-button>
    <el-table
      :data="tableData"
      style="width: 100%"
      fit>
      <el-table-column
        prop="createdAt"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="creator"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="stem"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="id"
        label="编号">
      </el-table-column>
      <el-table-column
        prop="views"
        label="浏览"
        width='80'>
      </el-table-column>
      <el-table-column
        prop="likeCount"
        label="点赞"
        width='80'>
      </el-table-column>
      <el-table-column

        label="操作">
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
         <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-table-column>

    </el-table>
      <el-pagination
      @current-change='change'
      :current-page='current'
  layout="prev, pager, next"
  :total="420">
</el-pagination>
  </template>

  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      current: 1

    }
  },
  created () {
    this.initdata()
  },
  methods: {
    async initdata () {
      const res = await this.$axios({
        url: 'http://interview-api-t.itheima.net/h5/interview/query',
        headers: { Authorization: localStorage.getItem('h5-pc') },
        params: {
          current: this.current
        }
      })
      console.log(res)
      this.tableData = res.data.data.rows
    },
    change (a) {
      console.log(a)
      this.current = a
      this.initdata()
    }
  }
}

</script>

<style>
.btn{
  position: absolute;
  left: 1370px;
  top: 70px;
  z-index: 1;
}
</style>
