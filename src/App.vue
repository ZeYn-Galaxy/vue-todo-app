<script>

export default {
  data() {
    return {
      task: [
        { Title: "Kapan turu?", done: true },
        { Title: "Yoa", done: false }
      ],
      newTitle: "",
    }
  },
  methods: {
    newTask() {
      this.task.push({
        Title: this.newTitle,
        done: false
      })
    },
    deleteTask(index) {
      this.task.splice(index, 1)
    }
  },

  computed: {
    total() {
      return this.task.filter(task => task).length
    },
    ongoing() {
      return this.task.filter(task => !task.done).length
    },
    completed() {
      return this.task.filter(task => task.done).length
    }
  },
  beforeMount() {
    const json = localStorage.getItem('tasks')

    if (!json) return

    this.task = JSON.parse(json)
  },
  watch: {
    task: {
      handler(newValue, oldValue) {
        localStorage.setItem('tasks', JSON.stringify(this.task))
      },
      deep: true,
    }
  }


}

</script>


<template>
  <aside>
    <div class="profile">
      <div class="circle-avatar">
        <img src="./assets/images/avatar.png" alt="">
      </div>
      <div class="user-name">@HelloWorld</div>
    </div>
    <div class="status">
      <div class="total">
        <span class="title">Total</span>
        <span id="total">{{ total }}</span>
      </div>
      <div class="ongoing">
        <span class="title">Ongoing</span>
        <span id="ongoing">{{ ongoing }}</span>
      </div>
      <div class="completed">
        <span class="title">Completed</span>
        <span id="completed">{{ completed }}</span>
      </div>
    </div>
  </aside>
  <main>
    <div class="header">
      <button class="add-task" role="button" @click="newTask">Add Task</button>
      <input type="text" v-model="newTitle" placeholder="Task Title">
    </div>
    <div class="task">
      <div class="task-item" v-for="(item, index) in task">
        <div class="title">{{ item.Title }}</div>
        <div class="checkbox">
          <input type="checkbox" v-model="item.done">
          <font-awesome-icon icon="fa-solid fa-trash" class="task-delete" @click="deleteTask(index)"/>
          <font-awesome-icon icon="fa-solid fa-list-check" class="task-list"/>
        </div>
      </div>
  </div>
</main></template>