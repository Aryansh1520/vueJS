<template>
  <div id="app">
    <div class="language-switcher">
      <label for="language">{{ $t('language') }}:</label>
      <select v-model="$i18n.locale" id="language" class="language-select">
        <option value="en">English</option>
        <option value="ch">Chinese</option>
        <option value="hi">Hindi</option>
      </select>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  background-color: #f4f4f4;
  color: #333;
}

h1, h2, h3 {
  font-weight: 600;
}

a {
  text-decoration: none;
  color: #007bff;
}

a:hover {
  text-decoration: underline;
}

/* Language Switcher */
.language-switcher {
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.language-select {
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>
