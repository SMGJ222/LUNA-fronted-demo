<script setup>

defineProps({
    title: String,
    description: String,
    image: String,
    color: String,
})


</script>
<template>
    <div class="w-[260px] h-[166px] border rounded-[10px] relative">
        <div class="flex mt-5 ml-5">
            <div class="rounded-full w-[5px] h-6 divider"></div>
            <p class="ml-2 text-xl font-bold">{{title}}</p>
        </div>
        
        <p class="text-[#9E9E9E] w-[220px] h-[84px] ml-5 mr-5 mt-2.5 text-lg">{{description}}</p>
    
        <img :src="image" class=" absolute bottom-[10px] right-[10px]">
    </div>
</template>

<style>

.divider{
    background: var(--divider-color,#4E89FF);
}
</style>