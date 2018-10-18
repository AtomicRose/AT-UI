import React from 'react'
import style from 'SCSS/style.scss'

export default class Style extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Button</h2>
                <div className="row">
                    <div className="col-24" style={{marginTop: '16px'}}>
                        <div className="at-btn-group">
                            <button type="button" className="at-btn btn-small">small</button>
                            <button type="button" className="at-btn ">normal</button>
                            <button type="button" className="at-btn btn-large">large</button>
                        </div>
                    </div>
                    <div className="col-24" style={{ marginTop: '16px' }}>
                        <div className="at-btn-group">
                            <button type="button" className="at-btn">default</button>
                            <button type="button" className="at-btn theme-light-primary">light-primary</button>
                            <button type="button" className="at-btn theme-primary">primary</button>
                            <button type="button" className="at-btn theme-dark-primary">dark-primary</button>
                            <button type="button" className="at-btn theme-info">info</button>
                            <button type="button" className="at-btn theme-success">success</button>
                            <button type="button" className="at-btn theme-warning">warning</button>
                            <button type="button" className="at-btn theme-danger">danger</button>
                            <button type="button" className="at-btn theme-purple">purple</button>
                        </div>
                    </div>
                    <div className="col-24" style={{ marginTop: '16px' }}>
                        <div className="at-btn-group">
                            <button type="button" className="at-btn purely">default</button>
                            <button type="button" className="at-btn theme-light-primary purely">light-primary</button>
                            <button type="button" className="at-btn theme-primary purely">primary</button>
                            <button type="button" className="at-btn theme-dark-primary purely">dark-primary</button>
                            <button type="button" className="at-btn theme-info purely">info</button>
                            <button type="button" className="at-btn theme-success purely">success</button>
                            <button type="button" className="at-btn theme-warning purely">warning</button>
                            <button type="button" className="at-btn theme-danger purely">danger</button>
                            <button type="button" className="at-btn theme-purple purely">purple</button>
                        </div>
                    </div>
                    <div className="col-24" style={{ marginTop: '16px' }}>
                        <div className="at-btn-group">
                            <button type="button" className="at-btn border-radius">default</button>
                            <button type="button" className="at-btn theme-light-primary border-radius">light-primary</button>
                            <button type="button" className="at-btn theme-primary border-radius">primary</button>
                            <button type="button" className="at-btn theme-dark-primary border-radius">dark-primary</button>
                            <button type="button" className="at-btn theme-info border-radius">info</button>
                            <button type="button" className="at-btn theme-success border-radius">success</button>
                            <button type="button" className="at-btn theme-warning border-radius">warning</button>
                            <button type="button" className="at-btn theme-danger border-radius">danger</button>
                            <button type="button" className="at-btn theme-purple border-radius">purple</button>
                        </div>
                    </div>
                    <div className="col-24" style={{ marginTop: '16px' }}>
                        <div className="at-btn-group">
                            <button type="button" className="at-btn purely border-radius">default</button>
                            <button type="button" className="at-btn theme-light-primary purely border-radius">light-primary</button>
                            <button type="button" className="at-btn theme-primary purely border-radius">primary</button>
                            <button type="button" className="at-btn theme-dark-primary purely border-radius">dark-primary</button>
                            <button type="button" className="at-btn theme-info purely border-radius">info</button>
                            <button type="button" className="at-btn theme-success purely border-radius">success</button>
                            <button type="button" className="at-btn theme-warning purely border-radius">warning</button>
                            <button type="button" className="at-btn theme-danger purely border-radius">danger</button>
                            <button type="button" className="at-btn theme-purple purely border-radius">purple</button>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}