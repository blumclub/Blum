import Papa from "papaparse";

export default async function fetchProducts() {
    try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRmOvom_qRVeKJLMmVB6s_bVLbCC39VLM73TPIAhCC3aZMUYqWk-ICn5DZrqKc-ZHKohCeYto1cjNuC/pub?output=csv');
        const csv = await response.text();

        const productos = Papa.parse(csv, { header: true }).data;

        // Filtrar imágenes inválidas antes de mapear los productos
        return productos.map(p => ({
            idProducto: p.idProducto,
            NombreProducto: p.NombreProducto,
            Descripcion: p.Descripcion,
            DescripcionExt: p.DescripcionExt,
            Precio: p.Precio,
            ImagenV: p.ImagenV || "", // Evitar valores undefined
            imgV1: p.imgV1 || "",
            imgV2: p.imgV2 || "",
            imgV3: p.imgV3 || "",
            ImagenH: p.ImagenH || "",
            imgH1: p.imgH1 || "",
            imgH2: p.imgH2 || "",
            imgH3: p.imgH3 || "",
        })).filter(p => p.idProducto);
        
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        return [];
    }
}
