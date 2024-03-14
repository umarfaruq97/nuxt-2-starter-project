<template>
  <div>
    <h2 class="text-gray-600 text-semibold italic"></h2>
  </div>
</template>

<script>
export default {
  created() {
    this.decode_message('Apa kabar mu kawanku yang lama tak ku jumpa ?')
  },
  methods: {
    decode_message(encoded_str) {
      const trimmed = encoded_str.trim().replaceAll('  ', ' ')
      const splitted = trimmed.split(' ')
      let reversed = ''
      splitted.forEach((element) => {
        const reversedWord = element.split('').reverse().join('')
        reversed = reversed + ' ' + reversedWord
      })
      const result = reversed.trim().replaceAll('  ', ' ')
      console.log(result)
    },
  },
}
</script>
