<template lang='pug'>
  .todo-form
    el-input(placeholder="Title" v-model="createTitle")
    el-date-picker(type="datetime" v-model="createLimit" placeholder="limit")
    el-button(@click="create(createTitle,createLimit)" type="primary" round)
      | create
</template>

<script>
export default {
  name: 'todo-form',
  data () {
    return {
      createTitle: '',
      createLimit: ''
    }
  },
  methods: {
    create: function (createTitle, createLimit) {
      if (createTitle !== '' && createLimit !== '') {
        const obj = {
          title: createTitle,
          limit: createLimit
        }
        this.$emit('create-item', obj)
        this.createTitle = ''
        this.createLimit = ''
      }
    }
  }
}
</script>