## Integrantes

- Carvallo Shelton
- Estrada Dereck
- Fonseca John
- Mejia Derek

### Dashboard

Para el Dashboard decidimos crear dos view, uno que tendria las ventas del dia, la cantidad de movimientos que hubo, el total de productos en stock y todos los productos con poco stock, otro view para poder cargar todo lo que es la cantidad de ventas que hubo en un mes.

<img src="./src/assets/images/dashboardInicio.jpeg" width="600">

### CRUDs

Para los cruds de bodega, empresa, stock, cliente, producto, proveedor se utilizo el form template para validar que la informacion requirada sea ingresada y que estos campos importantes no cuenten con algun valor null, debido a que algunos objetos tienen informacion de otras tablas se uso un modal con el objetivo de que se pueda buscar con mas precision el valor que se quiere.

<img src="./src/assets/images/modalFindCategoria.jpeg" width="600">

<img src="./src/assets/images/modalFindCiudad.jpeg" width="600">

A continuacion se mostraran imagenes de todas las pantallas con sus respectivas acciones.

### Bodega

#### Crear Bodega
<img src="./src/assets/images/bodegaCreada.jpeg" width="600"> 

#### Actualizar  Bodega
<img src="./src/assets/images/bodegaActualizada.jpeg" width="600"> 

#### Eliminar  Bodega
<img src="./src/assets/images/bodegaEliminado.jpeg" width="600"> 

### Producto

#### Crear Producto
<img src="./src/assets/images/productoCreado.jpeg" width="600"> 

#### Actualizar Producto
<img src="./src/assets/images/productoActualizado.jpeg" width="600"> 

#### Eliminar Producto
<img src="./src/assets/images/productoEliminado.jpeg" width="600"> 

### Proveedor

#### Crear Proveedor
<img src="./src/assets/images/proveedorCreado.jpeg" width="600"> 

#### Actualizar Proveedor
<img src="./src/assets/images/proveedorActualizado.jpeg" width="600"> 

#### Eliminar Proveedor
<img src="./src/assets/images/proveedorEliminado.jpeg" width="600"> 

### Empresa


#### Actualizar Empresa
<img src="./src/assets/images/empresaActualizada.jpeg" width="600"> 

#### Eliminar Empresa
<img src="./src/assets/images/empresaEliminada.jpeg" width="600"> 

#### Invalidar Empresa
<img src="./src/assets/images/empresaInvalid.jpeg" width="600"> 

### Cliente

#### Crear Cliente
<img src="./src/assets/images/clienteCreado.jpeg" width="600"> 

#### Actualizar Cliente
<img src="./src/assets/images/clienteActualizado.jpeg" width="600"> 

#### Eliminar Cliente
<img src="./src/assets/images/clienteEliminado.jpeg" width="600"> 

#### Invalidar Cliente
<img src="./src/assets/images/clienteInvalid.jpeg" width="600"> 
 

### Stock

Para el registro de stock, fue necesario aplicar un filtro que verificara si un producto ya existía en una bodega específica, asegurándose de que dicha bodega perteneciera a una sucursal, y que esta sucursal formara parte de la misma empresa. De esta manera, se evita que el mismo producto sea registrado más de una vez en las mismas condiciones.

#### Invalidar Stock
<img src="./src/assets/images/stockInvalid.jpeg" width="600"> 

#### Ingresar nueva cantidad stock
<img src="./src/assets/images/stockIngreso.jpeg" width="600"> 


#### Stock Actualizado
<img src="./src/assets/images/stockActualizado.jpeg" width="600"> 

### Dashboard Actualizado

<img src="./src/assets/images/dashboardFinal.jpeg" width="600"> 
