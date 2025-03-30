import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tech Conference 2025",
      date: "March 15, 2025",
      location: "New York, NY",
      description: "A leading tech event bringing innovators together.",
    },
    {
      id: 2,
      title: "Startup Pitch Night",
      date: "April 5, 2025",
      location: "San Francisco, CA",
      description: "Pitch your startup idea to investors and mentors.",
    },
    {
      id: 3,
      title: "AI & ML Workshop",
      date: "May 20, 2025",
      location: "Online",
      description: "Hands-on training with AI experts.",
    },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.date || !newEvent.location || !newEvent.description) {
      alert("Please fill out all fields.");
      return;
    }
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    setNewEvent({ title: "", date: "", location: "", description: "" }); // Clear form
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4 text-secondary">Upcoming Events</h2>
      
      {/* Event Form */}
      <Form onSubmit={handleSubmit} className="mb-4 p-3 border rounded bg-light">
        <h4 className="text-secondary">Add a New Event</h4>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-2">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newEvent.title}
                onChange={handleChange}
                placeholder="Enter event title"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-2">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={newEvent.date}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-2">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={newEvent.location}
                onChange={handleChange}
                placeholder="Enter event location"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={newEvent.description}
                onChange={handleChange}
                placeholder="Enter event description"
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Add Event
        </Button>
      </Form>

      {/* Event List */}
      <Row>
        {events.map((event) => (
          <Col key={event.id} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {event.date} | {event.location}
                </Card.Subtitle>
                <Card.Text>{event.description}</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
