<template>
  <transition name="r-slider-show">
    <div class="r-slider-container" :style="style" v-show="visible">
      <div class="r-slider__header">
        <span>{{title}}</span>
        <el-button icon="el-icon-close" type="text" class="close-button" circle size="mini"
                   @click="handleClose"></el-button>
      </div>

      <div class="r-slider__body">
        <slot></slot>
      </div>

    </div>
  </transition>

</template>

<script>

  export default {
    name: "right-slider",
    data() {
      return {
      }
    },
    props: {
      width: {
        type: String,
        default: '760px'
      },
      title: {
        type: String,
        default: ''
      },
      visible: {
        type: Boolean,
        default: false
      },
    },
    computed: {
      style() {
        let style = {};
        if (this.width) {
          style.width = this.width;
        }
        return style
      }
    },
    methods: {
      handleClose() {
        this.hide()
        this.$emit('update:visible', false)
      },
      hide() {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .r-slider-container {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    z-index: 10000 !important;
    background-color: white;
    border-left: 1px solid #dbdbdb;
    box-shadow: 0 7px 21px rgba(0, 0, 0, .3);
    padding: 0 30px;
    .r-slider__header {
      border-bottom: 1px solid #dbdbdb;
      line-height: 3em;
      .close-button {
        font-size: 1.5em;
        position: absolute;
        right: 20px;
      }
    }

  }

  .r-slider-show-enter, .r-slider-show-leave-to {
    transform: translateX(760px);
    opacity: 0;
  }

  .r-slider-show-enter-active, .r-slider-show-leave-active {
    transition: all .3s ease;
  }

</style>
