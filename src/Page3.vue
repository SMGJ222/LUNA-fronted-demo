<template>
    <div class="bg-[#FAFAFC] h-[1000px] w-full flex flex-col justify-center items-center ">
        <div class="w-[1280px] flex justify-center items-start flex-col gap-8 ml-20">
            <div class="flex h-10 gap-5 w-160 ">
                <button class="ml-2 menu_button">试题资源</button>
                <button class="menu_button">试卷资源</button>
                <!-- <button class="menu_button">知识单元</button> -->
                <button class="menu_button">教材教辅</button>
            </div>

            
            <div class="w-full h-[520px] flex justify-center items-center gap-[60px]">
                
                <div class="mt-10 bg-white  flex flex-col gap-[90px] shadow-md rounded-3xl w-[610px] h-[520px]"> 
                    <!-- 图表切换 -->
                    <div class="flex items-center justify-between mx-8 mt-8 h-[44px]">
                        <p class="text-2xl font-bold tracking-wider">各学科数据统计</p>
                        <button class="text-md leading-8 bg-[#F7F7F7] text-[#5C87BF] rounded-xl px-3 py-1.5">显示学段细分</button>
                    </div>
                    <img src="./assets/gram.svg" alt="gram"  class="h-[254px]">
                </div>
                <div class="flex flex-col gap-10 w-[610px] ">
                    <div class="flex text-4xl font-bold ">
                        <p class="text-transparent bg-gradient-to-r from-[#FF4848] to-[#F0BC2D]/50 bg-clip-text">海量</p>
                        <p >教学资源，</p>
                        <p class=" text-transparent bg-gradient-to-r from-[#1A52EE] to-[#4CC1F7] bg-clip-text">智能</p> 
                        <p >处理</p>
                            

                    </div>
                    <div class="flex flex-col w-full gap-6 text-xl leading-8 tracking-wider text-left text-gray-500">
                        <p >海量标准化、体系化的教学资源</p>
                        <p >基于高效准确的试题相似度评估算法的高质量资源库</p>
                        <p >智能与个性化的资源录入、查询和管理服务</p>
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
    @apply text-[#707070] text-2xl font-semibold tracking-wider hover:border-none hover:underline hover:underline-offset-4 hover:text-black;
}

.select_button_text{
    @apply text-white text-lg font-medium leading-[18px] tracking-wider;
}
</style>