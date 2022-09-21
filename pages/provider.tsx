import styles from '../styles/provider.module.css';
import PageLayout from '../components/page-layout/page-layout';
import { useEffect, useState } from 'react';
import { json } from 'stream/consumers';
import { Provider } from '../models/provider';


const Provider = () => {
    const [providers, setProviders] = useState([] as Provider[])
    useEffect(() => {
        
        fetch('http://localhost:3000/providers', {mode: 'cors'})
        .then((response)=> {
            return response.json()
        }).then((result) => {
            setProviders(result)
        })        
    }, [])

    return (
        <>
          <PageLayout menuSelection='provider'>
            <table className={styles["provider-table"]}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Telefono</th>
                        <th>Empresa</th>
                    </tr>
                </thead>
                <tbody>
                    {providers.map((provider) => 
                        <tr key={provider.id}>
                            <td>{provider.nombre}</td>
                            <td>{provider.telefono}</td>
                            <td>{provider.empresa}</td> 
                        </tr>
                    )
                    }
                </tbody>
            </table>
          </PageLayout>
        </>
    )
}

export default Provider;

