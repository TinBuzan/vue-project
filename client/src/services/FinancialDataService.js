import Api from '@/services/Api'

export default {
  index (params) {
    return Api().get('financialdata', {
      params: params
    })
  }
  // post (params) {
  //   return Api().post('financialdata', {
  //     params: params
  //   })
  // }
}
