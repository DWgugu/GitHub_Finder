import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import CardRepo from "../components/CardRepo";
import CardHeader from "../components/CardHeader";

const Repository = () => {
    const [repo, setRepo] = useState([])
    const [error, setError] = useState(false)
    const {userName} = useParams();
  
    const loadRepos = async(url: string) => {
      setError(false)
  
      const res = await fetch(url)
  
      const data = await res.json();
  
      if(res.status === 404) {
        setError(true)
        return
      }
  
      setRepo(data)
      console.log(data);
      
    }

    useEffect(() => {
      const reposUrl = `https://api.github.com/users/${userName}/repos`
      loadRepos(reposUrl)
  }, [])
  
    return (
      <>
        <CardHeader userName={userName}/>
        {repo.map((r: any) => {
          return(<CardRepo name={r.name} visibility={r.visibility} forks={r.forks} html_url={r.html_url} />)
        })}
      </>
    )
}

export default Repository