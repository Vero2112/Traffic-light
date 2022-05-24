import React, { useState } from "react";

//create your first component
const Semaforo = () => {
	const [colorseleccionado, setColorseleccionado] = useState("null");
	// const cambiarcolor = () => {
	// 	setColorseleccionado("alumbrado");
	// };
	// let string = "";
	// if (colorseleccionado === "red") string = "alumbrado";

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

			<button className="boton">Clica para iniciar semáforo </button>
		</div>
	);
};

export default Semaforo;
