<script setup>

defineProps({
    title: String,
    description: String,
    image: String,
    url: String,
})

</script>


<template>
    <div>
        <a :href="url" class="w-56"><img :src="image" alt="2023-analysis" class="w-[300px] h-[185px] rounded-t-lg"></a>
        <div class="pt-4 text-left border rounded-b-lg shadow-md w-[300px] h-60">
            <a :href="url" class="ml-4 mr-4 text-xl font-bold text-left text-black ">{{title}}</a>
            <p class=" mt-2 ml-4 mr-4 leading-2 text-left text-[#999999] text-md w-[268px] h-[130px]">{{description}}</p>
            <a :href="url" class="mb-5 ml-4 text-lg font-bold text-blue-400">立即前往→</a>
        </div>
    </div>
</template>