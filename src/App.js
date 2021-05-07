import react, { Component, component } from 'react';
import './App.css';
import {  Form, FormGroup, Label, Input } from 'reactstrap';
import { Button } from 'react-bootstrap';



class App extends Component {
  render() {
    return (
      <Form className="registre-form">
        <h1>
          Welcome to yessine Checkpoint
          <span className="font-weight-bold">React js</span>
        </h1>
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" placeholder="Name"/>
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email"/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="Paswword" placeholder="Enter your Password"/>
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">
            Registre
        </Button>
      </Form>
    );
  }
}

export default App;
