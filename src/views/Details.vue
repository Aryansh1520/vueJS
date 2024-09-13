<template>
    <div class="details-page">
      <h1>{{ accommodation.name }}</h1>
      <img :src="accommodation.image" alt="Accommodation Image" />
      <p>{{ $t('price') }}: {{ accommodation.price }}</p>
      <p>{{ $t('location') }}: {{ accommodation.location }}</p>
      <h3>{{ $t('amenities') }}</h3>
      <ul>
        <li v-for="amenity in accommodation.amenities" :key="amenity">{{ amenity }}</li>
      </ul>
      <router-link to="/">{{ $t('back_to_list') }}</router-link>
    </div>
  </template>
  
  <script>
  import accommodations from '@/mock/accommodations.json';  // Or fetch from API
  
  export default {
    data() {
      return {
        accommodation: null,
      };
    },
    created() {
      const accommodationId = this.$route.params.id;
      this.accommodation = accommodations.find(acc => acc.id == accommodationId);
    },
  };
  </script>
  
  <style scoped>
  .details-page {
    padding: 20px;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  </style>
  