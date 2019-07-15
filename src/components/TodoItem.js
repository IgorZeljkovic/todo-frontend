import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

export default function TodoItem ({ todo }) {
    return (
        !todo.is_completed
        ? <ListGroup.Item>{ todo.title }</ListGroup.Item>
        : <ListGroup.Item variant="success">{ todo.title }</ListGroup.Item>
    )
}