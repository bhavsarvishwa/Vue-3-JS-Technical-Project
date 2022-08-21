<template>
  <div class="mx-4 p-3 flex-row flex justify-start items-center">
    <div
      v-if="upvote"
      class="p-3 rounded-lg border-2 border-primary-100 flex flex-row gap-3 mr-3"
      style="min-width: calc(288px + 5.25rem)"
    >
      <button
        v-for="item in upvote.count"
        :key="`${item}-${upvote.selected}`"
        class="p-2 rounded-lg"
        :class="
          upvote.selected
            ? selectedColor === 'blue'
              ? 'bg-blue-100'
              : 'bg-red-100'
            : 'bg-primary-100'
        "
        @click="changeStateHandle"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3149 6.29307C11.4939 6.09658 11.7418 5.99834 12.0034 5.99834C12.265 5.99834 12.5128 6.11062 12.6918 6.29307L16.7125 10.3913C16.9053 10.5878 17.0016 10.8404 17.0016 11.0931C17.0016 11.3457 16.9053 11.5983 16.7125 11.7948C16.3407 12.1738 15.7211 12.1738 15.3493 11.7948L12.9672 9.36676V17.0417C12.9672 17.589 12.5404 18.0017 12.0034 18.0017C11.4664 18.0017 11.0395 17.589 11.0395 17.0417V9.36676L8.64364 11.7948C8.27187 12.1738 7.65225 12.1738 7.28048 11.7948C6.9087 11.4159 6.9087 10.7843 7.28048 10.4054L11.3149 6.29307Z"
            :class="
              upvote.selected
                ? selectedColor === 'blue'
                  ? 'fill-blue-700'
                  : 'fill-red-700'
                : 'fill-primary-700'
            "
          />
        </svg>
      </button>
    </div>

    <button
      class="bg-primary-100 text-primary-700 p-2 rounded-lg"
      @click="addUpvoteHandle"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5C11.4477 5 11 5.45098 11 5.99078V11H5.99078C5.44359 11 5 11.4439 5 12C5 12.5523 5.45098 13 5.99078 13H11V18.0092C11 18.5564 11.4439 19 12 19C12.5523 19 13 18.549 13 18.0092V13H18.0092C18.5564 13 19 12.5561 19 12C19 11.4477 18.549 11 18.0092 11H13V5.99078C13 5.44359 12.5561 5 12 5Z"
          class="fill-primary-700"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, toRefs } from 'vue'

export default {
  props: {
    upvote: {
      type: Object,
      default: null,
    },
  },

  emits: ['updateState'],

  setup(props, { emit }) {
    const store = useStore()
    const { upvote } = toRefs(props)

    const selectedColor = computed(() => store.state.selectedColor)

    return {
      selectedColor,

      addUpvoteHandle: () => {
        emit('updateState', {
          ...upvote.value,
          count: upvote.value.count + 1,
        })
      },
      changeStateHandle: () => {
        emit('updateState', {
          ...upvote.value,
          selected: !upvote.value.selected,
        })
      },
    }
  },
}
</script>
