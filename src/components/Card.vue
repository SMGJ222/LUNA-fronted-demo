<script setup>

defineProps({
    title: String,
    description: String,
    image: String,
    url: String,
})

import getURL from '../urltool';

</script>


<template>
    <div>
        <a :href="url" class="w-56"><img :src="getURL(image)" alt="2023-analysis" class="w-[300px] h-[185px] rounded-t-xl"></a>
        <div class="cardborder pt-4 text-left  rounded-b-xl  w-[300px] h-60 flex flex-col gap-3">
            <div class="flex flex-col gap-2">
                <a :href="url" class=" ml-4 mr-4 text-xl font-bold text-left tracking-wider text-[#3D3D3D] ">{{title}}</a>
                <p class=" mt-2 ml-4 mr-4 leading-2 text-left text-[#999999] tracking-wider text-[16px] leading-[26px] w-[268px] h-[130px]">{{description}}</p>
            </div>
            <a :href="url" class="mb-5 ml-4 text-lg font-bold text-blue-400">立即前往→</a>
        </div>
    </div>
</template>

<style>

.cardborder{
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
}

</style>