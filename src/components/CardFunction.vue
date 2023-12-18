<script setup>

defineProps({
    title: String,
    description: String,
    image: String,
})

import getURL from '../urltool';


</script>

<template>
    <div class="w-[300px] h-[400px] rounded-3xl">
        <img :src="getURL(image)" alt="2023-analysis" class="w-[300px] h-[150px]  rounded-t-3xl">
          
        <div class="h-[250px] w-[300px] p-5 rounded-b-3xl cardboarder bg-white  flex flex-col gap-2.5 tracking-wider">
            <p class="text-2xl font-bold text-left text-black">{{ title }}</p>
            <p class="text-xl text-left text-gray-400 ">{{description}}</p>
            <div class="flex gap-1">
                 <p class="text-lg leading-8  text-[#4E89FF]">了解更多</p>
                 <img src="@/assets/arrow-states.svg" class="z-40">
            </div>
           
        
        </div>

    </div>    

</template>

<style>

.cardboarder{
    box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.08);
}
</style>