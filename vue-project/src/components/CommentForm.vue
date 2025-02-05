<template>
  <div>
    <h2>Leave a Comment</h2>
    <form @submit.prevent="submitComment">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required class="form-control">
      </div>
      <div class="form-group">
        <label for="comment">Comment:</label>
        <textarea id="comment" v-model="comment" required class="form-control"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <div v-if="submissionStatus" class="mt-2">
        {{ submissionStatus }}
      </div>
    </form>

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

const name = ref('');
const comment = ref('');
const submissionStatus = ref(null);
const comments = ref([]);

// Your Supabase URL and Key - IMPORTANT!
const tableName = 'comments'; // Name of your Supabase table

async function submitComment() {
  submissionStatus.value = "Submitting...";
  try {
    const newComment = {
      name: name.value,
      comment: comment.value,
      created_at: new Date().toISOString() // Ensure correct format
    };

    const { error } = await supabase
      .from(tableName)
      .insert([newComment]);

    if (error) {
      console.error("Error inserting comment:", error);
      submissionStatus.value = "Error submitting comment. Please try again.";
    } else {
      submissionStatus.value = "Comment submitted successfully!";
      name.value = ''; // Clear form fields
      comment.value = '';
      fetchComments(); // Refresh comments
    }
  } catch (err) {
    console.error("An unexpected error occurred:", err);
    submissionStatus.value = "An unexpected error occurred. Please try again later.";
  }
}

async function fetchComments() {
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Error fetching comments:", error);
  } else {
    comments.value = data;
  }
}

onMounted(() => {
  fetchComments();
});
</script>

<style scoped>
/* Basic styling - Customize as needed */
.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-control {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

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