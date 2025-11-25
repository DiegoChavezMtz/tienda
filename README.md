Prueba Técnica – React.js E-commerce

Este proyecto es una aplicación de e-commerce desarrollada como parte de una prueba técnica. Consume la FakeStore API y permite listar productos, filtrarlos por categoría, ver detalles y gestionar un carrito de compras.

⸻

Tecnologías utilizadas
	•	React.js + TypeScript
	•	React Router para navegación
	•	CSS Modules para el estilado
	•	Fetch API para consumo de datos
	•	Hooks (useState, useEffect, useContext)
	•	Context API para el manejo global del carrito

⸻

Funcionalidades principales

Pantalla principal (Home)
	•	Listado completo de productos provenientes de FakeStore API
	•	Componente ProductCard reutilizable
	•	Filtro dinámico por categorías mediante CategoryFilter
	•	Manejo de estados de carga con un spinner personalizado
	•	Manejo de errores de API

Detalle del producto
	•	Vista individual con información completa
	•	Imagen, descripción y precio
	•	Botón para agregar al carrito
	•	Navegación al detalle y regreso al Home

Carrito de compras
	•	Uso de Context API para almacenar y actualizar el carrito
	•	Agregar productos desde la lista o desde el detalle
	•	Contador de productos
	•	Calculadora de total a pagar

⸻


API utilizada
	•	FakeStore API: https://fakestoreapi.com/

⸻

Cómo ejecutar el proyecto

	1.	Clonar el repositorio:

	git clone https://github.com/DiegoChavezMtz/tienda.git

	2.	Instalar dependencias:

	npm install

	3.	Ejecutar el entorno de desarrollo:

	npm run dev

Autor

Diego Chávez Martínez
