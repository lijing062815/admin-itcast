<template>
  <div class="home">
    登录成功
  </div>
</template>

<script>
import {getUserList} from '@/api'
export default {
  mounted() {
    let params = {params:{query:'',pagenum:1,pagesize:1}}
    getUserList(params).then(res=>{
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
