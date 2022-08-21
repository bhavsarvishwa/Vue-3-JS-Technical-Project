<template>
  <div class="p-9">
    <h1 class="text-3xl font-bold">Vue 3 JS Technical Project v1</h1>

    <div class="mt-6 mb-3 flex justify-start items-center gap-5">
      <span class="font-bold">Select-Color : </span>
      <div
        class="flex p-1"
        :class="
          selectedColor === 'blue'
            ? 'border-solid border-blue-700 border-2 rounded-2xl'
            : 'border-none'
        "
      >
        <button
          class="p-2 rounded-lg bg-blue-700"
          @click="updateColor('blue')"
        />
      </div>
      <div
        class="flex p-1"
        :class="
          selectedColor === 'red'
            ? 'border-solid border-red-700 border-2 rounded-2xl'
            : 'border-none'
        "
      >
        <button class="p-2 rounded-lg bg-red-700" @click="updateColor('red')" />
      </div>
    </div>

    <div>
      <Upvote
        :upvote="upvote"
        @updateState="(newState) => updateState(newState)"
      />
    </div>

  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

import Upvote from '../components/Upvote.vue'

export default {
  components: {
    Upvote,
  },

  setup() {
    const store = useStore()
    const selectedColor = computed(() => store.state.selectedColor)

    return {
      upvote: computed(() => store.state.upvote),
      selectedColor,
      updateState: (newUpvote) => store.dispatch('updateVote', newUpvote),
      updateColor: (newColor) => store.dispatch('changeColor', newColor),
    }
  },
}
</script>
