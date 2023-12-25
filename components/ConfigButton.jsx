export default function ConfigButton(props) {
	return (
		<label className="switch">
			<input
				type="checkbox"
				checked={props.checked}
				onChange={props.changeHandler}
				name={props.name}
			/>
			<span className="slider"></span>
			<p>{props.name}</p>
		</label>
	)
}
