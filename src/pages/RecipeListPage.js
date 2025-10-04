import React, { useState, useEffect, useCallback } from 'react';
import { getProducts, deleteProduct } from '../api/firebase/productsApi';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';

const ProductListPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadProducts = useCallback(async () => {
        try {
            const data = await getProducts();
            setProducts(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadProducts();
    }, [loadProducts]);

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
            try {
                await deleteProduct(id);
                // Actualiza la lista sin recargar la página
                setProducts(products.filter((p) => p.id !== id));
                toast.success('Producto eliminado con éxito.');
            } catch (error) {
                toast.error(error.message);
            }
        }
    };

    if (loading) {
        return (
            <div className="text-center my-5">
                <Spinner animation="border" role="status" />
                <p>Cargando productos...</p>
            </div>
        );
    }

    return (
        <Container>
            <h1 className="mb-4 text-center">Inventario de Productos ({products.length})</h1>
            <Row>
                {products.length === 0 ? (
                    <Col>
                        <p className="text-center">
                            No hay productos en el inventario.
                            <Link to="/create" className="d-block mt-2">
                                ¡Añade uno ahora!
                            </Link>
                        </p>
                    </Col>
                ) : (
                    products.map((product) => (
                        <Col md={4} sm={6} xs={12} key={product.id} className="mb-4">
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        ${parseFloat(product.price).toFixed(2)}
                                    </Card.Subtitle>
                                    <Card.Text>
                                        Stock: **{product.stock}** uds.
                                    </Card.Text>
                                    <div className="d-flex justify-content-between mt-3">
                                        <Button
                                            as={Link}
                                            to={`/product/${product.id}`}
                                            variant="outline-primary"
                                            size="sm"
                                        >
                                            Ver Detalle
                                        </Button>
                                        <Button
                                            as={Link}
                                            to={`/edit/${product.id}`}
                                            variant="outline-secondary"
                                            size="sm"
                                        >
                                            Editar
                                        </Button>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => handleDelete(product.id)}
                                        >
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

export default ProductListPage;