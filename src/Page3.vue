<template>
    <div class="bg-[#FAFAFC] h-[1000px] w-full flex flex-col justify-center items-center ">
        <div class="w-[1280px] flex justify-center items-start flex-col">
            <div class="flex h-10 gap-5 w-160 ">
                <button class="ml-2 menu_button">试题资源</button>
                <button class="menu_button">试卷资源</button>
                <!-- <button class="menu_button">知识单元</button> -->
                <button class="menu_button">教材教辅</button>
            </div>

            
            <div class="w-full h-[520px] flex justify-center items-center gap-[60px]">
                
                <div class="mt-10 bg-white border flex flex-col gap-[90px] shadow-md rounded-xl w-[610px] h-[520px]"> 
                    <!-- 图表切换 -->
                    <div class="flex items-center justify-between mx-8 mt-8">
                        <p class="ml-8 font-bold leading-8 text-md">各学科数据统计</p>
                        <button class="h-8 text-xs bg-slate-300 text-sky-800 w-28">显示学段细分</button>
                    </div>
                    <img src="./assets/gram.svg" alt="gram"  class="h-[254px]">
                </div>
                <div class="flex flex-col gap-10 w-[610px]">
                    <div class="flex">
                        <p class="text-4xl font-bold text-transparent bg-gradient-to-r from-[#FF4848] to-[#F0BC2D] bg-clip-text">海量</p>
                        <p class="text-4xl font-bold">教学资源，</p>
                        <p class="text-4xl font-bold text-transparent bg-gradient-to-r from-[#1A52EE] to-[#4CC1F7] bg-clip-text">智能</p> 
                        <p class="text-4xl font-bold">处理</p>
                            

                    </div>
                    <div class="flex flex-col w-full gap-6">
                        <p class="text-xl leading-8 text-left text-gray-500">海量标准化、体系化的教学资源</p>
                        <p class="text-xl leading-8 text-left text-gray-500">基于高效准确的试题相似度评估算法的高质量资源库</p>
                        <p class="text-xl leading-8 text-left text-gray-500">智能与个性化的资源录入、查询和管理服务</p>
                    </div>
                    <div class="h-[52px] flex gap-4 ">
                        <div class="h-full bg-[#D46A6A]  rounded-[10px] flex gap-1.5 justify-center items-center px-5">
                            <img src="@/assets/button1.svg" class="w-4">
                            <p class="select_button_text">试题录入</p>
                        </div>
                        <div class="h-full bg-[#5986D4]  rounded-[10px] flex gap-1.5 justify-center items-center px-5">
                            <img src="@/assets/button2.svg" class="w-4">
                            <p class="select_button_text">试题检索 </p>
                        </div>
                        <div class="h-full bg-[#6759D4]  rounded-[10px] flex gap-1.5 justify-center items-center px-5">
                            <img src="@/assets/button3.svg" class="w-4">
                            <p class="select_button_text">智能分析</p>
                        </div>
                         
                    </div>
                </div>   
                
            </div>
               
        </div>
        
    </div>


</template>

<style>
.menu_button{
    @apply text-[#707070] text-lg font-bold font-heiti hover:border-none hover:underline hover:underline-offset-4 hover:text-black;
}

.select_button_text{
    @apply text-white text-lg font-medium;
}
</style>