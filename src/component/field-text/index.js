import './FieldText.css'

const FieldText = (props) => {
    // let value = ''

    // const [value, setValue] = useState('')

    const onTyping = (event) => {
        // setValue(event.target.value)
        props.onChanged(event.target.value)
    }

    return (
        <div className="field-text">
            <label>{props.label}</label>
            <input value={props.value} onChange={onTyping} required={props.required} placeholder={`${props.placeholder}...`} />
        </div>

    )

}

export default FieldText