import store from "./store.js";

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch({ type: "AddBug", payload: { description: "bug1" } });
