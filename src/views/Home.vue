<template>
    <div class="home">
        <h1>{{ $t('welcome') }}</h1>
        <Filter 
        :minPrice="minPrice" 
        :maxPrice="maxPrice" 
        :locations="locations" 
        :availableAmenities="availableAmenities" 
        @applyFilters="handleFilters"
      />
      <div class="accommodation-list">
        <AccommodationCard
          v-for="item in filteredAccommodations"
          :key="item.id"
          :accommodation="item"
        />
      </div>
    </div>
  </template>
  
  <script>
  import Filter from '@/components/Filter.vue';
  import AccommodationCard from '@/components/AccommodationCard.vue';
  import accommodationsData from '@/mock/accommodations.json';
  
  export default {
    components: {
      Filter,
      AccommodationCard
    },
    data() {
      return {
        accommodations: accommodationsData,
        minPrice: 100,
        maxPrice: 1000,
        locations: ['City Center', 'Suburb', 'Near Campus' , 'Downtown' , 'Countryside'],
        availableAmenities: ['Wi-Fi', 'Laundry', 'Gym', 'Parking', 'Air Conditioning'],
        filters: {
          maxPrice: 1000,
          location: '',
          amenities: [],
        },
      };
    },
    computed: {
      filteredAccommodations() {
        return this.accommodations.filter(acc => {
          return acc.price <= this.filters.maxPrice &&
            (this.filters.location === '' || acc.location === this.filters.location) &&
            this.filters.amenities.every(amenity => acc.amenities.includes(amenity));
        });
      }
    },
    methods: {
      handleFilters(filters) {
        this.filters = filters;
      }
    }
  };
  </script>
  
  <style scoped>
  .home {
    padding: 20px;
  }
  
  .accommodation-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  </style>
  