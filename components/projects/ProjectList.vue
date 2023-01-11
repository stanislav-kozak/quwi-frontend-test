<template>
  <div class="project__list container">
    <ProjectComponent
      v-for="project in projects"
      :key="project.id"
      :project="project"
      @click="$emit('openModal', project)"
    />
  </div>
</template>

<script>
import ProjectComponent from '~/components/projects/ProjectComponent'

export default {
  name: 'ProjectList',
  components: {
    ProjectComponent,
  },
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
}
</script>
