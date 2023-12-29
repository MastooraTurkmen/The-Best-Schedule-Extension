import React from "react"
import Draggable from "react-draggable"
import quote from "../images/widgets/quote.png"

export default function Quote(props) {
	return (
		<div
			className="widget-wrapper Quote"
			style={{ gridArea: `area-${props.gridArea}` }}
		>
			<Draggable
				onStop={props.dragHandler}
				defaultPosition={props.getOffset("Quote")}
				cancel="button"
			>
				<div className="widget Quote">
					<button
						className="remove-button"
						name="Quote"
						onClick={props.changeHandler}
					></button>
					<img src={quote} />
				</div>
			</Draggable>
		</div>
	)
}
