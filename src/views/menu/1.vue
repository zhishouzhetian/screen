<template>
  <div>
    <div class="menu-tree">
      <p style="border-bottom: 1px solid lightgray;padding-bottom: 10px;margin: 10px 0;">菜单</p>
      <el-button class="addmenu" type="primary" @click="onAddMenu">添加</el-button>
      <el-tree
        ref="tree"
        :data="menutree"
        :check-on-click-node="true"
        :expand-on-click-node="false"
        :default-checked-keys="[1]"
        :highlight-current="true"
        :current-node-key="currentnodekey"
        node-key="menuId"
        default-expand-all
        @node-click="handleClick"
        draggable
        :allow-drop="allowDrop"
        :allow-drag="allowDrag">
        <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span class="menu-button">
          <el-button v-if="node.level===1"
            type="text"
            size="mini"
            @click="() => append(data)">
            添加
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            删除
          </el-button>
        </span>
      </span>
      </el-tree>
    </div>
    <div class="menu-detail">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="路径">
          <el-input v-model="form.path"></el-input>
        </el-form-item>
        <el-form-item v-show="currentnode&&currentnode.parentId===0" label="跳转路径">
          <el-input v-model="form.redirect"></el-input>
        </el-form-item>
        <el-form-item label="组件路径">
          <el-input v-model="form.component"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="form.orderId"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即更新</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style scope>
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/ 
::-webkit-scrollbar 
{ 
    width: 5px; 
    height: 5px; 
    background-color: #F5F5F5; 
} 
   
/*定义滚动条轨道 内阴影+圆角*/ 
::-webkit-scrollbar-track 
{ 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px; 
    background-color: #F5F5F5; 
} 
   
/*定义滑块 内阴影+圆角*/ 
::-webkit-scrollbar-thumb 
{ 
    border-radius: 10px; 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3); 
    background-color: #555; 
} 

.menu-tree{
  float: left;
    border-right: 1px solid lightgray;
    padding-right: 20px;
    height: 100%;
    overflow: auto;
    width: 170px;
    position: relative;
    font-size: 15px;
}
.menu-detail{
    float: left;
    border: 1px solid lightgray;
    padding: 10px;
    margin: 40px;
    overflow: hidden;
    width: 500px;
}
.addmenu{
  position: absolute;
    top: 12px;
    right: 10px;
    padding: 4px;
}
.el-form-item {
    margin: 20px;
}
.el-tree-node__content{
  padding-right: 70px;
  position: relative;
}

.menu-button{
  display: none;
  position: absolute;
  right: 0px;
  top: 0;
  width: 68px;
}

.el-tree-node__content:hover .menu-button{
  display: block;
}
</style>
<script>
import menuService from '@/api/menu'
import {
        mapGetters,mapActions
    } from "vuex";
const menuName="新建菜单"
export default {
    data() {
      return {
        currentnode:null,
        currentnodekey:0,
        menutree:[],
        menuAarray:{},
        menuIdCount:-1,
        form: {
          name: '',
          path: '',
          redirect: '',
          component: '',
          orderId: '',
          menuId: '',
          mrId:'',
          parentId:''
        }
      };
    },
    computed: {
      ...mapGetters(["menuitems"]),
    },
    created(){
      this.initTreeData(this.menutree,this.menuitems)
      this.$nextTick(function(){
        if(this.menutree.length>0&&this.menutree[0].children.length>0){
          this.currentnodekey=this.menutree[0].children[0].menuId
          this.$refs.tree.setCurrentKey(this.currentnodekey);  
        }
      })
    },
    watch:{
      currentnodekey(){
        this.currentnode=this.$refs.tree.getCurrentNode(); 
        let data=this.menuAarray[this.currentnodekey]
        if(data){
          this.form.name=data.name||data.label
          this.form.path=data.path
          this.form.redirect=data.redirect
          this.form.component=data.component
          this.form.orderId=data.orderId
          this.form.menuId=data.menuId
          this.form.mrId=data.mrId         
          this.form.parentId=data.parentId
        }else {
          this.form.name=''
          this.form.path=''
          this.form.redirect=''
          this.form.component=''
          this.form.orderId=''
          this.form.menuId=''
          this.form.mrId=''      
          this.form.parentId=''
        }
        
      }
    },
    methods: {
      ...mapActions([
        'appendMenu'
      ]),
      initTreeData(origin,nodes){
        for(let item of nodes){
          let tempItem={
            name: item.name,
            label: item.name,
            path: item.path,
            redirect: item.redirect,
            component: item.componentpath,
            orderId: item.orderId,
            menuId: item.menuId,
            mrId:item.mrId,
            parentId:item.parentId,
            children:[]
          }
          this.menuAarray[tempItem.menuId]=tempItem
          this.initTreeData(tempItem.children,item.children)
          origin.push(tempItem)
        }
      },
      onAddMenu() { 
        let note={
          name: menuName,
          label:menuName,
          path: '',
          redirect: '',
          component: '',
          orderId: '',
          menuId: --this.menuIdCount,
          mrId:'',
          parentId:'',
          children:[]
        }
        this.menutree.push(note)
        this.menuAarray[note.menuId]=note
      },
      append(data) {
        const newChild = {
          name: menuName,
          label:menuName,
          path: '',
          redirect: '',
          component: '',
          orderId: '',
          menuId: --this.menuIdCount,
          mrId:'',
          parentId:data.menuId
        }
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild)
        this.menuAarray[newChild.menuId]=newChild
      },

      remove(node, data) {       
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.menuId === data.menuId);
        children.splice(index, 1);
        this.menuAarray[data.menuId]=null
        this.form.name=''
          this.form.path=''
          this.form.redirect=''
          this.form.component=''
          this.form.orderId=''
          this.form.menuId=''
          this.form.mrId=''      
          this.form.parentId=''
      },
      onSubmit() {
        this.menutree=this.menutree.map((item)=>{
          if(item.menuId===this.form.menuId)
          {
            item.component=this.form.component
            item.name=this.form.name
            item.label=this.form.name
          }else if(item.children.length>0){
            item.children.map((cItem=>{
              if(cItem.menuId===this.form.menuId)
              {
                cItem.component=this.form.component
                cItem.name=this.form.name
                cItem.label=this.form.name
              }
              return cItem
            }))
          }
          return item
        })
        this.$nextTick(function(){
          this.$refs.tree.setCurrentKey(this.currentnodekey);  
        })        
        //！提交到后台
        this.sbumitTree()
      },
      sbumitTree(){
          menuService.saveMenuTree({menuTree:JSON.stringify(this.menutree)}).then((response)=>{
            console.log(1)
            console.log(response)
          })
      },
      handleClick(data,node) {
        console.log(data)
        this.currentnodekey=data.menuId
      },
      allowDrop(draggingNode, dropNode, type) {
        if (draggingNode.level === 2&&(dropNode.level === 2&&type!=='inner'||dropNode.level === 1&&type==='inner')) {
          return true;
        } else if(draggingNode.level === 1&&dropNode.level === 1&&type!=='inner'){
          return true;
        } else {
          return false;
        }
      },
      allowDrag(draggingNode, dropNode, type) {
        return true;
      }
    }
  };
</script>
