<template>
    <div class="filter-container">
      <h3>{{ $t('filter') }}</h3>
  
      <div>
        <label>{{ $t('price') }}: </label>
        <input 
          type="range" 
          v-model="filters.maxPrice" 
          :min="minPrice" 
          :max="maxPrice" 
          @input="applyFilters" 
        />
        <span>{{ filters.maxPrice }}</span>
      </div>
  
      <div>
        <label>{{ $t('location') }}: </label>
        <select v-model="filters.location" @change="applyFilters">
          <option value="">{{ $t('any') }}</option>
          <option v-for="location in locations" :key="location" :value="location">
            {{ location }}
          </option>
        </select>
      </div>
  
      <div>
        <label>{{ $t('amenities') }}: </label>
        <div v-for="amenity in availableAmenities" :key="amenity">
          <input 
            type="checkbox" 
            :value="amenity" 
            v-model="filters.amenities" 
            @change="applyFilters" 
          />
          <label>{{ amenity }}</label>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      minPrice: {
        type: Number,
        default: 100,
      },
      maxPrice: {
        type: Number,
        default: 1000,
      },
      locations: {
        type: Array,
      },
      availableAmenities: {
        type: Array,
      },
    },
    data() {
      return {
        filters: {
          maxPrice: this.maxPrice,
          location: '',
          amenities: [],
        },
      };
    },
    methods: {
      applyFilters() {
        this.$emit('applyFilters', this.filters);
      },
    },
  };
  </script>
  
  <style scoped>
  .filter-container {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  
  label {
    margin-right: 8px;
  }
  
  input[type="range"] {
    width: 100%;
    margin-bottom: 8px;
  }
  
  select {
    width: 100%;
    margin-bottom: 8px;
  }
  
  div {
    margin-bottom: 12px;
  }
  </style>
  