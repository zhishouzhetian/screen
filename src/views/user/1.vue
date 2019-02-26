<template>
  <div style="position:relative">
    <el-row>
      <div style="width:200px;display:inline-block;padding-bottom:10px">
        <el-input v-model="searchinput" placeholder="请输入搜索内容"></el-input>
      </div>
      <div style="float:right">
        <el-button type="primary" @click="dialogFormVisible=true">添加用户</el-button>
      </div>
    </el-row>
  <div class="usertable">
    <el-table ref="multipleTable" :data="userData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>    
      <el-table-column
        prop="userName"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        :formatter="formatSex"
        width="120"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="120"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="workplace"
        label="工作地"
        width="120"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="occupation"
        label="职业"
        width="120"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="education"
        label="学历"
        show-overflow-tooltip>
      </el-table-column>
      <!-- <el-table-column  
        prop="height"
        label="身高"
        width="120"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="weight"
        label="体重"
        width="120"
        show-overflow-tooltip>
      </el-table-column> -->
      <el-table-column
        prop="hometown"
        label="家乡"
        width="120"
        show-overflow-tooltip>
      </el-table-column>
      <!-- <el-table-column
        prop="zodiac"
        label="属相"
        width="120"
        show-overflow-tooltip>
      </el-table-column>          
      <el-table-column
        prop="education"
        label="学历"
        width="120"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="bachelorschool"
        label="本科学校"
        width="120"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="masterschool"
        label="硕士学校"
        width="120"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="doctorschool"
        label="博士学校"
        width="120"
        show-overflow-tooltip>
      </el-table-column> -->
    </el-table>
  </div>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="300">
    </el-pagination>
  </div>
<template>
  <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="用户名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择性别">
          <el-option label="男" value="male"></el-option>
          <el-option label="女" value="female"></el-option>
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
  .el-table th {
    background-color: #eef1f6;
  }

  .el-dialog__header {
    padding: 18px 25px;
    background-color: #4e617c;
}

.el-dialog__header span {
    color: #fff;
    font-size: 16px;
    font-weight: normal;
}

.block{
  text-align: right;
    position: absolute;
    bottom: 5px;
    right: 0;
    width: 100%;
}

.usertable{
 overflow: auto;
    position: absolute;
    bottom: 45px;
    top: 60px;
    right: 0;
    left: 0;
    margin: 0 10px;
}
</style>
<script>
import userService from '@/api/user'

  export default {
    data() {
      return {
        currentPage: 2,
        searchinput: '',
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
        userData: [],
        multipleSelection: []
      }
    },
    created(){
      this.getUerData()
    },
    methods: {
      async getUerData(){
        let result=await userService.selectUserInfoList()
        if(result.data.success){
          this.userData=JSON.parse(result.data.data)
        }
      },
      formatSex(row, column){
        return row.gender == 1 ? '男' : row.gender == 2 ? '女' : '未知';
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      changeUserData() {
        //根据当前页和每页显示个数等参数更新数据！！！
        this.userData = this.userData;
      }
    }
  }
</script>
