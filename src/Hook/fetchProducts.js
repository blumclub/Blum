export default async function fetchProducts() {
    try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRmOvom_qRVeKJLMmVB6s_bVLbCC39VLM73TPIAhCC3aZMUYqWk-ICn5DZrqKc-ZHKohCeYto1cjNuC/pub?output=csv');
        const csv = await response.text();

        const productos = csv.split("\n").slice(1).map((row) => {
            const [idProducto, NombreProducto, Descripcion, DescripcionExt, Precio, ImagenV, imgV1, imgV2, imgV3, imgV4, ImagenH, imgH1, imgH2, imgH3, imgH4 ] = row.split(',');
            return { idProducto, NombreProducto, Descripcion, DescripcionExt, Precio, ImagenV, imgV1, imgV2, imgV3, imgV4, ImagenH, imgH1, imgH2, imgH3, imgH4 };
        });

        return productos.filter(p => p.idProducto); // Filtra elementos vacíos
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        return []; // Devuelve un array vacío en caso de error
    }
}