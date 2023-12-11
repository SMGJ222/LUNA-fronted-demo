<script setup>
import CardFunction from './components/CardFunction.vue';

const Function=[
{
        title:"试卷分析",
        image:"/src/assets/pic-1.png",
        description:"使用人工智能和数据挖掘技术在多个层次和维度上分析试卷，如各题型占比、知识点分值和难度变化。"
},
{
        title:"组卷系统",
        image:"/src/assets/pic-2.png",
        description:"智能组卷系统提供丰富的选题方式，自动组卷，以及个性化试卷和答题卡编辑、预览与下载功能。"
},
{
        title:"试题属性预估",
        image:"/src/assets/pic-3.png",
        description:"可视化界面对试题进行基本属性、知识点、知识树状结构等进行预估，为试题分类管理带来便捷。"
},
{
        title:"智能教辅平台",
        image:"/src/assets/pic-4.png",
        description:"深层次多维度海量教育资源分析，个性化资源管理、组织功能，为教师提供智能化教学服务。"
},
]

</script>

<template>
    <div class="h-[1000px] bg-gradient-to-r from-[#F5F6FA] to-[#FFFBFB] flex justify-center items-center">
        <div class="w-[1296px] flex flex-col gap-12 justify-start items-start">
            <div class="w-[414px] flex ">
                <p class="text-4xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text">特色</p>
                <p class="text-4xl font-bold">教育功能，</p>
                <p class="text-4xl font-bold text-transparent bg-gradient-to-r from-red-500 to-indigo-600 bg-clip-text">倾力</p> 
                <p class="text-4xl font-bold">打造</p>
            </div>
            <div class="flex items-start justify-center gap-8">
                <CardFunction v-for="(item,index) in Function" :key="index" :title="item.title" :image="item.image" :description="item.description" ></CardFunction>
            </div>
        </div>
        
    </div>
</template>