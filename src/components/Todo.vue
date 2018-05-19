<template>
  <div class="todo">
    <h1>TodoList</h1>
    <li v-for="item in items">
      <label v-bind:class="{ done: item.isChecked }">
        {{ item.title }}
      </label>
    </li>
    <todo-form></todo-form>
  </div>
</template>

<script>
import TodoForm from './TodoForm'
export default {
  name: 'todo',
  data () {
    return {
      items: [
        { title: '領収書を準備する', isChecked: true },
        { title: 'Vue.jsハンズオンの資料を作る', isChecked: true },
        { title: '参加者の人数を確認する', isChecked: false },
        { title: 'ピザを注文する', isChecked: false },
        { title: '参加費のお釣りを準備する', isChecked: false },
        { title: '会場設営をする', isChecked: false }
      ]
    }
  },
  components: {
    TodoForm
  }
}
</script>