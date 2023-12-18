
<template>
    <!-- fixed top-0 left-0  -->
    <div class="w-full">
        <div class="relative h-[590px] w-full flex flex-col bg-white border justify-center items-center">
            <div id="Page0-bg" class="h-[620px]  w-full flex  bg-gradient-to-bl to-[#D5F2F4] from-[#ABC5F3] via-[#C2DEF4] items-center justify-center">
                <div id="Logo" class="flex items-center justify-center gap-3">
                    <div id="logo-img">
                        <img src="@/assets/homepage_logo.png" class="w-32">
                    </div>
                    <div id="logo-text" class="h-[108px] flex flex-col gap-2">
                        <h1 class="text-5xl leading-[56px] text-[#222222] font-medium tracking-[0.24em] text-center">LUNA</h1>
                        <p class="text-2xl text-center leading-8 text-[#555555]">智慧教育知识图谱</p>
                    </div>
                </div>
            </div>
            <div id="SearchBox" class="absolute bottom-0 translate-y-1/2 flex items-center justify-center h-16 rounded-[32px] w-[640px] bg-white shadow gap-3 z-10">
                <img src="@/assets/search.svg" class="w-5 ml-5">
                <input type="text"  placeholder="三角函数" class="grow h-[26px] placeholder:text-[#737373] placeholder:font-medium">
                <button class="searching">搜索</button>
            </div>
        </div>
    </div>
</template>
<style>

.searching{
    box-shadow:1px 2px 6px 0px rgba(0, 0, 0, 0.08);
}

.searching{
    @apply  w-32 my-1 h-[56px] mr-1 rounded-[32px] bg-gradient-to-r  from-[#7BAFEE] to-[#7786EB] text-xl text-white
}

</style>