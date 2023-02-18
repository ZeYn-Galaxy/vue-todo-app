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
        <span id="total">10</span>
      </div>
      <div class="ongoing">
        <span class="title">Ongoing</span>
        <span id="ongoing">10</span>
      </div>
      <div class="completed">
        <span class="title">Completed</span>
        <span id="completed">10</span>
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
        </div>
      </div>
    </div>
  </main>
</template>