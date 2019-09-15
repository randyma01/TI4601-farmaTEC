import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import HomeComponent from './home';
import ProductsComponent from './products';
import OrderComponent from './order/order'
import BranchOfficeComponent from './branchOffice';
import { Breadcrumb, Badge, Container, Row, Col, Navbar, Nav, Button, FormControl, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class Menu extends React.Component {
  render() {
    return (
      <div style={{ marginTop: '2%' }}>
        <Container>
          <Row >
            <Col md="auto">
              <Router>
                <header>
                  <div className="row">
                    <div className="col-lg-auto">
                    <Navbar bg="light" variant="light">
                      <Navbar.Brand>{<Link to="/">FarmaTEC</Link>}</Navbar.Brand>
                      <Nav className="mr-auto">
                        <Nav.Link >{<Link to="/sucursales">Sucursales</Link>}</Nav.Link>
                        <Nav.Link > {<Link to="/productos">Productos</Link>}</Nav.Link>
                        <Nav.Link >{<Link to="/pedidos">Pedidos</Link>}</Nav.Link>
                      </Nav>
                      <Form inline>
                        <FormControl type="text" placeholder="Busca tus productos" className="mr-sm-2" />
                        <Button variant="outline-primary">Buscar</Button>
                      </Form>
                    </Navbar>
                    </div>
                    <div className="col-md-auto">
                        <a href="https://steamcdn-a.akamaihd.net/steam/apps/798950/header.jpg?t=1525233749">Cerrar Sesion</a>
                    </div>
                  </div>
                </header>
                <main>
                  <Switch>
                    <Route path='/' exact component={HomeComponent} />
                    <Route path='/pedidos' exact component={OrderComponent} />
                    <Route path='/productos' exact component={ProductsComponent} />
                    <Route path='/sucursales' exact component={BranchOfficeComponent} />
                    <Redirect to='/' />
                    Main Content Here!
                </Switch>
                </main>
              </Router>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Menu;
