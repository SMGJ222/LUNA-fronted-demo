<script setup>
const my_function = () => {
  document.getElementById("demo").innerHTML = "Hello World";
};

const navgitation = (num) => {
  var nav = document.getElementById("nav"+num);


};


const toPage = (url) =>{
  window.open(url,'_self');
};



</script>

<template>

  <div class="fixed top-0 left-0 z-10 w-full h-16">
    <div class="fixed top-0 left-0 w-full h-16 bg-white/80 -z-10">
    <!-- 模糊背景效果未实现 -->
    </div>
    <img src="./assets/luna_logo.png" alt="LUNA logo" class="z-10 mt-4 ml-6 w-28 h-18">
    <ul class="fixed right-0 flex top-2">
      
      <li class="p-3 text-xl font-extrabold font-heiti ">
           资源检索
           <div id="nav1"></div>
      </li>

      <li class="p-3 text-xl font-extrabold font-heiti ">
           数据中台
      </li>
      <li class="p-3 text-xl font-extrabold font-heiti ">
           AI实验室
      </li>
      <li class="p-3 text-xl font-extrabold font-heiti">
           关于
      </li>
      <li class="p-3 text-slate-400 ">
           |
      </li>
      <li class="p-3 text-xl font-extrabold font-heiti">
           登录
      </li>
      <li class="p-3 text-xl font-extrabold font-heiti ">
           注册
      </li>
    </ul>
  </div>
  <div class="absolute left-0 top-0 w-full min-h-20 -z-10 bg-gradient-to-bl to-[#d4f1f4] from-[#aec9f3]">   <br> <br> <br> <br> <br> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> <br>
      
  </div>
  <div class="absolute left-0 flex justify-center w-full top-56 h-2000 -z-10 ">
    <div class="grid grid-cols-2 grid-rows-3 gap-x-0 gap-y-0">
        
      <div  class="col-span-1 row-span-3 ">
        <img src="./assets/homepage_logo.png" alt="LUNA logo" class="w-32 ml-96"></div>
      <!-- <div class="col-span-1 row-span-1 ml-0 text-4xl font-extrabold text-left"> </div> -->
      <div class="col-span-1 row-span-2 mt-6 ml-0 -mb-10 text-5xl font-extrabold text-left">L U N A</div>  
      <div class="col-span-1 row-span-1 text-2xl mr-80">智慧教育知识图谱  </div>
    
    </div>
  </div>

