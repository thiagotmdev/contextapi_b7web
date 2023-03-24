// import { useContext } from 'react';
// import {Link} from 'react-router-dom';

// import { Context } from '../contexts/Context';

// export const SignUp = () => {
//     const{name, age} = useContext(Context);

//     return(
//         <div>
//             Tela SignUp de {name} que tem {age} anos.
//             <hr />
//             <Link to='exibir'>Ir para ShowData</Link>
//         </div>
//     );
// }

import { useContext } from "react";
import {Link} from 'react-router-dom';
import { Context } from "../contexts/Context";

export const  SignUp = () => {
    const {state, dispatch} = useContext(Context);

    const handleChangeName = () => {
        dispatch({
            type:'CHANGE_NAME',
            payload: {
                name: 'Pedro'
            }
        });
    }

    return(
        <div>
            Tela SignUp de {state.user.name} que tem {state.user.age} anos.
            <button onClick={handleChangeName}>Trocar nome para Pedro</button>
            <br />
            <Link to="/exibir">Ir para ShowData</Link>
        </div>
    );
}