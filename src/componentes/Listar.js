import React from 'react';

class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Oscar U</td>
                    <td>oscar.mendez@gmail.com</td>
                </tr>
            </tbody>
        </table> );
    }
}
 
export default Listar;