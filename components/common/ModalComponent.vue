<template>
  <div v-if="show" class="dialog" @click.stop="$emit('toggle')">
    <div class="dialog__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
