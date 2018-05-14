import Vue from 'vue'
const com = {
  template:
    `
  <div @click='change()'>{{a}}</div>
  `,
  props: {
    a: {
      type: String,
      default: '123456'
    },
    onChange: {
      type: Function
    }
  },
  methods: {
    change () {
      this.$emit('onChange', '12345')
    }
  }
}
new Vue({
  el: '#root',
  template:
    `<div>
    <div>{{text}} {{obj.a}} </div>
    <com @onChange='b'/>
  </div>
  `,
  data: {
    text: 0,
    obj: {}
  },
  methods: {
    b (v) {
      console.log(v)
    }
  },
  components: {
    com
  }
})
