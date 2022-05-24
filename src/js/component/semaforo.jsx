import React, { useState } from "react";

//create your first component
const Semaforo = () => {
	const [colorseleccionado, setColorseleccionado] = useState("null");
	const cambiarcolor = (color) => {
		setColorseleccionado("luzroja");
		setInterval(cambionaranja, 1000);
		setInterval(paro, 6500);
	};

	const cambionaranja = function displaynaranja() {
		setColorseleccionado("luznaranja");
		setInterval(cambioverde, 1000);
		setInterval(paro, 6000);
	};

	const cambioverde = function displayverde() {
		setColorseleccionado("luzverde");
		const myInterval = setInterval(cambionaranjaroja, 1000);
		setInterval(paro, 6000);
	};

	const cambionaranjaroja = function displaynaranja() {
		setColorseleccionado("luznaranja");
		setInterval(cambioroja, 1000);
		setInterval(paro, 6000);
	};
	const cambioroja = function displayroja() {
		setColorseleccionado("luzroja");
		setInterval(paro, 1000);
	};
	const paro = function displayparo() {
		setColorseleccionado(" ");
	};
	return (
		<div className="center-me">
			<div className="palosemaforo"></div>
			<div className="semaforo">
				<div
					onClick={() => setColorseleccionado("luzroja")}
					className={
						"luzroja " +
						(colorseleccionado === "luzroja" ? "alumbrado" : "")
					}></div>
				<div
					onClick={() => setColorseleccionado("luznaranja")}
					className={
						"luznaranja " +
						(colorseleccionado === "luznaranja" ? "alumbrado" : "")
					}></div>
				<div
					onClick={() => setColorseleccionado("luzverde")}
					className={
						"luzverde " +
						(colorseleccionado === "luzverde" ? "alumbrado" : "")
					}></div>
			</div>

			<button onClick={cambiarcolor} className="boton">
				Clica para iniciar semáforo
			</button>
		</div>
	);
};

export default Semaforo;
