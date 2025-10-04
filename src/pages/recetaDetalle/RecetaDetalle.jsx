import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRecetaById, deleteReceta } from '../../api/recetasApi'; // Importa las funciones API

const RecetaDetalle = () => {
    // Hooks de React
    const { id } = useParams(); // Obtiene el :id de la URL
    const navigate = useNavigate();
    const [receta, setReceta] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const cargarReceta = async () => {
            try {
                const data = await getRecetaById(id);
                if (data) {
                    setReceta(data);
                } else {
                    setError("Receta no encontrada.");
                }
            } catch (err) {
                setError("Error al cargar los datos de Firebase.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
const handleEliminar = async () => {
        if (window.confirm(`¿Estás seguro de que quieres eliminar la receta "${receta.nombre}"?`)) {
            try {
                await deleteReceta(id);
                alert('Receta eliminada con éxito.');
                navigate('/recetas'); // Redirige al listado
            } catch (err) {
                alert('Ocurrió un error al intentar eliminar la receta.');
                console.error(err);
            }
        }
    };
    if (loading) return <p className="container mt-5">Cargando detalles de la receta...</p>;
    if (error) return <p className="container mt-5 text-danger">{error}</p>;
    if (!receta) return <p className="container mt-5">Receta no disponible.</p>;
 const handleEliminar = async () => {
        if (window.confirm(`¿Estás seguro de que quieres eliminar la receta "${receta.nombre}"?`)) {
            try {
                await deleteReceta(id);
                alert('Receta eliminada con éxito.');
                navigate('/recetas'); // Redirige al listado
            } catch (err) {
                alert('Ocurrió un error al intentar eliminar la receta.');
                console.error(err);
            }
        }
    };
    
    if (loading) return <p className="container mt-5">Cargando detalles de la receta...</p>;
    if (error) return <p className="container mt-5 text-danger">{error}</p>;
    if (!receta) return <p className="container mt-5">Receta no disponible.</p>;
return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h1>{receta.nombre}</h1>
                </div>
                <div className="card-body">
                    
                    <h5 className="card-title">Tiempo de Preparación: {receta.tiempo_preparacion} minutos</h5>
                    <hr/>
                    
                    <h5 className="mt-4">Ingredientes</h5>
                    <p className="card-text">{receta.ingredientes}</p> 
                    
                    <h5 className="mt-4">Instrucciones</h5>
                    <p className="card-text">{receta.instrucciones}</p>
                </div>
                <div className="card-footer d-flex justify-content-end gap-2">
                    {/* Botón para editar: Navega a una ruta de edición (la crearemos luego) */}
                    <button 
                        className="btn btn-warning"
                        onClick={() => navigate(`/editar-receta/${receta.id}`)}
                    >
                        Editar
                    </button>
                    
                    {/* Botón para eliminar (CRUD: DELETE) */}
                    <button 
                        className="btn btn-danger"
                        onClick={handleEliminar}
                    >
                        Eliminar
                    </button>
                </div>
            </div>

            {/* Botón para volver al listado */}
            <button className="btn btn-secondary mt-3" onClick={() => navigate('/recetas')}>
                ← Volver al Listado
            </button>
        </div>
    );
};

export default RecetaDetalle;