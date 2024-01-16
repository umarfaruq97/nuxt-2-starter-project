<template>
  <header
    class="fixed top-0 right-0 w-full md:w-[calc(100%_-_256px)] py-4 px-6 bg-fcfcfc h-20 flex items-center justify-between"
  >
    <p class="text-xl text-black/50 font-medium tracking-wide">Manage Asset</p>
    <div class="flex space-x-4 items-center">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 34C25.1 34 26 33.1 26 32H22C22 33.1 22.9 34 24 34ZM30 28V23C30 19.93 28.37 17.36 25.5 16.68V16C25.5 15.17 24.83 14.5 24 14.5C23.17 14.5 22.5 15.17 22.5 16V16.68C19.64 17.36 18 19.92 18 23V28L16 30V31H32V30L30 28ZM28 29H20V23C20 20.52 21.51 18.5 24 18.5C26.49 18.5 28 20.52 28 23V29Z"
          fill="black"
          fill-opacity="0.54"
        />
        <rect x="25" y="11" width="12" height="12" rx="6" fill="#FF6A55" />
        <rect
          x="25"
          y="11"
          width="12"
          height="12"
          rx="6"
          stroke="#FCFCFC"
          stroke-width="2"
        />
      </svg>
      <div
        :style="image"
        class="w-10 h-10 rounded-full bg-cover bg-center bg-no-repeat bg-orange-200"
      />
    </div>
  </header>
</template>

<script>
import AvatarUser from 'assets/images/avatar-user.png'
export default {
  name: 'HeaderNavigation',
  data() {
    return {
      image: { backgroundImage: `url(${AvatarUser})` },
    }
  },
}
</script>

<style lang="scss"></style>
