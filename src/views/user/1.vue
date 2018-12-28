<template>
  <div>
    <el-row>
      <div style="width:200px;display:inline-block">
        <el-input v-model="searchinput" placeholder="请输入搜索内容"></el-input>
      </div>
      <div style="float:right">
        <el-button type="primary" @click="dialogFormVisible=true">添加用户</el-button>
      </div>
    </el-row>
    <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}
</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
  <template>
    <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </template>
  </div>
</template>
<style scope>

</style>
<script>
  export default {
    data() {
      return {
        currentPage: 5,
        searchinput: '',
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false, 
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        tableData3: [{
          date: '2018-05-03',
          name: '马腾',
          address: '北京市大望路'
        }, {
          date: '2018-05-02',
          name: '马腾',
          address: '北京市大望路'
        }, {
          date: '2018-05-04',
          name: '马腾',
          address: '北京市大望路'
        }, {
          date: '2018-05-01',
          name: '马腾',
          address: '北京市大望路'
        }, {
          date: '2018-05-08',
          name: '马腾',
          address: '北京市大望路'
        }, {
          date: '2018-05-06',
          name: '马腾',
          address: '北京市大望路'
        }, {
          date: '2018-05-07',
          name: '马腾',
          address: '北京市大望路'
        }],
        multipleSelection: []
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>
