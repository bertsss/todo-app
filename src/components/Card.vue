<script setup>
const props = defineProps({
    todo: Object
})

</script>

<template>
    <main class="rounded-md border border-card-border mb-5 p-5 text-gray-500 shadow-md shadow-card-shadow">
        <h2 class="font-bold text-md text-gray-700 mb-1">{{ todo.name }}</h2>

        <div v-for="(todo, key) in todo.tasks" :key="key">
            <h5 class="text-sm">- {{ todo.content }}</h5>
        </div>
    </main>
</template>

<style scoped>
/* .wrapper {
    border: 1px solid #d4d4d4;
    border-radius: 10px;
    padding: 20px 15px;
    box-shadow: 0px 0px 8px 3px #c9c9c9;
    margin-bottom: 30px;
}

.wrapper > * {
    margin-bottom: 10px;
} */
</style>