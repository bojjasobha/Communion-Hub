import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  console.log("Home component loaded"); // Add this

  return (
 
    
    <Container className="mt-4 text-center bg-light p-5 rounded text-white" style={{
        backgroundImage: "url('/images/img 1.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "75vh",
        width: "100vw"}} >
      <h1>Communion Hub</h1>
      <p>Discover and participate in amazing events!</p>
      <p> Your go-to platform for discovering and joining exciting events! Whether you're looking for community gatherings, social meetups, or special occasions, Communion Hub makes event exploration seamless and engaging. Stay connected, find new experiences, and be part of something amazing!
</p><br></br>
<p>Your ultimate destination for discovering, sharing, and participating in exciting events!

At Communion Hub, we believe in the power of community and meaningful connections. Our platform makes it easy for you to explore upcoming events, stay updated, and engage with like-minded individuals. Whether you're interested in social meetups, professional gatherings, cultural celebrations, or local activities, we bring events closer to yo</p>

<h2 className="mt-4 text-left">Core Features</h2>
<p>Event Discovery: CommunionHub allows users to explore upcoming events based on their location and interests. This feature offers personalized recommendations, event filtering, and intuitive browsing, ensuring users find events they are most interested in.

Event Creation: The platform empowers users to take the initiative by creating and hosting their own events. From selecting event details (date, time, description, and location) to inviting participants, the event creation process is simple and customizable</p>


      <Link to="/events">
        <Button variant="primary">Explore Events</Button>
      </Link>
    </Container>

  );
};

export default Home;
