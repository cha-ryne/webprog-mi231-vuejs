<template>
  <h1>Food</h1>
  <ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
  <br>
  <food-item/>
  <food-item2/>
  <food-item/>
  <personal-profile/> <br>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from './lib/supabaseClient'

  const countries = ref([])

  async function getCountries() {
    const { data } = await supabase.from('countries').select()
    countries.value = data
  }

  onMounted(() => {
    getCountries()
  })
  </script>

<style>        </style>    