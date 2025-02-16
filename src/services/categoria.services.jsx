import API_URL from "../config/config";

export async function obtenerCategorias() {
    try {
        const response = await fetch(`${API_URL}/categorias`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });

        if (!response.ok) throw new Error("Error al obtener categorías");

        return await response.json();
    } catch (error) {
        return [];
    }
}

export async function obtenerCategoriaPorNombre(nombre) {
    try {
        const response = await fetch(`${API_URL}/categorias/buscar?nombre=${nombre}`);
        if (!response.ok) throw new Error(`Error al buscar la categoría: ${nombre}`);

        return await response.json();
    } catch (error) {
        return null;
    }
}

export async function obtenerProductosPorCategoria(idCategoria) {
    try {
        const response = await fetch(`${API_URL}/categorias/${idCategoria}`);
        if (!response.ok) throw new Error("Error al obtener productos");

        const data = await response.json();
        return data.productos || [];
    } catch (error) {
        return [];
    }
}
