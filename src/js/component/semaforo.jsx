import React, { useState } from "react";

//create your first component
const Semaforo = () => {
	const [colorseleccionado, setColorseleccionado] = useState("null");
	const [ocultarlila, setOcultarlila] = useState("ocultarlila");
	const [ocultarazul, setOcultarazul] = useState("ocultarazul");

	const cambiarcolor = () => {
		setColorseleccionado("luzroja");
		setInterval(cambionaranja, 2000);
	};

	const cambionaranja = () => {
		setColorseleccionado("luznaranja");
		setInterval(cambioverde, 2000);
	};

	const cambioverde = () => {
		setColorseleccionado("luzverde");
		setInterval(cambiolila, 2000);
	};
	const cambiolila = () => {
		setColorseleccionado("luzlila");
		setInterval(cambiosinluz, 2000);
	};
	const cambiosinluz = () => {
		setColorseleccionado(" ");
		setInterval(myStopFunction, 2000);
	};
	const myStopFunction = () => {
		clearInterval(myInterval);
	};

	const añadircolorlila = () => {
		setOcultarlila("");
	};

	const eliminarcolorlila = () => {
		setOcultarlila("ocultarlila");
	};

	const añadircolorazul = () => {
		setOcultarazul("");
	};

	const eliminarcolorazul = () => {
		setOcultarazul("ocultarazul");
	};
	return (
		<div>
			<div className="dropdown bg-dark p-3 text-end">
				<button
					className="btn btn-light dropdown-toggle"
					type="button"
					id="dropdownMenuButton1"
					data-bs-toggle="dropdown"
					aria-expanded="false">
					Acciones semáforo
				</button>
				<ul
					className="dropdown-menu"
					aria-labelledby="dropdownMenuButton1">
					<li>
						<a
							className="dropdown-item"
							href="#"
							onClick={cambiarcolor}>
							Clica para iniciar semáforo
						</a>
					</li>
					<li>
						<a
							className="dropdown-item"
							href="#"
							onClick={añadircolorlila}>
							Clica para añadir color lila
						</a>
					</li>
					<li>
						<a
							className="dropdown-item"
							href="#"
							onClick={eliminarcolorlila}>
							Clica para eliminar color lila
						</a>
					</li>
					<li>
						<a
							className="dropdown-item"
							href="#"
							onClick={añadircolorazul}>
							Clica para añadir color azul
						</a>
					</li>
					<li>
						<a
							className="dropdown-item"
							href="#"
							onClick={eliminarcolorazul}>
							Clica para eliminar color azul
						</a>
					</li>
				</ul>
			</div>
			<div className="center-me">
				<div className="palosemaforo"></div>
				<div className="semaforo">
					<div
						onClick={() => setColorseleccionado("luzroja")}
						className={
							"luzroja " +
							(colorseleccionado === "luzroja"
								? "alumbradorojo"
								: "")
						}></div>
					<div
						onClick={() => setColorseleccionado("luznaranja")}
						className={
							"luznaranja " +
							(colorseleccionado === "luznaranja"
								? "alumbradonaranja"
								: "")
						}></div>
					<div
						onClick={() => setColorseleccionado("luzverde")}
						className={
							"luzverde " +
							(colorseleccionado === "luzverde"
								? "alumbradoverde"
								: "")
						}></div>
					<div
						onClick={() => setColorseleccionado("luzlila")}
						className={
							ocultarlila +
							" luzlila " +
							(colorseleccionado === "luzlila"
								? "alumbradolila"
								: "")
						}></div>
					<div
						onClick={() => setColorseleccionado("luzazul")}
						className={
							ocultarazul +
							" luzazul" +
							(colorseleccionado === "luzazul"
								? "alumbradoazul"
								: "")
						}></div>
					;
				</div>
			</div>
		</div>
	);
};

export default Semaforo;
