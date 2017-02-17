export const games = [
    { name: 'ATest', short: 'atest' },
    { name: 'ATest2', short: 'atest2' }
]

export const storeFake = (state) => {
	return {
		default: () => {},
		subscribe: () => {},
		dispatch: () => {},
		getState: () => {
			return Object.assign({}, state, {});
		},
	};
};