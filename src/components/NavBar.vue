<template>
    <nav class="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-20 ">
        <div  id="NavBar" class="w-full flex max-w-[1440px] items-center justify-center ">
            <div id="NavBarLogo " class="justify-start grow">
                <img src="@/assets/luna_logo.png" alt="logo" class="h-[42px]">
            </div>
            <div id="NavBarMenu" class="flex items-center justify-center gap-8 ">
                <ul class="flex items-center justify-center gap-8">
                    <li class="list-item">首页</li>
                    <li class="list-item">功能</li>
                    <li class="list-item">AI实验室</li>
                    <li class="list-item">关于</li>
                    <li class="text-bold text-black/50">|</li>
                    <li class="list-item">登录</li>
                    <li>
                        <button class="border-2 rounded-[104px]  bg-transparent border-[#313131] list-item px-6 py-2">
                            注册
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<style>

.list-item{
    @apply text-xl font-medium;
}

</style>