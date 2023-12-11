<script setup>
import Card from '@/components/Card.vue';

const paper_analysis=[{
    title:"大模型插件技术+知识增强",
    url:"https://mp.weixin.qq.com/s/pcC6_9JhJJjgnrFYWz7kHQ",
    image:"/src/assets/analysis-1.png",//   ./assets  x     ../assets  x
    description:"2023年高考试卷分析基于大模型插件技术，自研知识增强的解题分析模型， 围绕高考改革和命题要求进行高考试卷和试题的分析， 展现新时代高考改革的新面貌。"
},
{
    title:"区分度+信度+多学科分析",
    url:"https://mp.weixin.qq.com/s/bX6MJSBqFy1JSkFsiAYX4g",
    image:"/src/assets/analysis-2.png",
    description:"2022年高考试卷分析基于人工智能+大数据技术与实际结合增加了区分度、 信度等多方面的分析，并且支持更多学科分析，带来更全面的高考解读。"
},

{
    title:"全科分析+智能分析算法",
    url:"https://mp.weixin.qq.com/s/-EWOwUskrwqYSQGocdLCJQ",
    image:"/src/assets/analysis-3.png",
    description:"2021年高考试卷分析基于LUNA团队设计的智能分析算法如试卷自动 切分， 试题知识点预估等对高考各学科的试题特点进行了全方位的分析。"
},

{
    title:"单科分析+人工智能+大数据",
    url:"https://mp.weixin.qq.com/s/ep7wFHu4arbvV0C8DXEh-g",
    image:"/src/assets/analysis-4.png",
    description:"2020年高考试卷分析首次采用人工智能、大数据分析技术（如自然语言处理，机器学习， 知识图谱等）对数学进行了单科分析，并且提供高稳定性的教育资源分析。"
},

]

</script>

<template>
    <!-- fixed top-[620px] left-0  -->
    <div class="flex h-[1100px] w-full bg-[#FAFAFC] -z-10">
        <div class="flex flex-col items-center justify-center w-full gap-[100px]">
            <div class="flex flex-col items-center justify-center w-[956px] gap-8">
                <h2 class="text-5xl font-medium">寓智于教，致知未来</h2>
                <p class="text-xl font-semibold">
                    智慧教育知识图谱（LUNA）致力于为广大师生提供深层次、多维度的海量教育资源处理分析工具，与智能、个性化的教育资源组织、分析与评估服务。相关智能分析算法为高考试卷分析、AI实验室等提供了强大的技术支持
                </p>
            </div>
            <div class="flex items-center justify-center gap-5">
                <button class="bg-transparent">
                    <img src="@/assets/left-arrow.svg">
                </button>
                <Card v-for="(item,index) in paper_analysis" :key="index" :title="item.title" :image="item.image" :description="item.description" :url="item.url"></Card>
                <button class="bg-transparent">
                    <img src="@/assets/right-arrow.svg">
                </button>
            </div>    
        </div>   
    </div>
    


</template>
