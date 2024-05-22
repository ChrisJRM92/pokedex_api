import '../styles/Stats.css'

const Stats = ({data}) => {

  return (
    <div>
      <div className="stat_G">
        <div className="titles">
          <p className="styles">HP.</p>
          <p className="styles">{data.hp}/150</p>
        </div>
        <div className='progress_bar'>
          <hr className='pogresbar PBack' />
          <hr style={{width: `${data.hp/1.5}%`}} className='pogresbar PFront' />
        </div>
      </div>

      <div className="stat_G">
        <div className="titles">
          <p className="styles">Ataque.</p>
          <p className="styles">{data.attack}/150</p>
        </div>
        <div className='progress_bar'>
          <hr className='pogresbar PBack' />
          <hr style={{width: `${data.attack/1.5}%`}} className='pogresbar PFront' />
        </div>
      </div>

      <div className="stat_G">
        <div className="titles">
          <p className="styles">Defensa.</p>
          <p className="styles">{data.defence}/150</p>
        </div>
        <div className='progress_bar'>
          <hr className='pogresbar PBack' />
          <hr style={{width: `${data.defence/1.5}%`}} className='pogresbar PFront' />
        </div>
      </div>

      <div className="stat_G">
        <div className="titles">
          <p className="styles">Ataque especial.</p>
          <p className="styles">{data.specialAttack}/150</p>
        </div>
        <div className='progress_bar'>
          <hr className='pogresbar PBack' />
          <hr style={{width: `${data.specialAttack/1.5}%`}} className='pogresbar PFront' />
        </div>
      </div>

      <div className="stat_G">
        <div className="titles">
          <p className="styles">Defensa especial.</p>
          <p className="styles">{data.specialDefense}/150</p>
        </div>
        <div className='progress_bar'>
          <hr className='pogresbar PBack' />
          <hr style={{width: `${data.specialDefense/1.5}%`}} className='pogresbar PFront' />
        </div>
      </div>

      <div className="stat_G">
        <div className="titles">
          <p className="styles">Velocidad.</p>
          <p className="styles">{data.speed}/150</p>
        </div>
        <div className='progress_bar'>
          <hr className='pogresbar PBack' />
          <hr style={{width: `${data.speed/1.5}%`}} className='pogresbar PFront' />
        </div>
      </div>


    </div>
  )
}

export default Stats