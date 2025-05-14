import { Link, Outlet, useParams } from 'react-router';

function Product() {
    const { name } = useParams();
    return (<div>
        <h1>Nombre del producto: {name}</h1>
        <Link to={'detail'}>Ir a los detalles</Link>
        <Outlet />
    </div>
    )
}

export default Product