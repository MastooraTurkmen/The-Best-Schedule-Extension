import React from "react"
import Draggable from "react-draggable"

export default function ToDo(props) {
	return (
		<div
			className="widget-wrapper ToDo"
			style={{ gridArea: `area-${props.gridArea}` }}
		>
			<Draggable
				onStop={props.dragHandler}
				defaultPosition={props.getOffset("ToDo")}
				cancel="button"
			>
				<div className="widget ToDo">
					<button
						className="remove-button"
						name="ToDo"
						onClick={props.changeHandler}
					></button>

					<img src="./images/widgets/todo.png" />
				</div>
			</Draggable>
		</div>
	)
}
