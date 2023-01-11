import ApiService from './api'

export default class Projects extends ApiService {
  projectsList(params) {
    return this.axios.$get(
      `projects-manage/index`,
      {
        params
      }
    )
  }
  updateProject(data) {
    return this.axios.$post(
      `projects-manage/update`,
      data.project,
      {
        params: data.params
      }
    )
  }
}
