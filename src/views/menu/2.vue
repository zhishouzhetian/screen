<template>
  <div id='myChart' :style="{width: '100%', height: '100%'}">
    <el-upload
      class="avatar-uploader"
      action="http://192.168.1.159:8090/api/user/save/setImageUpload"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      
      :on-success="handleAvatarSuccess"
      :http-request="handleUpload"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imageUrl: '',
        formDate: new FormData()
      };
    },
    methods: {
      handleUpload(){
        console.info(2222)
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleAvatarSuccess(res, file) {
        console.info(file.response.data[0])
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        this.formDate.append('file', file.file);
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        console.info(1111)
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>