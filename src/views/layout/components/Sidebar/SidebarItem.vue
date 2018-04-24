<template>
  <div>
    <template v-for="item in routes" v-if="!item.hidden && item.children">
      <router-link v-if="hasOneShowingChildren(item.children)" :to="item.path+'/'+item.children[0].path"
                  :key="item.children[0].name">
        <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submemu-title-noDropDown':false}">
        <!--<el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submemu-title-noDropDown':!isNest}">-->
          <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></svg-icon>
          <span v-if="item.children[0].meta&&item.children[0].meta.title">{{$t(item.children[0].meta.title)}}</span>
        </el-menu-item>

      </router-link>
    </template>
  </div>
</template>
z
<script>
  export default {
    name: "SidebarItem",
    props: {
      routes: {
        type: Array
      }
    },
    methods: {
      hasOneShowingChildren(children) {
        const showingChildren = children.filter(item => {
          return !item.hidden
        })

        if (showingChildren.length === 1) {
          return true
        }
        return false
      }
    }
  }
</script>

<style scoped>

</style>
