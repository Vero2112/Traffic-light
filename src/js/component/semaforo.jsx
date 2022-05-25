import React, { useState } from "react";

//create your first component
const Semaforo = () => {
	const [colorseleccionado, setColorseleccionado] = useState("null");
	const cambiarcolor = (color) => {
		setColorseleccionado("luzroja");
		setInterval(cambionaranja, 2000);
	};

	const cambionaranja = function displaynaranja() {
		setColorseleccionado("luznaranja");
		setInterval(cambioverde, 2000);
	};

	const cambioverde = function displayverde() {
		setColorseleccionado("luzverde");
		const myInterval = setInterval(cambiosinluz, 2000);
	};

	const cambiosinluz = function displayverde() {
		setColorseleccionado(" ");
		const myInterval = setInterval(myStopFunction, 2000);
	};
	function myStopFunction() {
		clearInterval(myInterval);
	}

	return (
		<div className="center-me">
			<div className="palosemaforo"></div>
			<div className="semaforo">
				<div
					onClick={() => setColorseleccionado("luzroja")}
					className={
						"luzroja " +
						(colorseleccionado === "luzroja" ? "alumbradorojo" : "")
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
			</div>

			<button onClick={cambiarcolor} className="boton1">
				Clica para iniciar semáforo
			</button>

			<button onClick={cambiarcolor} className="boton2">
				Clica para añadir color
			</button>
		</div>
	);
};

export default Semaforo;
