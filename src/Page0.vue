
<template>
    <!-- fixed top-0 left-0  -->
    <div class="w-full">
        <div class="relative h-[590px] w-full flex flex-col bg-white border justify-center items-center">
            <div id="Page0-bg" class="h-[620px]  w-full flex  bg-gradient-to-bl to-[#d4f1f4] from-[#aec9f3] items-center justify-center">
                <div id="Logo" class="flex items-center justify-center gap-3">
                    <div id="logo-img">
                        <img src="@/assets/homepage_logo.png" class="w-32">
                    </div>
                    <div id="logo-text" class="h-[108px] flex flex-col gap-2">
                        <h1 class="text-5xl text-[#222222] font-medium tracking-[0.25rem] leading-[56px]">LUNA</h1>
                        <p class="text-2xl leading-8 text-[#555555]">智慧教育知识图谱</p>
                    </div>
                </div>
            </div>
            <div id="SearchBox" class="absolute bottom-0 translate-y-1/2 flex items-center justify-center h-16 rounded-[32px] w-[640px] bg-white border gap-3 z-10">
                <img src="@/assets/search.svg" class="w-5 ml-5">
                <input type="text"  placeholder="三角函数" class="grow h-[26px]">
                <button class="w-32 my-1 h-[56px] mr-1 rounded-[32px] bg-gradient-to-r from-[#7BAFEE] to-[#7786EB] text-xl text-white">搜索</button>
            </div>
        </div>
    </div>
</template>