let lastId = 0;

function reducer(state = [], action) {
	if (action.type === "AddBug") {
		return [
			...state,
			{
				id: ++lastId,
				description: action.payload.description,
				resolved: false,
			},
		];
	}

	if (action.type === "RemoveBug") {
		return state.filter((value)=>value.id !== action.payload.id)
	}

	return state;
}

export default reducer;
