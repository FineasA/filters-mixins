<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <p>{{ text | reverseText }}</p>

        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <p>{{ countedText | appendLength }}</p>

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <input type="text" v-model="inputText" />
        <p>
          What you type will be reversed and its' length:
          {{ reverseTextComputed }}
        </p>

        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        <input-reverse></input-reverse>
      </div>
    </div>
  </div>
</template>

<script>
import { reversedMixin } from "./reversedMixin.js";
import InputReverse from "./components/InputReverse.vue";

export default {
  data() {
    return {
      text: "This text is reversed through a local filter",
      countedText: "Test String",
      inputText: ""
    };
  },
  filters: {
    reverseText(value) {
      return value
        .split("")
        .reverse()
        .join("");
    }
  },
  computed: {
    reverseTextComputed() {
      return `${this.inputText
        .split("")
        .reverse()
        .join("")} (${this.inputText.length})`;
    }
  },
  mixins: [reversedMixin],
  components: {
    InputReverse
  }
};
</script>

<style>
</style>
