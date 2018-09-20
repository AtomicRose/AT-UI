import React from 'react'
import style from 'SCSS/style.scss'

export default class Style extends React.Component {
    render() {
        console.log(style)
        return (
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">This is style home</div>  
        )
    }
}