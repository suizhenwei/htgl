<template>
    <input 
      :type="type"
      :value="value"
      :class="className"
      :click="Login"
      :placeholder="placeholder"
      @blur="handleBlur"
      @focus="handleFocus"
      @input="updataValus">
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    className: {
      type: String,
      default: '',
    },
    value:{},
    Login:{},
    placeholder: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleBlur (e) {
      this.$emit('handleBlur', e.target.value)
    },
    handleFocus (e) {
      this.$emit('handleFocus', e.target.value)
    },
    updataValus (e) {
      this.$emit('updataValus', e.target.value)
    }
  }
}
</script>

<style scoped>
.baseInput{
  outline: 0;
  width:200px;
  line-height: 2;
  border-radius: 10px;
  border:0;
  padding-left:5px;
}
</style>