<br><br><br><br><br><br><br><br><br><br><br><br><br>
  <div class="z-10 flex mx-0 my-36 min-h-20">  
    <br><br>
       <img src="./assets/folder.svg" class="z-20 my-0 ml-64 -mr-20">
       <input id="" type="text" class="w-3/5 h-16 pl-16 ml-10 -mr-48 bg-white border-2 border-gray-300 rounded-full shadow-xl text-md" placeholder="在此输入知识点名称">
       <button @click="toPage('https://luna.bdaa.pro/ku')" class="z-20 my-1 text-white bg-blue-400 border-2 border-gray-300 rounded-full w-18 h-14 text-md ml-28">搜索</button>

       <!-- <p id="demo" class="z-40 text-white bg-black">origin</p> -->
      
 </div>
   
   <div class="mt-40 ml-80">
    <div class="z-30 flex -my-36">
        <button class="font-heiti search-button">知识点</button>
        <button class="font-heiti search-button">试题</button>
        <button class="font-heiti search-button">试卷</button>
        <button class="font-heiti search-button">教材教辅</button>
        <button class="search-button">    </button>
        <img src="./assets/folder.svg" alt="select by oneself" class="z-20 my-0 -ml-10">
      </div>

  </div>

  <!-- 显示检索标签未实现 -->

  <!-- page2 -->

  
  <div class="my-96">
      <h1 class="text-5xl font-extrabold text-center">寓智于教，致知未来</h1>
      <br>
      <br>
      <p class="text-lg text-center mx-36">智慧教育知识图谱（LUNA）致力于为广大师生提供深层次、多维度的海量教育资源处理分析工具，与智能、个性化的 教育资源组织、分析与评估服务。 相关智能分析算法为高考试卷分析、AI实验室等提供了强大的技术支持</p>
      <br>
  </div>
  
  <div class="flex ml-0 -mt-80">
    <button class="ml-0 slide_button mt-36">&lt</button>

    <div class="ml-6 w-[300px] h-[425px]">
      
      <a href="https://mp.weixin.qq.com/s/pcC6_9JhJJjgnrFYWz7kHQ" class="w-56"><img src="./assets/analysis-1.png" alt="2023-analysis" class="w-[300px] h-[185px] rounded-t-lg"></a>
      
      <div class="pt-4 text-left border rounded-b-lg shadow-md w-[300px] h-60">
        <a href="https://mp.weixin.qq.com/s/pcC6_9JhJJjgnrFYWz7kHQ" class="ml-4 mr-4 text-xl font-bold text-left text-black ">大模型插件技术+知识增强</a>
        <p class=" mt-2 ml-4 mr-4 leading-2 text-left text-[#999999] text-md w-[268px] h-[130px]">2023年高考试卷分析基于大模型插件技术，自研知识增强的解题分析模型， 围绕高考改革和命题要求进行高考试卷和试题的分析， 展现新时代高考改革的新面貌。</p>
        <a href="https://mp.weixin.qq.com/s/pcC6_9JhJJjgnrFYWz7kHQ" class="mb-5 ml-4 text-lg font-bold text-blue-400">立即前往→</a>
      </div>
      
    </div>

    <div class="ml-5 w-[300px] h-[425px]">
      <a href="https://mp.weixin.qq.com/s/bX6MJSBqFy1JSkFsiAYX4g" class="w-56"><img src="./assets/analysis-2.png" alt="2022-analysis" class="w-[300px] h-[185px] rounded-t-lg"></a>
           
      <div class="pt-4 text-left border rounded-b-lg shadow-md w-[300px] h-60">
        <a href="https://mp.weixin.qq.com/s/bX6MJSBqFy1JSkFsiAYX4g" class="ml-4 mr-4 text-xl font-bold text-left text-black ">区分度+信度+多学科分析</a>
        <p class=" mt-2 ml-4 mr-4 leading-2 text-left text-[#999999] text-md w-[268px] h-[130px]">2022年高考试卷分析基于人工智能+大数据技术与实际结合增加了区分度、 信度等多方面的分析，并且支持更多学科分析，带来更全面的高考解读。</p>
        <a href="https://mp.weixin.qq.com/s/bX6MJSBqFy1JSkFsiAYX4g" class="mb-5 ml-4 text-lg font-bold text-blue-400">立即前往→</a>
      </div>
      
    </div>
    <div class="ml-5 w-[300px] h-[425px]">
      <a href="https://mp.weixin.qq.com/s/-EWOwUskrwqYSQGocdLCJQ" class="w-56"><img src="./assets/analysis-3.png" alt="2021-analysis" class="w-[300px] h-[185px] rounded-t-lg"></a>
      <div class="pt-4 text-left border rounded-b-lg shadow-md w-[300px] h-60">
        <a href="https://mp.weixin.qq.com/s/-EWOwUskrwqYSQGocdLCJQ" class="ml-4 mr-4 text-xl font-bold text-left text-black ">全科分析+智能分析算法</a>
        <p class=" mt-2 ml-4 mr-4 leading-2 text-left text-[#999999] text-md w-[268px] h-[130px]">2021年高考试卷分析基于LUNA团队设计的智能分析算法如试卷自动 切分， 试题知识点预估等对高考各学科的试题特点进行了全方位的分析。</p>
        <a href="https://mp.weixin.qq.com/s/-EWOwUskrwqYSQGocdLCJQ" class="mb-5 ml-4 text-lg font-bold text-blue-400">立即前往→</a>
      </div>
    </div>


    <div class="ml-5 w-[300px] h-[425px]">
      <a href="https://mp.weixin.qq.com/s/ep7wFHu4arbvV0C8DXEh-g" class="w-[300px]"><img src="./assets/analysis-4.png" alt="2020-analysis" class="w-[300px] h-[185px] rounded-t-lg"></a>
      <div class="pt-4 text-left border rounded-b-lg shadow-md w-[300px] h-60">
        <a href="https://mp.weixin.qq.com/s/ep7wFHu4arbvV0C8DXEh-g" class="ml-4 mr-4 text-xl font-bold text-left text-black ">单科分析+人工智能+大数据</a>
        <p class=" mt-2 ml-4 mr-4 leading-2 text-left text-[#999999] text-md w-[268px] h-[130px]">2020年高考试卷分析首次采用人工智能、大数据分析技术（如自然语言处理，机器学习， 知识图谱等）对数学进行了单科分析，并且提供高稳定性的教育资源分析。</p>
        <a href="https://mp.weixin.qq.com/s/ep7wFHu4arbvV0C8DXEh-g" class="mb-5 ml-4 text-lg font-bold text-blue-400">立即前往→</a>
      </div>
    </div>

    <button class="ml-6 slide_button mt-36">&gt</button>
