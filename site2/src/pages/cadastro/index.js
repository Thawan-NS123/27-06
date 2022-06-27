import { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


export default function Index(){

    const [nome, setNome] = useState('');

    async function cadastrarPet(){

        const resposta =  await axios.post(
            'http://localhost:5000/pet',{
            nome:nome
        })

        alert(resposta.data)
    }

    return(
        <main>
            <Link to='/'>Voltar</Link>
            <h3>Cadastre um Pet</h3>

            <div>
                <input type='text' value={nome} onChange={e=> setNome(e.target.value)}/>
                <button onClick={cadastrarPet}>Cadastrar</button>
            </div>
        </main> 
    )
}