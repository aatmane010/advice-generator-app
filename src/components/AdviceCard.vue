<template>
  <div class="bg-dark-grayish-blue p-10 rounded-lg text-light-cyan max-w-md text-center relative">
    <span class="block mx-auto w-fit uppercase text-lg mb-5 text-neon-green tracking-widest">Advice #{{ adviceData.id
    }}</span>
    <q class="text-2xl">{{ adviceData.advice }}</q>
    <div class="w-full h-[.5px] bg-light-cyan relative mt-10 mb-5">
      <span
        class="flex items-center justify-center w-10 h-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-dark-grayish-blue rounded-full"><i
          class="fa-solid fa-pause"></i></span>
    </div>
    <button
      class="absolute left-1/2 -translate-x-1/2 -bottom-5 w-10 h-10 flex justify-center items-center bg-neon-green rounded-full outline-none hover:shadow-main ease-out duration-300"
      @click="getRandomAdvice()"><i class="fa-solid fa-dice-three text-dark-blue"></i></button>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const adviceData = ref({
  id: null,
  advice: null,
});
const getRandomAdvice = async () => {
  try {
    const response = await axios.get('https://api.adviceslip.com/advice');
    const { slip: { id, advice } } = response.data;
    adviceData.value.id = id;
    adviceData.value.advice = advice;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(() => {
  getRandomAdvice();
});
</script>