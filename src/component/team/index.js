import Colaborate from '../colaborate'
import './team.css'

const Team = (props) => {
    return(
       (props.colaborate.length) > 0 ?
        <section className='team' style={{backgroundColor: props.secundaryColor}}>
            <h3 style={{ borderColor: props.primaryColor}}>
                {props.name}
            </h3>
            <div className='card'>
                {props.colaborate.map((p) => 
                    <Colaborate 
                        key={p.name}
                        name={p.name}
                        post={p.post}
                        image={p.image}
                        primaryColor={props.primaryColor}
                    />)
                }
            </div>
        </section> : ''
    )
}

export default Team