<script setup>
import CardAI from './components/CardAI.vue';

const aicard=[{
    title:"试卷分析",
    image:"AIarrow1.svg",
    description:"使用人工智能和数据挖掘技术在多个层次和维度上分析试卷"  ,
    color:"#4E89FF"
    
},
{
    title:"图片转写",
    image:"AIarrow2.svg",
    description:"精准识别试题照片中的文字、公式以及附图附表，适用于试题录入",
    color:"#FFAF4E"  
},
{
    title:"属性预估",
    image:"AIarrow3.svg",
    description:"从包含复杂语义的试题文本出发挖掘试题的难度、区分度等属性" ,
    color:"#A64EFF" 
},
{
    title:"相似度估计",
    image:"AIarrow4.svg",
    description:"基于人工智能算法给出两个题目之间的多维度相似度预估",
    color:"#74E149"  
},
]



</script>
<template>
    <div class="h-[1000px] w-full bg-gradient-to-r from-[#FBFFF5] to-[#DDE2F6] flex justify-center items-center">
        <div class="w-[1280px] flex flex-col gap-12">
            <div class="flex text-4xl font-bold tracking-wider font-roboto">
                <p class="text-transparent bg-gradient-to-br from-sky-500 to-cyan-300 bg-clip-text">AI</p>
                <p >实验室，打造</p>
                <p class="text-transparent bg-gradient-to-b from-pink-500 to-orange-500 bg-clip-text">开源生态</p> 
            </div>
            <div class="h-[640px] flex gap-[60px]">
                <div class=" h-[640px] w-[610px] bg-white box rounded-3xl mr-5 flex flex-col gap-4">
                    <div class="flex flex-col items-center justify-center gap-5 mt-10">
                        <p class="font-semibold text-[32px] leading-10 tracking-[0.03em] font-mono text-[#3D3D3D]">特色教育功能开放体验</p>
                        <div class="w-[547px] leading-8 text-xl text-center tracking-[0.03em] font-mono">
                            <span class=" text-[#999999]">LUNA团队依托领先的技术实力，为用户提供</span>
                            <span class="font-semibold ">高品质</span>
                            <span class=" text-[#999999]">的教育产品及服务，目前推出了包括图片转写、 属性预估等多款</span>
                            <span class="font-semibold ">在线服务</span>
                            <span class=" text-[#999999]">，旨在为用户提供智能练习、难题解析等</span>
                            <span class="font-semibold ">多元化</span>
                            <span class=" text-[#999999]">的智能教育服务。</span>
                            <!-- <p class="mx-10 text-[#999999]">LUNA团队依托领先的技术实力，为用户提供高品质的的教育产品及服务，目前推出了包括图片转写、 属性预估等多款在线服务，旨在为用户提供智能练习、难题解析等多元化的智能教育服务。</p> -->
                        </div>    
                    </div>
                    <div class="flex flex-col items-center justify-center gap-6"> 
                        <div class="flex gap-6">
                            <CardAI :title="aicard[0].title" :description="aicard[0].description" :image="aicard[0].image" :color="aicard[0].color" class=" bg-gradient-to-br from-[#FCFCFC]/48 to-[#E9EFFC]/100" ></CardAI>  
                            <CardAI :title="aicard[1].title" :description="aicard[1].description" :image="aicard[1].image " :color="aicard[1].color" class="bg-gradient-to-br from-[#FCFCFC] to-[#FBEED4]/100"></CardAI>
                        </div>
                        <div class="flex gap-6">
                            <CardAI :title="aicard[2].title" :description="aicard[2].description" :image="aicard[2].image" :color="aicard[2].color" class="bg-gradient-to-br from-[#FCFCFC]/0 to-[#FFF8FF]/100"></CardAI>  
                            <CardAI :title="aicard[3].title" :description="aicard[3].description" :image="aicard[3].image" :color="aicard[3].color" class=" bg-gradient-to-br from-[#FAFFF9] to-[#FCFCFC]"></CardAI>          
                        </div>
                    </div>


                </div>
                <div class="h-[640px] w-[610px] bg-white box rounded-3xl flex flex-col justify-center items-center">
                    <div class="flex flex-col items-center justify-center gap-5">
                        <p class="mt-10 text-[32px] leading-10 font-semibold tracking-[0.03em] text-[#3D3D3D] font-mono">EduX开源工具集</p>
                        <div class="font-mono text-[#999999] text-xl tracking-[0.03em] leading-8">
                            <span class="">LUNA团队设计的用于数据挖掘的</span>
                            <span class="text-[#353739] font-semibold">开源</span>
                            <span class="">工具集合</span>
                        </div>
                        <!-- <p class="text-[#999999] text-xl">LUNA团队设计的用于数据挖掘的开源工具集合</p> -->
                        <div class="flex font-mono justify-center text-[#4E89FF] text-lg font-semibold leading-[26px] tracking-[0.03em]">
                            <a href="https://github.com/bigdata-ustc/EduNLP" >EduNLP</a>
                            <p>&ensp;·&ensp;</p>
                            <a href="https://github.com/bigdata-ustc/EduData" >EduData</a>
                            <p >&ensp;·&ensp;</p>
                            <a href="https://github.com/bigdata-ustc/EduCDM" >EduCDM</a>
                            <p >&ensp;·&ensp;</p>
                            <a href="https://github.com/bigdata-ustc/EduKTM" >EduKTM</a>
                        </div>
                    </div>
                    <img src="@/assets/edux.png" alt="edux" class="mt-8  w-[546px]">
                </div>
            </div>
        </div>
    </div>
</template>


<style>

.box{
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.06);
}

</style>