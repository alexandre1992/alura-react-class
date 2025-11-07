import './colaborate.css'

const Colaborate = ({name, post, image, primaryColor}) => {
    return(
    <div className='colaborate'>
        <div className='header' style={{backgroundColor: primaryColor}}>
            <img src={image} alt={name}/>

        </div>
        <div className='bottom'>
            <h4>{name}</h4>
            <h5>{post}</h5>
        </div>
    </div>
    )

}

export default Colaborate