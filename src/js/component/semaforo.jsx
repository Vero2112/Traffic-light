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
		<div>
			<div className="container-fluid bg-white ">
				<div className="row">
					{/* <div className="col-5"></div> */}
					<div className="col-12 palosemaforo"></div>
					{/* <div className="col-3"></div> */}
				</div>
				<div className="row">
					<div className="col-5"></div>
					<div className="col-2 semaforo">
						<div
							onClick={() => setColorseleccionado("luzroja")}
							className={
								"luzroja " +
								(colorseleccionado === "luzroja"
									? "alumbrado"
									: "")
							}></div>
						<div
							onClick={() => setColorseleccionado("luznaranja")}
							className={
								"luznaranja " +
								(colorseleccionado === "luznaranja"
									? "alumbrado"
									: "")
							}></div>
						<div
							onClick={() => setColorseleccionado("luzverde")}
							className={
								"luzverde " +
								(colorseleccionado === "luzverde"
									? "alumbrado"
									: "")
							}></div>
					</div>
					<div className="col-5"></div>
				</div>
			</div>
		</div>
	);
};

export default Semaforo;
