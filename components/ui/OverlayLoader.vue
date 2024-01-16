<template>
  <div
    :class="`loader border-8 border-solid border-x-gray-200 border-b-gray-200 border-t-gray-600 rounded-full ${className}`"
  ></div>
</template>

<script>
export default {
  name: 'OverlayLoader',
  props: {
    className: {
      type: String,
      default: 'w-10 h-10',
    },
  },
}
</script>

<style>
.loader {
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;
}
@-webkit-keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
