<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th
        :class="{up: this.sortOrder === 1, down: this.sortOrder === -1}"
        >
          <span
          class="underline cursor-pointer"
          @click="changeSortOrder"
          >Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block">
          <input
            class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block w-full appearance-none leading-normal"
            id="filter"
            placeholder="Buscar..."
            type="text"
            v-model="filter"
          />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr 
      v-for="asset in filterAssets" :key="asset.id"
      class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100">
        <td></td>
        <td># {{asset.rank}}</td>
        <td>
          <router-link :to="{name : 'coin-detail', params: {id: asset.id}}"
          class="hover:underline text-green-600">
          {{asset.name}}
          </router-link>
        </td>
        <td>{{asset.priceUsd | dollar}}</td>
        <td>{{asset.marketCapUsd | dollar}}</td>
        <td 
        :class="asset.changePercent24Hr.includes('-')? 'text-red-600' : 'text-green-600'">
        {{asset.changePercent24Hr | percent}}</td>
        <td class="hidden sm:block">
          <px-button @click="goingToCoin(asset.id)">
            <span>Detalle</span>
          </px-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import PxButton from "@/components/PxButton"
export default {
  name: "PxAssetsTable",

  props: {
    assets: {
      type: Array,
      default: () => []
    }
  },
  data(){
    return{
      filter: "",
      sortOrder: 1
    }
  },

  computed:{
    filterAssets(){
      // if (!this.filter) {
      //   return this.assets
      // }

      const altOrder = this.sortOrder === 1? -1 : 1

      return this.assets.filter(asset => 
      asset.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
      asset.name.toLowerCase().includes(this.filter.toLowerCase())
      )
      .sort((a, b) =>{
        if (parseInt(a.rank) > parseInt(b.rank)) {
          return this.sortOrder
        }

        return altOrder
      })
    }
  },

  components: {
    PxButton
  },
  methods:{
    goingToCoin(id){
      this.$router.push({name: "coin-detail", params: {id}})
    },

     changeSortOrder(){
       this.sortOrder = this.sortOrder === 1? -1 : 1
     }
  }
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
