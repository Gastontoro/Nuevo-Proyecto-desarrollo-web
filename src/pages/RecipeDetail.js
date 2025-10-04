import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getRecipeById, deleteRecipe } from '../api/productsApi'; 
import { Container, Card, Button, Spinner, Alert } from 'react-bootstrap';
import toast from 'react-hot-toast';

const RecipeDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadDetail = async () => {
            try {
                const data = await getRecipeById(id);
                if (data) {
                    setRecipe(data);
                } else {
                    setError('Receta no encontrada. ID inválido.');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadDetail();
    }, [id]);

    const handleDelete = async () => {
        if (window.confirm(`¿Estás seguro de que quieres eliminar la receta: "${recipe.name}"?`)) {
            try {
                await deleteRecipe(id);
                toast.success('Receta eliminada con éxito.');
                navigate('/'); // Redirigir al listado después de eliminar
            } catch (error) {
                toast.error(error.message);
            }
        }
    };

    if (loading) {
        return (
            <div className="text-center my-5">
                <Spinner animation="border" role="status" />
                <p>Cargando detalle de receta...</p>
            </div>
        );
    }

    if (error) {
        return (
            <Container className="my-5">
                <Alert variant="danger">{error}</Alert>
                <Button variant="secondary" onClick={() => navigate('/')}>
                    Volver al Recetario
                </Button>
            </Container>
        );
    }

     const ingredientsList = recipe.ingredients.split('\n').filter(i => i.trim() !== '');

    return (
        <Container className="my-5">
            <Card className="shadow-lg">
                <Card.Header className="bg-success text-white">
                    <h2 className="mb-0">{recipe.name}</h2>
                    <small>{recipe.category} • {recipe.prepTime} min.</small>
                </Card.Header>
                <Card.Body>
                    
                    <Card.Title className="text-secondary mt-3">Ingredientes</Card.Title>
                    <ul className="list-group list-group-flush mb-4">
                        {ingredientsList.map((ing, index) => (
                            <li key={index} className="list-group-item">{ing.trim()}</li>
                        ))}
                    </ul>

                    <Card.Title className="text-secondary">Instrucciones</Card.Title>
                    {/* whiteSpace: 'pre-wrap' respeta los saltos de línea (\n) del textarea */}
                    <Card.Text style={{ whiteSpace: 'pre-wrap' }}>{recipe.instructions}</Card.Text>
                    
                    <div className="mt-4">
                        <Button as={Link} to={`/edit/${recipe.id}`} variant="warning" className="me-2">
                            Editar Receta
                        </Button>
                        <Button variant="danger" className="me-2" onClick={handleDelete}>
                            Eliminar
                        </Button>
                        <Button variant="outline-secondary" onClick={() => navigate('/')}>
                            Volver al Recetario
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default RecipeDetail;