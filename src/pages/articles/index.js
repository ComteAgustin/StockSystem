// Import dependencies 
import React from 'react'
// Import Components
import ArticlesForm from 'components/ArticlesForm'
// Import Css
import 'index.css'
import 'components/form-crud.css'
import './articles.css'

// Component
const Articles = () => {
    return(
        <div className="section">   
            <h3 className="section-h3 container">
                Articulos  
                <span>
                    registrar
                </span>
            </h3>
            <div className="section--body container">
                <h2 class="container">
                    Registrar
                </h2>
                <div className="info">
                    <div className="info-body container">
                        <h5>
                            <i>I</i> Info
                        </h5>
                        <p>Recuerde cargar el stock del articulo que esta cargando</p>
                    </div>
                </div>

                <ArticlesForm />
            </div>
        </div>
    )
}

// Export
export default Articles