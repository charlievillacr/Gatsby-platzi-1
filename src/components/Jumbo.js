// Estructura básica de un component
import React from 'react'

import { StyledJumbo } from '../styles/components'
import {Image} from './'

export default function Jumbo({ description }) {
    return (
        <StyledJumbo>
            <div>
                <h2>
                    Ropa de Fiesta, Bodas, Graduaciones, 15 años, Blusas y Trajes
                </h2>
                <small>{description}</small>
            </div>
            <Image name='icon' />
        </StyledJumbo>
    )
}