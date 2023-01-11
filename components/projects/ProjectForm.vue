<template>
  <div class="project__form__wrapper">
    <input v-model="form.name" type="text" placeholder="name" />
    <div class="d-flex justify-content-center">
      <button class="btn btn-primary" @click="$emit('update', form)">
        Update
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectFormComponent',
  props: {
    project: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      form: {
        name: '',
      },
    }
  },
  mounted() {
    this.form.name = this.project?.name ?? ''
  },
}
</script>
