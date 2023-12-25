import React from "react"
import Draggable from "react-draggable"

export default function News(props) {
	return (
		<div
			className="widget-wrapper News"
			style={{ gridArea: `area-${props.gridArea}` }}
		>
			<Draggable
				onStop={props.dragHandler}
				defaultPosition={props.getOffset("News")}
				cancel="button"
			>
				<div className="widget News">
					<button
						className="remove-button"
						name="News"
						onClick={props.changeHandler}
					></button>
					<img src="./images/widgets/news.png" />
				</div>
			</Draggable>
		</div>
	)
}
