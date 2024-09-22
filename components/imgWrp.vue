<template>
  <div class="image-scroll-container">

    {{currentPosition}}
    {{ maxPosition }}
    <button class="prev-btn" @click="scrollPrev" :disabled="currentPosition === 0">Prev</button>
    <div class="image-wrapper">
      <div class="image-track" ref="imageTrack" :style="{ transform: `translateX(${currentPosition}px)` }">
        <img v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt" />
      </div>
    </div>
    <button class="next-btn" @click="scrollNext" :disabled="currentPosition <= maxPosition">Next</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const images = ref([
  { src: 'https://images.pexels.com/photos/298825/pexels-photo-298825.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 1' },
  { src: 'https://images.pexels.com/photos/4252142/pexels-photo-4252142.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 3' },
  { src: 'https://images.pexels.com/photos/298825/pexels-photo-298825.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 2' },
  { src: 'https://images.pexels.com/photos/4252142/pexels-photo-4252142.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 4' }
]);

const imageWidth = 300; // Adjust this based on your image width + margin
const marginRight = 20;
const imageTrack = ref(null);
const currentPosition = ref(0);
let maxPosition = 0;

const calculateMaxPosition = () => {
  if (imageTrack.value) {
    const wrapperWidth = document.querySelector('.image-wrapper').offsetWidth;
    const trackWidth = imageTrack.value.scrollWidth;
    maxPosition = -(trackWidth - wrapperWidth);
  }
};

const scrollNext = () => {
  currentPosition.value -= (imageWidth + marginRight);
  if (currentPosition.value < maxPosition) {
    currentPosition.value = maxPosition;
  }
};

const scrollPrev = () => {
  currentPosition.value += (imageWidth + marginRight);
  if (currentPosition.value > 0) {
    currentPosition.value = 0;
  }
};

onMounted(() => {
  calculateMaxPosition();
  window.addEventListener('resize', calculateMaxPosition); // Recalculate on resize
});
</script>



<style scoped>

.image-scroll-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
}

.image-wrapper {
  overflow: hidden;
  width: 100%; /* Takes the full width of the container */
}

.image-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.image-track img {
  flex: 0 0 auto;
  width: 500px; /* Adjust image width */
  height: auto;
  margin-right: 20px; /* Spacing between images */
}

button {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

</style>
