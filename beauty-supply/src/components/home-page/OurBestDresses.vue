<template>
  <section class="h-[500px] w-full flex" ref="sectionElementRef">
    <img :src="image" alt="Image of a lady wearing dress" class="h-full w-2/4 object-cover" />
    <div class="bg-cyan-100 flex flex-col justify-center items-center p-10">
      <h2 class="uppercase text-4xl max-lg:text-3xl">the perfect summer dress</h2>
      <p class="my-10 font-thin italic leading-relaxed text-sm">
        Inspired by the summer blouse and the magical world under the sea, this collection by Mzchi
        is made from the sun.
      </p>
      <button class="px-5 py-3 bg-white text-cyan-300 text-sm shadow hover:opacity-90">
        SHOP NOW
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import image from '@/assets/images/abdul-raheem-kannath-hxKjkSBmytw-unsplash.jpg'
</script>

<style>
</style>