<script setup>
import { ref } from 'vue'

const emit = defineEmits(['save'])
const inputTask = ref('')
const todo = ref({
    name: '',
    tasks: []
})

const addTask = () => {
    if (inputTask.value.trim() === '') return

    todo.value.tasks.push({
        content: inputTask.value,
        done: false,
        createdAt: new Date().getTime()
    })

    inputTask.value = ''
}

const removeTodo = task => {
    todo.value.tasks = todo.value.tasks.filter(t => t !== task)
}

const save = () => {
    if (todo.value.name.trim() === '' || todo.value.tasks.length <= 0) return
    emit('save', todo.value)
}

</script>

<template>
    <main class="w-full rounded-lg border p-5 border-gray-600">
        <header class="header">
            <h2 class="mb-2 text-md font-bold text-gray-800">Create todo here: </h2>
        </header>

        <section class="mb-5">
            <h4 class="mb-2 text-xs font-bold text-gray-500">What's the title of your todo?</h4>
            <input
                class="w-full px-1.5 py-2 text-sm text-gray-700 border rounded-md border-solid border-gray-500 focus:outline-none focus:ring focus:ring-gray-300"
                type="text"
                v-model="todo.name"
            />
        </section>

        <section class="mb-5">
            <h4 class="label mb-2 text-xs font-bold text-gray-500">Tasks of your todo</h4>
            
            <div class="list" v-show="todo.tasks.length > 0">
                <div
                    v-for="(todo, key) in todo.tasks"
                    :key="key"
                    class="w-full flex items-center mb-3 px-1.5 py-2 text-sm text-gray-700 border rounded-md border-solid border-gray-500 focus:outline-none focus:ring focus:ring-gray-300"
                >
                    <div class="w-full">
                        <input class="w-full focus:outline-none px-1" type="text" v-model="todo.content" />
                    </div>
    
                    <div class="flex items-center">
                        <button class="text-xs text-white p-1 rounded-md bg-red-400" @click="removeTodo(todo)">Remove</button>
                    </div>
                </div>
            </div>

            <input
                class="w-full px-1.5 py-2 text-sm text-gray-700 border rounded-md border-solid border-gray-500 focus:outline-none focus:ring focus:ring-gray-300"
                type="text"
                placeholder="Hit 'Enter' to add"
                v-model="inputTask"
                @keyup.enter="addTask"
            />
        </section>

        <section>
            <button class="w-full text-white text-sm p-1 rounded-md bg-green-400" @click="save()">Save</button>
        </section>

    </main>
</template>

<style scoped>
/* .wrapper {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 30px;
} */

/* .header {
    text-align: center;
}

.wrapper .input {
    display: block;
	width: 100%;
	font-size: 1rem;
	padding: 1rem;
	color: var(--dark);
	background-color: #FFF;
	border-radius: 0.5rem;
	box-shadow: var(--shadow);
}

.add-wrapper {
    display: flex;
    justify-content: space-around;
}

.add-wrapper input[type="text"] {
    flex: 1 1 auto;
}

.add-wrapper button {
    padding: 1rem;
    height: 50px;
	font-size: 1rem;
	border-radius: 0.5rem;
    background-color: #48dbb9;
	color: #ffffff;
	cursor: pointer;
	transition: 0.2s ease-in-out;
}

.save {
    width: 100%;
    padding: 1rem;
	font-size: 1rem;
	border-radius: 0.5rem;
    background-color: #48dbb9;
	color: #ffffff;
	cursor: pointer;
    text-align: center;
}

.label {
    margin-bottom: 1rem;
} */
</style>