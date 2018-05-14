import Vue from 'vue'
const com = {
  template:
    `
    <div>
      <div @click='change()'>{{value1}}</div>
      <input type='text' :value='value1' />
    </div>
  `,
  mnodel: {
    prop: 'value1',
    evant: 'change'
  },
  props: {
    a: {
      type: String,
      default: '123456'
    },
    value1: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      c: 0,
      d: ''
    }
  },
  watch: {
    value: {
      handler (v) {
        this.d = v
      },
      immediate: true
    }
  },
  methods: {
    change () {
      this.$emit('onChange', '12345')
    }
  }
}
// const C = Vue.extend(com)
// new C({
//   el: '#root',
//   propsData: {
//     a: '89'
//   },
//   data: {
//     text: 0,
//     obj: {},
//     c: 'dfasdfasdfasdf'
//   },
//   methods: {
//     b (v) {
//       console.log(v)
//     }
//   },
//   components: {
//     com
//   }
// })

const C2 = {
  extends: com,
  data () {
    return {
      c: 1
    }
  },
  mounted () {
    console.log('C2 mounted')
  }
}
new Vue({
  el: '#root',
  template:
    `<div>
    <span>{{c}}</span>
    <C2 @onChange='chagne' v-model='c'/>
    </div>
  `,
  data: {
    c: 6
  },
  methods: {
    chagne () {
      console.log(33)
    }
  },
  components: {
    C2
  }
})
