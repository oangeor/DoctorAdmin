<template>
    <div class="dashboard-container">
        <div class="dashboard-header">
            <h3>今日工作</h3>
        </div>
        <div class="dashboard-content">
            <div class="today-statics">
                <ul class="statics-items">
                    <li>
                        今日新增患者
                        <div class="number">
                            <em>20</em> 人
                        </div>
                    </li>
                    <li>
                        今日就诊
                        <div class="number">
                            <em>20</em> 人
                        </div>
                    </li>
                    <li>
                        今日预约
                        <div class="number">
                            <em>20</em> 人
                        </div>
                    </li>
                </ul>

            </div>

            <div class="list-content">
                <div class="list-index-menu">
                    <el-menu
                            @open="handleOpen"
                            @select="handleSelect"
                    >
                        <el-menu-item index="1">
                            <i class="el-icon-location"></i>
                            <span>今日挂号</span>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <i class="el-icon-location"></i>
                            <span> 待收费</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-location"></i>
                            <span> 已付清</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-location"></i>
                            <span>今日充值</span>
                        </el-menu-item>
                        <el-menu-item index="5">
                            <i class="el-icon-location"></i>
                            <span>明日预约</span>
                        </el-menu-item>
                        <el-menu-item index="6">
                            <i class="el-icon-location"></i>
                            <span>今日回访</span>
                        </el-menu-item>

                    </el-menu>
                </div>
                <div class="dynamic-content">
                    <component :is="currentTable"></component>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
  import adminDashboard from './admin'
  import Registration from './components/Registration'
  import ToCharge from './components/ToCharge'
  import {Message} from 'element-ui'

  const navMenuMap = {
    1: 'Registration',
    2: 'ToCharge',

  }

  export default {
    name: "dashboard",
    data() {
      return {
        customers: [],
        name: '',
        currentTable: 'Registration'
      }
    },
    components: {
      adminDashboard,
      Registration,
      ToCharge
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
        const value = navMenuMap[key]
        console.log(value)
        if (value) {
          this.currentTable = value
        } else {
          Message({
            message:"后续功能开发中, 敬请期待",
            type: "warning",
            duration: 3 * 1000
          })
        }

      }
    },

  }
</script>

<style lang="scss" scoped>


    .dashboard-container {
        height: 100%;
        background: white;
    }

    .dashboard-header {
        height: 3.05rem;
        line-height: 3.05rem;
        border-bottom: 1px solid #dbdbdb;
        background: white;
    }

    .dashboard-content {
        padding: 1rem;
        height: 100%;
    }

    .today-statics {
        border: 1px solid #e6e7f3;
        color: #999;
        padding: 1rem;
        margin-bottom: 2rem;
        background: white;
        .statics-items {
            text-align: left;
            li {
                display: inline-block;
                margin-left: 3rem;
                list-style: none;
                .number {
                    padding-top: .72rem;
                    color: #000;
                    em {
                        font-size: 1.2rem;
                        color: $blue;
                        padding-right: .3em;
                    }
                }
            }
            li:first-child {
                margin-left: 0;
            }

        }
    }

    .list-content {
        background: white;
        height: calc(100% - 2.75rem - 3rem);
        border: 1px solid #e6e7f3;
    }

    .list-index-menu {
        width: 13rem;
        float: left;
        height: 100%;
        .el-menu{
            height: 100%;
        }
    }

    .dynamic-content {
        margin-left: 13rem;
        padding: 20px;
    }
</style>
