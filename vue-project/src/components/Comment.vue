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
.comment-item {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.comment-name {
  font-weight: bold;
  color: #333;
}

.comment-text {
  margin-left: 5px;
  color: #555;
}

#app > div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightyellow;
}
</style>