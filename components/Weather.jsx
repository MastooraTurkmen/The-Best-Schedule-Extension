import React from "react"
import Draggable from "react-draggable"

export default function Weather(props) {
	return (
		<div
			className="widget-wrapper Weather"
			style={{ gridArea: `area-${props.gridArea}` }}
		>
			<Draggable
				onStop={props.dragHandler}
				defaultPosition={props.getOffset("Weather")}
				cancel="button"
			>
				<div className="widget Weather">
					<button
						className="remove-button"
						name="Weather"
						onClick={props.changeHandler}
					></button>
					<img src="./images/widgets/weather.png" />
				</div>
			</Draggable>
		</div>
	)
}
