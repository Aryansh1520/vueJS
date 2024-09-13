<template>
  <div class="accommodation-card">
    <img :src="accommodation.image" alt="Accommodation Image" loading="lazy"/>
    <h3>{{ accommodation.name }}</h3>
    <p>{{ $t('price') }}: {{ accommodation.price }}</p>
    <p>{{ $t('location') }}: {{ accommodation.location }}</p>
    <router-link :to="`/accommodation/${accommodation.id}`">View Details</router-link>
  </div>
</template>

<script>
export default {
  props: ['accommodation'],
};
</script>

<style scoped>
.accommodation-card {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
