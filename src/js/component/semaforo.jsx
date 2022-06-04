import React, { useState } from "react";

//create your first component
const Semaforo = () => {
	const [colorseleccionado, setColorseleccionado] = useState("null");
	const [ocultar, setOcultar] = useState("ocultar");

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

	const añadircolor = () => {
		setOcultar("");
	};

	const eliminarcolor = () => {
		setOcultar("ocultar");
	};
	return (
		<div>
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
							ocultar +
							" luzlila " +
							(colorseleccionado === "luzlila"
								? "alumbradolila"
								: "")
						}></div>
					;
				</div>
			</div>

			<button
				onClick={cambiarcolor}
				className="boton1 btn btn-outline-dark position-absolute top-50 start-50 translate-middle">
				Clica para iniciar semáforo
			</button>
			<button
				onClick={añadircolor}
				className="boton2 btn btn-outline-dark position-absolute top-50 start-50 translate-middle">
				Clica para añadir color
			</button>
			<button
				onClick={eliminarcolor}
				className="boton3 btn btn-outline-dark position-absolute top-50 start-50 translate-middle">
				Clica para eliminar color
			</button>
		</div>
	);
};

export default Semaforo;
