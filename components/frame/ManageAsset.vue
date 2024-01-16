<template>
  <div class="p-6 bg-white rounded-lg border border-gray-100">
    <p class="text-101828 text-lg font-semibold mb-4">List Asset</p>
    <div class="flex items-center space-x-4 mb-4">
      <BaseButton @click="$router.push('/form')">
        <div class="px-2 text-base font-semibold text-white">+ Add Asset</div>
      </BaseButton>
      <input
        v-model="params.search"
        class="px-4 py-2 bg-white text-[#7e7e7e] text-sm focus:text-gray-700 focus:outline-none border border-[#eaecf0] rounded-lg"
        placeholder="Search Asset..."
      />
    </div>
    <BaseTable
      :fields="fields"
      :list="assetListFiltered"
      :isLoading="assetList.isLoading"
    >
      <template #cell-PurchaseCost="{ item }">
        {{ currencyFormatter(item.PurchaseCost) }}
      </template>
      <template #cell-PurchaseDate="{ item }">
        {{ $moment(item.PurchaseDate, 'YYYY-MM-DD').format('DD MMM YYYY') }}
      </template>
      <template #cell-Status="{ item }">
        <div
          :class="`rounded-full w-fit px-2 py-1 font-medium ${item.Status === 'Active' ? 'bg-ecfdf3 text-027a48' : item.Status === 'Inactive' ? 'bg-feebee text-b23842' : 'bg-fffaeb text-b54708'}`"
        >
          {{ item.Status }}
        </div>
      </template>
    </BaseTable>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { currencyFormatter } from '~/utils/data'
export default {
  name: 'ManageAsset',
  data() {
    return {
      fields: [
        { key: 'AssetID', text: 'Asset ID/Tag' },
        { key: 'AssetName', text: 'Asset Name' },
        { key: 'Description', text: 'Description' },
        { key: 'PurchaseCost', text: 'Purchase Cost' },
        { key: 'PurchaseDate', text: 'Purchase Date' },
        { key: 'Status', text: 'Status' },
        {},
      ],
      params: {
        page: 1,
        limit: 50,
        search: '',
      },
    }
  },
  computed: {
    ...mapGetters('manageAsset', ['assetList']),
    assetListFiltered() {
      let temp = JSON.parse(JSON.stringify(this.assetList.data))
      if (this.params.search) {
        temp = temp.filter((el) =>
          el.AssetName.toLowerCase().includes(this.params.search.toLowerCase()),
        )
      }
      return temp
    },
  },
  created() {
    this.getAssetList(this.params)
  },
  methods: {
    ...mapActions('manageAsset', ['getAssetList']),
    currencyFormatter,
  },
}
</script>

<style lang="scss" scoped></style>
