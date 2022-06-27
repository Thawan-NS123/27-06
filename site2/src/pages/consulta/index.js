import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'


export default function Index(){

    const [pet, setPet] = useState([]);

    async function carregarTodosPets(){
        const resposta = await axios.get('http://localhost:5000/pet')
        setPet(resposta.data)
    }

    useEffect(() => {
        carregarTodosPets();
    }, [])

    return(
        <main>
            <Link to='/'>Voltar</Link>
            <h3>Consulta</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {pet.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                        </tr>   
                    )}

                </tbody>
            </table>
        </main>    
    )
}