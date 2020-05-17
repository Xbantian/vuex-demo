const state = () => ({
	count: 1,
})
const mutations = {
	// eslint-disable-next-line no-shadow
	increment(state: any, { count = 1 }) {
		//第二个参数可以自定义
		state.count += count
		console.log('a模块++')
	},
	decrement(state: any) {
		// 变更状态
		state.count--
		console.log('a模块--')
	},
}
export default {
	namespaced: true,
	state,
	mutations,
}
