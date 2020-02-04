import React from 'react'
import SEO from '../components/seo'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'

export default function gracias() {
    return (
        <div>
            <SEO title='Compra Exitosa'/>
            <Purchase>
                <h2>
                    ¡Compra exitosa!
                </h2>
                <p>Esperamos que disfrutes tu compra</p>
                <p>Te esperamos de devuelta.</p>
                <Link to='/'>
                    <Button style={{ margin: `1rem 1rem` }}>Volver al Catálogo</Button>
                </Link>
            </Purchase>
        </div>
    )
}
