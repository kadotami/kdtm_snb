<template lang="pug">
  .todo
    h1 TodoList  
    todo-list(@delete-item="deleteItem" v-for="item in items" :item="item" :key="item.id")
    todo-form(@create-item="createItem")
</template>

<script>
import TodoForm from './TodoForm'
import TodoList from './TodoList'
export default {
  name: 'todo',
  data () {
    return {
      items: [
        { id: 1, title: '領収書を準備する', limit: '2018-08-01' },
        { id: 2, title: 'Vue.jsハンズオンの資料を作る', limit: '2018-08-01' },
        { id: 3, title: '参加者の人数を確認する', limit: '2018-08-01' },
        { id: 4, title: 'ピザを注文する', limit: '2018-08-01' },
        { id: 5, title: '参加費のお釣りを準備する', limit: '2018-08-01' },
        { id: 6, title: '会場設営をする', limit: '2018-08-01' }
      ]
    }
  },
  components: {
    TodoForm,
    TodoList
  },
  methods: {
    createItem: function (item) {
      this.items.push(item)
    },
    deleteItem: function (id) {
      let target = 0
      this.items.filter(function (item, index) {
        if (item.id === id) {
          target = index
        }
      })
      this.items.splice(target, 1)
    }
  }
}
</script>