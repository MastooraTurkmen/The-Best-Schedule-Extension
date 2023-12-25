import ConfigButton from "./ConfigButton"
import { nanoid } from "nanoid"

export default function ConfigMenu(props) {
	const { widgetConfig, setWidgetConfig, DEFAULT_CONFIG } = props.stateProps

	function reset() {
		setWidgetConfig(DEFAULT_CONFIG)
	}

	const ConfigButtons = widgetConfig.map((widget) => {
		return (
			<ConfigButton
				name={widget.name}
				checked={widget.selected}
				changeHandler={props.changeHandler}
				key={nanoid()}
			/>
		)
	})

	return (
		<div className="configuration-menu">
			<button className="push-button" onClick={reset}>
				Reset
			</button>
			<button className="push-button" onClick={props.save}>
				Save
			</button>
			{ConfigButtons}
		</div>
	)
}
