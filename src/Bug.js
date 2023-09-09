import "./Bug.css";
import store from "./redux/store";
import { useEffect, useState } from "react";

function ShowBug(props) {
	return (
		<>
			<div className="bugContainer">
				<div>{props.obj.description}</div>
				<button
					onClick={() =>
						store.dispatch({
							type: "RemoveBug",
							payload: { id: props.obj.id },
						})
					}
				>
					REMOVE
				</button>
			</div>
		</>
	);
}

function BugList() {
	const [list, setList] = useState([]);

	store.subscribe(() => {
		setList(store.getState());
	});

	return (
		<>
			{list.map((item, idx) => {
				return <ShowBug obj={item} key={idx}></ShowBug>;
			})}
		</>
	);
}

function Heading() {
	return <h1>Bug Tracking Application</h1>;
}

function Bug() {
	const [val, setVal] = useState(null);
	return (
		<>
			<Heading></Heading>
			<div className="container">
				<input onChange={(event) => setVal(event.target.value)} />
				<button
					onClick={() =>
						store.dispatch({
							type: "AddBug",
							payload: { description: val },
						})
					}
				>
					ADD
				</button>
			</div>
			<div className="bugContainerList">
				<BugList></BugList>
			</div>
		</>
	);
}

export default Bug;
