<script setup>

defineProps({
    title: String,
    description: String,
    image: String,
})

</script>

<template>
    <div class="w-[300px] h-[400px] rounded-3xl">
        <img :src="image" alt="2023-analysis" class="w-[300px] h-[150px]  rounded-t-3xl">
          
        <div class="h-[250px] w-[300px] p-5 rounded-b-3xl shadow-md bg-white  flex flex-col gap-2.5">
            <p class="text-2xl font-bold text-left text-black">{{ title }}</p>
            <p class="text-xl text-left text-gray-400 ">{{description}}</p>
            <p class="text-lg text-blue-400">了解更多→</p>
        </div>

    </div>    

</template>