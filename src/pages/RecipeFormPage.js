import React, { useState, useEffect, useCallback } from 'react';
import { getRecipes, deleteRecipe } from '../api/productsApi'; 
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import toast from 'react-hot-toast';

const RecipeListPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadRecipes = useCallback(async () => {
        setLoading(true);
        try {
            const data = await getRecipes();
            setRecipes(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadRecipes();
    }, [loadRecipes]); // Se ejecuta solo al montar (gracias a useCallback)

    const handleDelete = async (id, name) => {
        if (window.confirm(`¿Estás seguro de que quieres eliminar la receta: "${name}"?`)) {
            try {
                await deleteRecipe(id);
                // Actualiza el estado localmente para reflejar el cambio
                setRecipes(recipes.filter((r) => r.id !== id));
                toast.success('Receta eliminada con éxito.');
            } catch (error) {
                toast.error(error.message);
            }
        }
    };

    if (loading) {
        return (
            <div className="text-center my-5">
                <Spinner animation="border" role="status" />
                <p>Cargando Recetario...</p>
            </div>
        );
    }

    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="mb-0">Mi Recetario ({recipes.length})</h1>
                <Button as={Link} to="/create" variant="success">
                    + Añadir Nueva Receta
                </Button>
            </div>

            <Row>
                {recipes.length === 0 ? (
                    <Col>
                        <Alert variant="info" className="text-center">
                            No tienes ninguna receta guardada.
                            <Link to="/create" className="d-block mt-2 fw-bold">
                                ¡Añade una ahora!
                            </Link>
                        </Alert>
                    </Col>
                ) : (
                    recipes.map((recipe) => (
                        <Col md={4} sm={6} xs={12} key={recipe.id} className="mb-4">
                            {/* La clase 'card' tiene el efecto hover definido en index.css */}
                            <Card className="shadow-sm h-100 card"> 
                                <Card.Body>
                                    <Card.Title className="text-primary">{recipe.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Categoría: {recipe.category}
                                    </Card.Subtitle>
                                    <Card.Text>
                                        Tiempo de Preparación: **{recipe.prepTime}** min.
                                    </Card.Text>
                                    <div className="d-flex justify-content-between mt-3">
                                        <Button as={Link} to={`/recipe/${recipe.id}`} variant="info" size="sm">
                                            Ver Receta
                                        </Button>
                                        <Button as={Link} to={`/edit/${recipe.id}`} variant="warning" size="sm">
                                            Editar
                                        </Button>
                                        <Button variant="danger" size="sm" onClick={() => handleDelete(recipe.id, recipe.name)}>
                                            Eliminar
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    );
};

export default RecipeListPage;