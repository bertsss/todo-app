<script setup>
const props = defineProps({
    todo: Object
})
</script>

<template>
    <main class="relative rounded-md border border-card-border mb-5 p-5 text-gray-500 shadow-md shadow-card-shadow">
        <h2 class="font-bold text-md text-gray-700 mb-2">{{ todo.name }}</h2>
        <p @click="$emit('remove')" class="absolute top-5 right-5 w-[10px] text-red-500 cursor-pointer">x</p>

        <!-- <div class="mb-2" v-for="(todo, key) in todo.tasks" :key="key">
            <h5 class="text-sm"><span class="list-disc"></span> {{ todo.content }}</h5>
        </div> -->

        <ul class="ml-4 list-disc">
            <li class="text-sm mb-2" v-for="(todo, key) in todo.tasks" :key="key">
                {{ todo.content }}
            </li>
        </ul>
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