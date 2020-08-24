<template>
  <div class="notification is-danger">
    {{ message }}
  </div>

  <!-- <div v-else class="notification is-info">
    {{ message }}
  </div> -->
</template>

<script>
export default {
  name: "Notification",
  props: ["message"]
};
</script>