<script setup>
import CardPaper from './components/CardPaper.vue';
const paper=[{
    title1: "基于对比学习的",
    title2: "数学试题预训练方法",
    author: "宁雨亭",
    description: "提出了一种新颖的框架——增量认知诊断（ICD）， 旨在提供一种揭示学习者对知识概念的熟练程度的方法， 并且我们将认知诊断定制到智能教育的在线场景中。",
    image:"/src/assets/paper-1.png",
    url:"https://luna.bdaa.pro",
    volumn:"CIKM·2023",
},

{
    title1: "结构化试卷的",
    title2: "表征学习",
    author: "单明晖",
    description: "设计预训练目标学习试卷的层次结构、试卷结构和试卷难度之间的关联， 进一步提升试卷表征能力； 学习到的试卷表征应用于试卷难度预估等下游任务。",
    image:"/src/assets/paper-2.png",
    url:"https://luna.bdaa.pro",
    volumn:"AAAI·2023",
},

{
    title1: "基于项目反应排序的",
    title2: "认知诊断模型",
    author: "童世炜",
    description: "提出项目反应排名框架（IRR），旨在引入成对 学习融入认知诊断对 项目响应之间的单调性进行建模。 考虑了优化过程中的单调性。",
    image:"/src/assets/paper-3.png",
    url:"https://luna.bdaa.pro",
    volumn:"IJCAI·2023·2023",
},

// {
//     title1: "增量认知诊断模型",
//     title2: "",
//     author: "童世炜",
//     description: "提出了一种新颖的框架——增量认知诊断（ICD）， 旨在提供一种揭示学习者对知识概念的熟练程度的方法， 并且我们将认知诊断定制到智能教育的在线场景中。",
//     image:"/src/assets/paper-4.png",
//     url:"https://luna.bdaa.pro",
//     volumn:"KDD·2023",
// },

]
</script>

<template>
    <div class="z-20 h-[1000px] w-full flex justify-center items-center flex-col gap-[60px] bg-gradient-to-r from-[#DFE5F7] to-[#FFFBFB]">
        <div class="h-[300px] w-full flex flex-col justify-center items-center gap-8 z-50 mt-16">
            <div class="flex items-center justify-center w-full">
                <h2 class="text-[#3D3D3D] font-medium text-5xl">
                    产学研结合，相辅相成
                </h2>
            </div>
            <div class="w-[900px]">
                <p class="text-xl font-medium text-[#444444]">
                    LUNA自成立以来一直致力于探索前沿的智慧教育和大数据研究的实践落地，并在技术落地的过程中为学术研究提供数据支撑、灵感与思考，二者相辅相成、紧密结合。近年来，LUNA团队已取得丰硕的学术研究成果。
                </p>
            </div>
        </div>
        <div class="flex items-center justify-center gap-5 mb-[185px]">
            <button class="bg-transparent">
                <img src="@/assets/left-arrow.svg">
            </button>
            <CardPaper v-for="(item,index) in paper" :key="index" :title1="item.title1" :title2="item.title2" :author="item.author" :image="item.image" :description="item.description" :url="item.url" :volumn="item.volumn"></CardPaper>
            <!-- <CardPaper></CardPaper> -->
            <button class="bg-transparent">
                <img src="@/assets/right-arrow.svg">
            </button>
            
        </div>
    </div>
</template>
