<template>
  <div class="p-6 bg-white rounded-lg border border-gray-100">
    <NuxtLink class="flex items-center space-x-2" :to="'/'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
          fill="black"
          fill-opacity="0.54"
        />
      </svg>
      <p class="text-black font-semibold text-xl">Add Asset</p>
    </NuxtLink>
    <form @submit="handleSubmit">
      <div class="grid grid-cols-2 items-start gap-x-8 mt-6">
        <!-- asset information -->
        <div class="grid gap-y-4">
          <p class="text-black text-base font-semibold">Asset Information</p>
          <div class="grid gap-y-2">
            <label class="text-black/60 text-xs" for="AssetID"
              >Asset ID/Tag</label
            >
            <input
              id="AssetID"
              v-model="form.AssetID"
              required
              class="px-4 py-2 bg-white text-black/80 text-sm focus:text-black/90 focus:outline-none border border-[#eaecf0] rounded-lg"
            />
          </div>
          <div class="grid gap-y-2">
            <label class="text-black/60 text-xs" for="AssetName"
              >Asset Name</label
            >
            <input
              id="AssetName"
              v-model="form.AssetName"
              required
              class="px-4 py-2 bg-white text-black/80 text-sm focus:text-black/90 focus:outline-none border border-[#eaecf0] rounded-lg"
            />
          </div>
          <div class="grid gap-y-2">
            <label class="text-black/60 text-xs" for="Category">Category</label>
            <select
              id="Category"
              v-model="form.Category"
              class="px-4 py-2 bg-white text-black/80 text-sm focus:text-black/90 focus:outline-none border border-[#eaecf0] rounded-lg"
            >
              <option value="" disabled>Choose category</option>
              <option value="Furniture">Furniture</option>
              <option value="Electronic">Electronic</option>
              <option value="Vehicle">Vehicle</option>
              <option value="Tire">Tire</option>
            </select>
          </div>
          <div class="grid gap-y-2">
            <label class="text-black/60 text-xs" for="Status">Status</label>
            <select
              id="Status"
              v-model="form.Status"
              class="px-4 py-2 bg-white text-black/80 text-sm focus:text-black/90 focus:outline-none border border-[#eaecf0] rounded-lg"
            >
              <option value="" disabled>Choose Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="In Repair">In Repair</option>
            </select>
          </div>
          <div class="grid gap-y-2">
            <label class="text-black/60 text-xs" for="ModelNumber"
              >Model Number</label
            >
            <input
              id="ModelNumber"
              v-model="form.ModelNumber"
              class="px-4 py-2 bg-white text-black/80 text-sm focus:text-black/90 focus:outline-none border border-[#eaecf0] rounded-lg"
            />
          </div>
          <div class="grid gap-y-2">
            <label class="text-black/60 text-xs" for="SerialNumber"
              >Serial Number</label
            >
            <input
              id="SerialNumber"
              v-model="form.SerialNumber"
              class="px-4 py-2 bg-white text-black/80 text-sm focus:text-black/90 focus:outline-none border border-[#eaecf0] rounded-lg"
            />
          </div>
          <div class="grid gap-y-2">
            <label class="text-black/60 text-xs" for="Description"
              >Description</label
            >
            <textarea
              id="Description"
              v-model="form.Description"
              maxlength="200"
              rows="3"
              class="px-4 py-2 bg-white text-black/80 text-sm focus:text-black/90 focus:outline-none border border-[#eaecf0] rounded-lg"
            />
            <div class="flex justify-end">
              <span class="text-xs text-black/60"
                >{{ form.Description.length }}/200</span
              >
            </div>
          </div>
          <BaseButton className="mb-4 w-fit" type="submit">
            <div
              v-if="!isLoading"
              class="px-6 text-base font-semibold text-white"
            >
              Add Asset
            </div>
            <div v-else class="flex items-center justify-center">
              <OverlayLoader className="w-6 h-6" />
            </div>
          </BaseButton>
        </div>
        <!-- purchase information -->
        <div class="grid gap-y-4">
          <p class="text-black text-base font-semibold">Purchase Information</p>
          <div class="grid gap-y-2">
            <label class="text-black/60 text-xs">Purchase Cost</label>
            <input
              v-model="form.PurchaseCost"
              type="number"
              class="px-4 py-2 bg-white text-black/80 text-sm focus:text-black/90 focus:outline-none border border-[#eaecf0] rounded-lg"
              required
            />
          </div>
          <div class="grid gap-y-2">
            <label class="text-black/60 text-xs">Purchase Date</label>
            <input
              v-model="form.PurchaseDate"
              type="date"
              class="px-4 py-2 bg-white text-black/80 text-sm focus:text-black/90 focus:outline-none border border-[#eaecf0] rounded-lg"
            />
          </div>
          <div class="grid gap-y-2">
            <label class="text-black/60 text-xs">Vendor Name</label>
            <input
              v-model="form.VendorName"
              class="px-4 py-2 bg-white text-black/80 text-sm focus:text-black/90 focus:outline-none border border-[#eaecf0] rounded-lg"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AssetForm',
  data() {
    return {
      form: {
        AssetID: '',
        AssetName: '',
        Category: '',
        Status: '',
        ModelNumber: '',
        SerialNumber: '',
        Description: '',
        PurchaseCost: 0,
        PurchaseDate: '',
        VendorName: '',
      },
      isLoading: false,
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.isLoading = true
      setTimeout(() => {
        this.$store.commit('manageAsset/setAssetList', {
          isLoading: false,
          data: [...this.$store.state.manageAsset.assetList.data, this.form],
          status: 'SUCCESS',
        })
        this.isLoading = false
        this.$router.push('/')
      }, 2000)
    },
  },
}
</script>
