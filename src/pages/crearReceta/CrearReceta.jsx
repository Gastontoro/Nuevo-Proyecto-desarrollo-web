import React from 'react';
import { useForm } from 'react-hook-form'; // <-- Requisito del examen
import { useNavigate } from 'react-router-dom';
import { createReceta } from '../../api/recetasApi'; // <-- Importa la función CREATE

const CrearReceta = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            const newId = await createReceta(data);
            
            alert(`Receta "${data.nombre}" creada con éxito! ID: ${newId}`);
            navigate('/recetas'); 
            
        } catch (error) {
            console.error("Error al guardar la receta:", error);
            alert("Hubo un error al crear la receta. Revisa la consola.");
        }
    };return (
        <div className="container mt-5">
            <h2>Crear Nueva Receta</h2>
            
            {/* 3. Usa handleSubmit para envolver la función onSubmit */}
            <form onSubmit={handleSubmit(onSubmit)}>
                
                {/* Campo: Nombre de la Receta */}
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        type="text"
                        className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                        // Usa el hook register y define la validación 'required'
                        {...register("nombre", { required: "El nombre de la receta es obligatorio" })}
                    />
                    {/* Muestra el mensaje de error */}
                    {errors.nombre && <div className="invalid-feedback">{errors.nombre.message}</div>}
                </div>

                {/* Campo: Tiempo de Preparación */}
                <div className="mb-3">
                    <label className="form-label">Tiempo (minutos)</label>
                    <input
                        type="number"
                        className={`form-control ${errors.tiempo_preparacion ? 'is-invalid' : ''}`}
                        {...register("tiempo_preparacion", { 
                            required: "El tiempo es obligatorio",
                            min: { value: 5, message: "Mínimo 5 minutos" } // Validación min
                        })}
                    />
                    {errors.tiempo_preparacion && <div className="invalid-feedback">{errors.tiempo_preparacion.message}</div>}
                </div>

                {/* Campo: Ingredientes (usando textarea) */}
                <div className="mb-3">
                    <label className="form-label">Ingredientes</label>
                    <textarea
                        className={`form-control ${errors.ingredientes ? 'is-invalid' : ''}`}
                        rows="3"
                        {...register("ingredientes", { required: "Debes listar los ingredientes" })}
                    ></textarea>
                    {errors.ingredientes && <div className="invalid-feedback">{errors.ingredientes.message}</div>}
                </div>

                {/* Campo: Instrucciones (usando textarea) */}
                <div className="mb-3">
                    <label className="form-label">Instrucciones</label>
                    <textarea
                        className="form-control"
                        rows="5"
                        {...register("instrucciones")}
                    ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                    Guardar Receta
                </button>
            </form>
        </div>
    );
};

export default CrearReceta;