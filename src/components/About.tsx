import { Link } from "react-router";


function About() {

    const productos = ["Escritorios", "Sillas", "Sofas", "Reclinables"];

    return <div>
        <h2>Acerca de nuestros productos</h2>
        <h3>Productos</h3>
        <ul>{productos.map(producto => (
            <li key={producto}>
                <Link to={`/product/${producto}`}>{producto} </Link>
            </li>

        ))}

        </ul>


    </div>

}


export default About
