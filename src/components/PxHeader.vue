<template>
    <header class="shadow w-screen">
       <nav class="nav">
           <nav class="flex items-center justify-between flex-wrap bg-gray-400 p-6">
               <div class="flex items-center flex-shrink-0 text-white mr-6">
                   <px-icon class="mr-2"/>
                   <router-link class="font-semibold text-xl tracking-tight text-green-600" :to="{name: 'home'}">PlatziExchange</router-link>
               </div>
               <div class="hidden sm:block w-full blok flex-grow lg:flex lg:items-center lg:wauto">
                   <div class="text-sm lg:flex-grow">
                       <router-link 
                       v-for="link in links"
                       :key="link.title"
                       :to="link.to"
                       class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-white mr-4" >
                            {{link.title}}
                       </router-link>
                   </div>
               </div>
           </nav>
       </nav>
    </header> 
</template>

<script>
import PxIcon from "@/components/PxIcon"
export default {
    name: "PxHeader",
    props:{
        links:{
            type: Array,
            default: () => []
        }
    },
    components:{
        PxIcon,
    }
}
</script>