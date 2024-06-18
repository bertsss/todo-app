<script setup>
import TodoForm from './components/TodoForm.vue'
import Card from './components/Card.vue'

import { ref, onMounted, computed, watch, reactive } from 'vue'

let setOfTodos = ref([])
// const todos = ref([])
const name = ref('')

const inputContent = ref('')
const inputCategory = ref(null)

const save = (todo) => {
    setOfTodos.value.unshift(todo)
    localStorage.setItem('setOfTodos', JSON.stringify(setOfTodos.value))
}

// const todosAsc = computed(() => todos.value.sort((a,b) => {
//     return b.createdAt - a.createdAt
// }))

// const addTodo = () => {
//     if (inputContent.value.trim() === '' || inputCategory.value === null) return

//     todos.value.push({
//         content: inputContent.value,
//         category: inputCategory.value,
//         done: false,
//         createdAt: new Date().getTime()
//     })

//     inputContent.value = ''
//     inputCategory.value = null
// }

// const removeTodo = todo => {
//     todos.value = todos.value.filter(t => t !== todo)
// }

// watch(todos, (newVal) => {
//     localStorage.setItem('todos', JSON.stringify(newVal))
// }, { deep: true })

watch(name, (newVal) => {
    localStorage.setItem('name', newVal)
})

onMounted(() => {
    name.value = localStorage.getItem('name') || ''
    // todos.value = JSON.parse(localStorage.getItem('todos')) || []
    setOfTodos.value = JSON.parse(localStorage.getItem('setOfTodos')) || []
})
</script>

<template>
    <main class="app p-6 flex justify-center">
        <div class="flex flex-col w-full md:w-[500px]">
            <section class="flex w-full">
                <h2 class="mb-4 text-lg font-bold">
                    What's up,
                    <input
                        class="focus:outline-none rounded-lg p-1"
                        type="text"
                        placeholder="name here"
                        v-model="name"
                    >
                </h2>
            </section>

            <div class="flex mb-10">
                <TodoForm @save="save"/>
            </div>

            <section>
                <h2 class="text-lg text-gray-800 mb-4 font-bold">Your list of todos:</h2>
                <Card
                    class="card-container"
                    v-for="(item, key) in setOfTodos" :key="key"
                    :todo="item"
                >
                </Card>
            </section>
        </div>
        

        <!-- <section class="create-todo">
            <h3>CREATE A TODO</h3>

            <form @submit.prevent="addTodo">
                <h4>What's on your todo list?</h4>
                <input
                    type="text"
                    placeholder="e.g. make a video"
                    v-model="inputContent"
                />

                <h4>Pick a category</h4>

                <div class="options">
                    <label>
                        <input
                            type="radio"
                            name="category"
                            value="business"
                            v-model="inputCategory"
                        />
                        <span class="bubble business"></span>
                        <div>Business</div>
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="category"
                            value="personal"
                            v-model="inputCategory"
                        />
                        <span class="bubble personal"></span>
                        <div>Personal</div>
                    </label>
                </div>

                <input type="submit" value="Add todo">
            </form>
        </section> -->

        <!-- <section class="todo-list">
            <h3>TODO LIST</h3>
            <div class="list">
                <div
                    v-for="(todo, key) in todosAsc"
                    :key="key"
                    :class="`todo-item ${todo.done && 'done'}`"
                >
                    <label>
                        <input type="checkbox" v-model="todo.done" />
                        <span :class="`bubble ${todo.category}`"></span>
                    </label>

                    <div class="todo-content">
                        <input type="text" v-model="todo.content" />
                    </div>

                    <div class="actions">
                        <button class="delete" @click="removeTodo(todo)">Delete</button>
                    </div>
                </div>
            </div>
        </section> -->
    </main>
</template>

<style scoped>
/* .app {
    display: flex;
    justify-content: center;
}

.container {
    width: 100%;
}

@media only screen and (min-width: 768px) {
    .container {
        width: 500px;
    }
}

.form-container {
    width: 100%;
} */
</style>
