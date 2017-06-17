import * as React from 'react'
import * as text from './titles.json'
import './stylesheets/goodbye.scss'
import './stylesheets/hello.css'

export const hello = (
    <h1 id='title'
        className='hello'>
        {text.default.hello}
    </h1>
)

export const goodbye = (
    <h1 id='title'
        className='goodbye'>
        {text.default.goodbye}
    </h1>
)

