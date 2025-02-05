<template>
  <div>
    <h1>Comments</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id" class="comment-item">
        <span class="comment-name">{{ comment.name }}</span>: 
        <span class="comment-text">{{ comment.comment }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient';

const comments = ref([]);

async function getComments() {
  const { data } = await supabase.from('comments').select();
  comments.value = data;
}

onMounted(() => {
  getComments();
});
</script>

<style scoped>
</style>