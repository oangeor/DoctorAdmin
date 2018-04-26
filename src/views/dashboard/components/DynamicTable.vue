<template>
    <div class="reg-container">
        <div class="right-buttons">
            <div class="button-group">
                <slot name="buttons"></slot>
            </div>
        </div>
        <div class="table-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "dynamictable",
  }
</script>

<style lang="scss" scoped>
    .reg-container {
    }

    .right-buttons {
        overflow: hidden;
        margin-bottom: 20px;
        .button-group {
            float: right;
        }
    }


</style>