<!-- bg-transparent hover:bg-slate-300 text-white rounded-full w-px h-10 mt-36 ml-3 py-1 pl-3 pr-6 mr-0 -->
  </div>

  <!-- page3 -->

  <br><br><br><br><br><br><br><br>

  
  <div class="absolute left-0 bg-gradient-to-br-to-r -z-10 from-[#eef0fa] to-white w-full">
    <br> <br> <br> <br> 
    <h1 class="text-5xl font-extrabold text-center">产学研结合，相辅相成</h1>
    <br><br>
    <p class="text-lg text-center mx-36">LUNA自成立以来一直致力于探索前沿的智慧教育和大数据研究的实践落地， 并在技术落地的过程中为学术研究提供数据支撑、灵感与思考，二者相辅相成、紧密结合。 近年来，LUNA团队已取得丰硕的学术研究成果。</p>
    <br> <br> <br> <br> <br> <br> <br>
    <br> <br> <br><br> <br> <br><br> <br> <br><br> <br> <br><br>
  </div>

  <div class="z-10 flex">
    <button class="slide_button mt-96">&lt</button>


    <div class="w-64 bg-white border mt-80 h-84 rounded-xl">
        <img src="./assets/paper-1.png" class="w-20 mx-20 mt-8">
        <p class="my-2 font-bold text-center text-black">基于对比学习的<br>数学试题预训练方法</p>
        <p class="my-2 text-center text-blue-400">宁雨亭</p>
        <p class="px-4 py-2 text-xs leading-5 text-center text-gray-400">提出了一种新颖的框架——增量认知诊断（ICD）， 旨在提供一种揭示学习者对知识概念的熟练程度的方法， 并且我们将认知诊断定制到智能教育的在线场景中。</p>
        <a href="https://luna.bdaa.pro" class="mb-8 text-sm text-blue-400">CIKM·2023→</a>
    </div>

    <div class="w-64 bg-white border mt-80 h-84 rounded-xl">
        <img src="./assets/paper-2.png" class="w-20 mx-20 mt-8">
        <p class="my-2 font-bold text-center text-black">结构化试卷的<br>表征学习</p>
        <p class="my-2 text-center text-blue-400">单明晖</p>
        <p class="px-4 py-2 text-xs leading-5 text-center text-gray-400">设计预训练目标学习试卷的层次结构、试卷结构和试卷难度之间的关联， 进一步提升试卷表征能力； 学习到的试卷表征应用于试卷难度预估等下游任务。</p>
        <a href="https://luna.bdaa.pro" class="mb-8 text-sm text-blue-400">AAAI·2023→</a>
    </div>

    <div class="w-64 bg-white border mt-80 h-84 rounded-xl">
        <img src="./assets/paper-3.png" class="w-20 mx-20 mt-8">
        <p class="my-2 font-bold text-center text-black">基于项目反应排序的<br>认知诊断模型</p>
        <p class="my-2 text-center text-blue-400">童世炜</p>
        <p class="px-4 py-2 text-xs leading-5 text-center text-gray-400">提出项目反应排名框架（IRR），旨在引入成对 学习融入认知诊断对 项目响应之间的单调性进行建模。 考虑了优化过程中的单调性。</p>
        <a href="https://luna.bdaa.pro" class="mb-8 text-sm text-blue-400">IJCAI·2023→</a>
    </div>

    <div class="w-64 bg-white border mt-80 h-84 rounded-xl">
        <img src="./assets/paper-4.png" class="w-20 mx-20 mt-8">
        <p class="my-2 font-bold text-center text-black">增量认知诊断模型</p>
        <p class="my-2 text-center text-blue-400">童世炜</p>
        <p class="px-4 py-2 text-xs leading-5 text-center text-gray-400">提出了一种新颖的框架——增量认知诊断（ICD）， 旨在提供一种揭示学习者对知识概念的熟练程度的方法， 并且我们将认知诊断定制到智能教育的在线场景中。</p>
        <a href="https://luna.bdaa.pro" class="mb-8 text-sm text-blue-400">KDD·2023→</a>
    </div>


    <button class="slide_button mt-96">&gt</button>
  </div>

  <!-- page4 -->
  <br><br><br><br>
  <div class="absolute left-0 w-full bg-[#fafafc]"> 
    <br><br><br><br>
    <div class="flex ml-20">
      <button class="text-sm font-bold font-heiti hover:border-none hover:underline hover:underline-offset-4">试题资源</button>
      <button class="text-sm font-bold font-heiti hover:border-none hover:underline hover:underline-offset-4">试卷资源</button>
      <button class="text-sm font-bold font-heiti hover:border-none hover:underline hover:underline-offset-4">知识单元</button>
      <button class="text-sm font-bold font-heiti hover:border-none hover:underline hover:underline-offset-4 ">教材教辅</button>
    </div>
    <div class="flex"> 
      <div class="border rounded-xl shadow-md w-2/5 h-[360px] ml-24 mt-8 bg-white">
          <!-- 图表切换 -->
          <div class="flex ">
            <p class="m-4 text-lg font-bold text-left">各学科数据统计</p>
            <button class="h-8 mt-3 ml-48 text-xs bg-slate-300 text-sky-800 w-28">显示学段细分</button>
          </div>
          <div>
            <p class="ml-8 leading-8 text-gray-400">各学科数据统计</p>
            <img src="./assets/gram.png" alt="gram"  class="mt-6 ml-10 w-96">
          </div>
      </div>
      <div>
        <div class="flex mt-32 ml-8">
            <p class="text-2xl font-bold text-transparent bg-gradient-to-r from-red-500 to-yellow-300 bg-clip-text">海量</p>
            <p class="text-2xl font-bold">教学资源，</p>
            <p class="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text">智能</p> 
            <p class="text-2xl font-bold">处理</p>
                   

        </div>
        <div class="mt-8">
            <p class="ml-8 leading-8 text-left text-gray-500">海量标准化、体系化的教学资源<br>基于高效准确的试题相似度评估算法的高质量资源库<br>智能与个性化的资源录入、查询和管理服务</p>
        </div>
        <div>
        <!-- 对应的按钮 -->
        </div>
      </div>  
    </div>
    <br><br><br><br><br><br>
  </div>

  <!-- page5 -->
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br>
  
  
  <div class="absolute left-0 bg-gradient-to-br-to-r -z-10 from-[#fef5f6] to-[#e0e4f5] w-full">
    <br> <br> <br> <br>
    <div class="flex"> 
      <div class="ml-28">
        <div class="flex mt-32 ml-8">
            <p class="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-600 to-cyan-200 bg-clip-text">多元</p>
            <p class="text-3xl font-bold">知识点，</p>
            <p class="text-3xl font-bold text-transparent bg-gradient-to-r from-fuchsia-500 to-indigo-600 bg-clip-text">直观</p> 
            <p class="text-3xl font-bold">呈现</p>
                   

        </div>
        <div class="mt-8">
            <p class="ml-8 leading-8 text-left text-gray-500">知识点智能化组织与展示<br>结构清晰，辅助学生梳理知识<br>前驱后继、共同学习和层级关系三种知识关系展示</p>
        </div>
        <div class="flex mt-8">
          <img src="./assets/folder.svg" class="z-40 w-6 ml-8">
          <button class="bg-[#578bc3] text-white -ml-8 pl-10">立即前往</button>
        </div>
      </div>  
      <div class="border rounded-xl shadow-md w-96 h-[360px] ml-24 mt-8 bg-white">
          <img src="./assets/map.png" alt="map" class="mt-6">
          <p class="text-lg font-bold">三角函数</p>
          <p class="px-6 pt-4 text-sm leading-6 text-gray-400">三角函数是基本初等函数之一，是以角度（数学上最常用弧度制，下同）为自变量，角度对应任意角终边与单位圆交点坐标或其比值为因变量的函数...</p>
      </div>
    </div>
    <br> <br> <br> <br><br> <br> <br> <br>
  </div>

  <!-- page6 -->
  <br> <br> <br> <br><br> <br> <br> <br><br> <br> <br> <br><br> <br> <br> <br><br> <br> <br> <br><br> <br> <br><br><br><br><br><br>
  <div class="absolute left-0 w-full -z-10 bg-[#fafafc]">

    <div class="flex mt-48 ml-20">
      <p class="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text">特色</p>
      <p class="text-3xl font-bold">教育功能，</p>
      <p class="text-3xl font-bold text-transparent bg-gradient-to-r from-red-500 to-indigo-600 bg-clip-text">倾力</p> 
      <p class="text-3xl font-bold">打造</p>
    </div>
    
    <div class="z-10 flex mt-8 ml-14">
      <div class="ml-6">
        <img src="./assets/pic-1.png" alt="2023-analysis" class="w-[220px] rounded-t-3xl">
        
        <div class="border h-46 w-[220px] text-left rounded-b-3xl shadow-md px-2 py-2">
          <p class="font-bold text-left text-black ">试卷分析</p>
          <p class="py-2 text-xs leading-6 text-left text-gray-400 w-52">2使用人工智能和数据挖掘技术在多个层次和维度上分析试卷，如各题型占比、知识点分值和难度变化</p>
          <p class="text-blue-400 text-md">了解更多→</p>
        </div>
        
      </div>

      <div class="ml-5">
        <img src="./assets/pic-2.png" alt="2022-analysis" class="w-[220px] rounded-t-3xl">
            
        <div class="border h-46  w-[220px] text-left rounded-b-3xl shadow-md px-2 py-2">
          <p class="font-bold text-left text-black">组卷系统</p>
        <p class="py-2 text-xs leading-6 text-left text-gray-400 w-52">智能组卷系统提供丰富的选题方式，自动组卷，以及个性化试卷和答题卡编辑、预览与下载功能。</p>
        
        <p class="text-blue-400 text-md">了解更多→</p>
        </div>
        
      </div>
      <div class="ml-5">
        <img src="./assets/pic-3.png" alt="2021-analysis" class="w-[220px] rounded-t-3xl">
        <div class="border h-46 w-[220px] text-left rounded-b-3xl shadow-md p-2">
          <p class="font-bold text-left text-black">试题属性预估</p>
          <p class="py-2 text-xs leading-6 text-left text-gray-400 w-52">可视化界面对试题进行基本属性、知识点、知识树状结构等进行预估，为试题分类管理带来便捷。</p>
         
          <p class="text-blue-400 text-md">立即前往→</p>
        </div>
      </div>


      <div class="ml-5">
        <img src="./assets/pic-4.png" alt="2020-analysis" class="w-[220px] rounded-t-3xl">
        <div class="border h-46 w-[220px] text-left rounded-b-3xl shadow-md p-2">
          <p class="font-bold text-left text-black">智能教辅平台</p>
          <p class="py-2 text-xs leading-6 text-left text-gray-400 w-52">深层次多维度海量教育资源分析，个性化资源管理、组织功能，为教师提供智能化教学服务</p>
          <p class="text-blue-400 text-md">立即前往→</p>
        </div>
      </div>
    </div>
    <br><br><br><br><br><br><br><br>
  </div>

  <!-- page7 -->
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <div class="absolute left-0 w-full -z-10 bg-gradient-to-br-to-r from-[#f9fdf5] to-[#eef0fa]">
    <div class="flex mt-20 ml-20">
      <p class="text-3xl font-bold text-transparent bg-gradient-to-br from-sky-500 to-cyan-300 bg-clip-text">AI</p>
      <p class="text-3xl font-bold">实验室，打造</p>
      <p class="text-3xl font-bold text-transparent bg-gradient-to-b from-pink-500 to-orange-500 bg-clip-text">开源生态</p> 
    </div>
    <div class="flex justify-center mt-10">
      <div class="border h-[640px] w-[610px] bg-white shadow-lg rounded-2xl mr-5">
        <p class="mt-10 text-2xl font-bold">特色教育功能开放体验</p>
        <span class="mt-20 ml-20">
          <!-- <p class="text-gray-400">LUNA团队依托领先的技术实力，为用户提供</p>
          <p class="font-bold">高品质</p>
          <p class="text-gray-400">的教育产品及服务，目前推出了包括图片转写、 属性预估等多款</p>
          <p class="font-bold">在线服务</p>
          <p class="text-gray-400">，旨在为用户提供智能练习、难题解析等</p>
          <p class="font-bold">多元化</p>
          <p class="text-gray-400">的智能教育服务。</p> -->
          <p class="mx-10 text-gray-400">LUNA团队依托领先的技术实力，为用户提供高品质的的教育产品及服务，目前推出了包括图片转写、 属性预估等多款在线服务，旨在为用户提供智能练习、难题解析等多元化的智能教育服务。</p>
        </span>
        <div class="flex mt-[16px]">
          <div class="w-[260px] h-[166px] border rounded-[10px] ml-[33px] bg-gradient-to-br from-[#FCFCFC]/48 to-[#E9EFFC]/100">
            <div class="flex">
              <div class="rounded-full w-[5px] h-6 bg-[#4E89FF] mt-6 ml-5"></div>
              <p class="mt-6 ml-2 font-bold text-md">试卷分析</p>
            </div>
            
            <p class="text-[#9E9E9E] w-[220px] h-[84px] ml-5 mr-5 mb-5 mt-2.5 text-md">使用人工智能和数据挖掘技术在多个层次和维度上分析试卷</p>
            
            <div class="bg-[#609CE2] rounded-full h-5 w-5 ml-56 mb-2.5 -mt-8 font-bold text-white">&gt</div>
          </div>
          <div class="w-[260px] h-[166px] border rounded-[10px] ml-[24px] bg-gradient-to-br from-[#FCFCFC] to-[#FBEED4]/100">
            <div class="flex">
              <div class="rounded-full w-[5px] h-6 bg-[#FFAF4E] mt-6 ml-5"></div>
              <p class="mt-6 ml-2 font-bold text-md">图片转写</p>
            </div>
            
            <p class="text-[#9E9E9E] w-[220px] h-[84px] ml-5 mr-5 mb-5 mt-2.5 text-md text-left">精准识别试题照片中的文字、公式以及附图附表，适用于试题录入</p>
            
            <div class="bg-[#E2A760] rounded-full h-5 w-5 ml-56 mb-2.5 -mt-8 font-bold text-white">&gt</div>

            
          </div>
        </div>
        <div class="flex mt-[24px]">
          <div class="w-[260px] h-[166px] border rounded-[10px] ml-[33px] bg-gradient-to-br from-[#FCFCFC]/0 to-[#FFF8FF]/100">
            <div class="flex">
              <div class="rounded-full w-[5px] h-6 bg-[#A64EFF] mt-6 ml-5"></div>
              <p class="mt-6 ml-2 font-bold text-md">属性预估</p>
            </div>
            
            <p class="text-[#9E9E9E] w-[220px] h-[84px] ml-5 mr-5 mb-5 mt-2.5 text-md text-left">从包含复杂语义的试题文本出发挖掘试题的难度、区分度等属性</p>
            
            <div class="bg-[#A160E2] rounded-full h-5 w-5 ml-56 mb-2.5 -mt-8 font-bold text-white">&gt</div>

          </div>
          <div class="w-[260px] h-[166px] border rounded-[10px] ml-[24px] bg-gradient-to-br from-[#FAFFF9] to-[#FCFCFC]">
            <div class="flex">
              <div class="rounded-full w-[5px] h-6 bg-[#74E149] mt-6 ml-5"></div>
              <p class="mt-6 ml-2 font-bold text-md">相似度估计</p>
            </div>
            
            <p class="text-[#9E9E9E] w-[220px] h-[84px] ml-5 mr-5 mb-5 mt-2.5 text-md text-left">基于人工智能算法给出两个题目之间的多维度相似度预估</p>
            
            <div class="bg-[#85E260] rounded-full h-5 w-5 ml-56 mb-2.5 -mt-8 font-bold text-white">&gt</div>


          </div>
        </div>


      </div>
      <div class="border h-[640px] w-[610px] bg-white shadow-lg rounded-3xl ml-[40px]">
        <p class="mt-10 text-2xl font-bold">EduX开源工具集</p>
        <p class="mx-10 mt-8 text-gray-400">LUNA团队设计的用于数据挖掘的开源工具集合</p>
        <div class="flex justify-center mt-4 ">
          <a href="https://github.com/bigdata-ustc/EduNLP" class="font-bold text-blue-400">EduNLP</a>
          <p class="text-blue-400">·</p>
          <a href="https://github.com/bigdata-ustc/EduData" class="font-bold text-blue-400">EduData</a>
          <p class="text-blue-400">·</p>
          <a href="https://github.com/bigdata-ustc/EduCDM" class="font-bold text-blue-400">EduCDM</a>
          <p class="text-blue-400">·</p>
          <a href="https://github.com/bigdata-ustc/EduKTM" class="font-bold text-blue-400">EduKTM</a>
        </div>
        <img src="./assets/edux.png" alt="edux" class="mt-8 ml-8 mr-8 mb-10 w-[546px]">
        <!-- <p class="text-blue-400"></p> -->
      </div>
      
    </div>
  </div>
  
</template>

<style scoped>
  .search-button {
    background-color: #edeef2;
    border-radius: 20px;
    height: 36px;
    margin: 10px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: 900;
    color: #000000;
  }

  .search-button:hover {
    background-color: #e0e0e0;
  }

  .slide_button{
    background-color: black; 
    color: white;
    border-radius: 9999px;
    width:20px;
    height:20px;
    text-align: left;
    padding-left: 4px;
    padding-right: 4px; 
    padding-top: 0px;
    padding-bottom: 20px;/*todo为什么不居中啊*/
    /* todo 选中时形状异常 */
  }
  .slide_button:hover{
    background-color: #cbd5e1; 
  }

</style>
