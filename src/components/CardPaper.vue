<script setup>

defineProps({
    title1: String,
    title2: String,
    author: String,
    description: String,
    image: String,
    url: String,
    volumn: String,
})


</script>


<template>
     <div class="h-[392px] w-[340px] bg-white border rounded-xl flex flex-col justify-center items-center gap-4">
        <div class="mt-[30px] w-[340px] flex flex-col justify-center items-center gap-3">
            <img :src="image" class="w-20 ">
            <p class="w-full h-[55px] font-bold text-center text-black text-xl">{{title1}}<br>{{ title2 }}</p>
            <p class="text-lg font-semibold text-center text-blue-400 ">{{author}}</p>
        </div>
        
        <p class="text-md w-[304px] text-center text-gray-400">{{ description }}</p>
        <a :href="url" class="text-lg font-medium text-blue-400">{{volumn}}→</a>
    </div>
</template>