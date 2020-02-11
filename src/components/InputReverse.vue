<template>
  <div>
    <input type="text" v-model="inputText" />
    <p>
      What you type will be reversed and its' length:
      {{ reverseTextComputed }}
    </p>
  </div>
</template>

<script>
import { reversedMixin } from "../reversedMixin.js";

export default {
  mixins: [reversedMixin]
};
</script>

<style>
</style>