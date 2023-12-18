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

import getURL from '../urltool';


</script>


<template>
     <div class="h-[392px] w-[340px] bg-white rounded-xl flex flex-col justify-center items-center gap-4">
        <div class="mt-[30px] w-[340px] flex flex-col justify-center items-center gap-3">
            <img :src="getURL(image)" class="w-20 ">
            <p class="w-full h-[55px] font-bold text-center text-[#333333] text-xl">{{title1}}<br>{{ title2 }}</p>
            <p class="text-lg leading-[26px] font-semibold text-center text-[#5589F2] ">{{author}}</p>
        </div>
        
        <p class="text-md w-[304px] text-center text-gray-400">{{ description }}</p>
        <div class="flex gap-1">
            <a :href="url" class="text-lg leading-8 tracking-wider font-medium text-[#4E89FF]">{{volumn}} 
            </a>
            <img src="@/assets/arrow-states.svg" class="z-40">
        </div>
        
    </div>
</template>