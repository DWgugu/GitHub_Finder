import classes from './CardHeader.module.css';
import {Link} from 'react-router-dom'

const CardHeader = ({ userName }: any) => {
  return (
    <div className={classes.card}>
        <h2>Projetos de {userName}</h2>
        <Link to='/'>Nova Busca</Link>
    </div>
  )
}

export default CardHeader