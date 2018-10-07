<template>
  <div class="hd-dialog">
    <button class="hd-dialog-close" v-if="closeBtn" @click="close">X</button>
    <h2 class="hd-dialog-title" v-if="title">{{title}}</h2>
    <div class="hd-dialog-desc" v-html="message"></div>
    <div class="hd-dialog-settings">
      <button class="hd-dialog-cancel" v-if="cancelBtn" @click="close">{{cancelTextBtn}}</button>
      <button class="hd-dialog-confirm" v-if="confirmBtn" @click="callback">{{confirmTextBtn}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tips',
  data () {
    return {
      message: 'title message',
      title: null,
      timer: null,
      closed: false,
      closeBtn: false,
      cancelBtn: false,
      confirmBtn: false,
      cancelTextBtn: '取消',
      confirmTextBtn: '确定',
    }
  },
  methods: {
    startTimer () {
      if (this.duration >0) {
        this.timer = setTimeout(() =>{
          this.close()
        }, this.duration)
      }
    },
    close () {
      console.log('destroy')
      clearTimeout(this.timer)
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
    },
    async callback () {
      if (typeof this.confirmCallback === 'function') {
        await this.confirmCallback()
        this.close()
      }
    }
  },
  mounted () {
    this.startTimer()
    document.addEventListener('keydown',  (e) =>{
      if(e.keyCode === 27) {
        this.close()
      }
    })
  },
  watch: {
    closed (newVal) {
      if (newVal) {
        this.$destroy(true)
        document.body.removeChild(this.$el)
      }
    }
  }
}
</script>

<style scoped>
.hd-dialog{
  width: 200px;
  line-height: 1.5;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #fff;
  text-align: center;
}
.hd-dialog-close{
  position: absolute;
  right: 0;
  top: 0;
  line-height: 2;
  background: #fff;
  border:1px solid #fff;
  border-radius: 50%;
  outline: 0;
}
.hd-dialog-close:hover{
  background: #ccc;
}
.hd-dialog-settings{
  margin:10px 0;
}
.hd-dialog-settings button{
  background: #fff;
  border: 1px solid #fff;
  outline: 0;
  cursor: pointer;
}
</style>
