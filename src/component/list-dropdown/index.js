import './ListDropdown.css'

const ListDropDown = (props) => {
    const onChanged = (event) => {
        // setValue(event.target.value)
        props.onChanged(event.target.value)
    }

    return (
        <div className='list-dropdown'>
            <label>{props.label}</label>
            <select required={props.required} onChange={onChanged} value={props.value}>
                <option value=''/>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListDropDown