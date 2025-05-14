import { useParams } from 'react-router';

function ProductDetail() {
    const { name } = useParams();
    return <p>Detalle del producto: {name}</p>;
}

export default ProductDetail