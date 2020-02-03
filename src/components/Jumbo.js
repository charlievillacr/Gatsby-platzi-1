// Estructura básica de un component
import React from 'react'

import { StyledJumbo } from '../styles/components'

export default function Jumbo() {
    return (
        <StyledJumbo>
            <div>
                <h2>
                    Ropa de Fiesta, Bodas, Graduaciones, 15 años, Blusas y Trajes
                </h2>
                <small>Escribenos al WhatsApp 6079-5917 para consultas</small>
            </div>

        </StyledJumbo>
    )
}