<template>
  <div class="w-full max-w-full overflow-x-auto">
    <table class="w-full">
      <thead>
        <tr class="bg-gray-100">
          <th
            v-for="(keyItem, index) in fields"
            :key="index"
            class="px-6 py-4 text-gray-600 text-sm"
            align="left"
          >
            {{ keyItem.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="!isLoading">
          <template v-if="list.length > 0">
            <tr v-for="(item, index) in list" :key="index">
              <td
                v-for="(keyItem, keyIndex) in fields"
                :key="keyIndex"
                class="px-6 py-4 text-gray-600 text-sm"
              >
                <slot :name="`cell-${keyItem.key}`" :item="item">
                  {{ item[keyItem.key] }}
                </slot>
              </td>
            </tr>
          </template>
          <template v-else>
            <tr>
              <td></td>
            </tr>
          </template>
        </template>
        <template v-else>
          <tr>
            <td :colspan="fields.length">
              <div class="w-full h-40 flex items-center justify-center">
                <OverlayLoader />
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BaseTable',
  props: {
    fields: {
      type: Array,
      default: () => [{ key: 'data', text: 'Data' }],
    },
    list: {
      type: Array,
      default: () => [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped></style>
