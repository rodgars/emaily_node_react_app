import React from 'react';

// {input} é propriedade de props. Para saber o valor console.log(props)
// {...input} é para não ter q declarar todos os eventos como onblur, onchange, etc. é uma forma resumida que devolve todos eles para o componente via redux
export default ({ input, label, meta:{error, touched} }) => {
    return(
        <div>
            <label>{label}</label>
            <input {...input} style={{marginBottom: '5px'}} />
            <div className="red-text" style={{marginBottom: '20px'}}>
                {touched && error}
            </div>
        </div>
    );
};