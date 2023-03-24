// import { useContext } from 'react';
// import {Link} from 'react-router-dom';

// import { Context } from '../contexts/Context';

// export const ShowData = () => {
//     const {name} = useContext(Context);
//     return(
//         <div>
//             Tela ShowData de {name}
//             <hr />
//             <Link to='/'>Voltar para tela SignUp</Link>
//         </div>
//     );
// }

import { useContext } from 'react';
import {Link} from 'react-router-dom';

import { Context } from '../contexts/Context';

export const ShowData = () => {
    const {state, dispatch} = useContext(Context);

    return(
        <div>
            Tela ShowData de {state.user.name}
            <hr />
            <Link to='/'>Voltar para tela SignUp</Link>
        </div>
    );
}