<template>
  <button
    :class="
      'flex items-center justify-center py-2 px-4 rounded-lg bg-2065da hover:opacity-80 cursor-pointer ' +
      className
    "
    :type="type"
    @click="$emit('click')"
  >
    <slot>
      <span class="text-white">Button</span>
    </slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    className: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'button',
    },
  },
}
</script>

<style lang="scss" scoped></style>
