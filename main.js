var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    show: false,
    list: ['apple','banana','orange','strawberry']
  },
  methods: {
    handleClick: function(event) {
      alert(event.target)
    }
  }
})

console.log(app.message)