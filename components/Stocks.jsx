import React from "react"
import Draggable from "react-draggable"

export default function Stocks(props) {
	return (
		<div
			className="widget-wrapper Stocks"
			style={{ gridArea: `area-${props.gridArea}` }}
		>
			<Draggable
				onStop={props.dragHandler}
				defaultPosition={props.getOffset("Stocks")}
				cancel="button"
			>
				<div className="widget Stocks">
					<button
						className="remove-button"
						name="Stocks"
						onClick={props.changeHandler}
					></button>
					<img src="./images/widgets/stock.png" />
				</div>
			</Draggable>
		</div>
	)
}
