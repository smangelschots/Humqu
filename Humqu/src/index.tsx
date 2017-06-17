import * as React from 'react'
import { render } from 'react-dom'
import { hello, goodbye } from './comp/lib'

render(
    <div>
        {hello}
        {goodbye}
    </div>,
    document.getElementById('app')
)