import { RepoProps } from '../types/repo';
import classes from './CardRepo.module.css';

const CardRepo = ({ name, visibility, forks, html_url }: RepoProps) => {
    console.log(name);
    
  return (
    <div className={classes.repo}>
        <h2>{name}</h2>
        <div className={classes.infos}>
            <div>
                <p>Visibilidade:</p>
                <p className={visibility === 'public' ? classes.public : classes.private}>{visibility === 'public' ? 'Público' : "Privado"}</p>
            </div>
            <div>
                <p>Forks:</p>
                <p className={classes.number}>{forks}</p>
            </div>
        </div>
        <a target='blank' href={html_url}>Ver projeto</a>
    </div>
  )
}

export default CardRepo