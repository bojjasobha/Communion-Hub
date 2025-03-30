import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-4 text-center">
      <h1 className="text-secondary">About CommunionHub</h1>
      <p>
        CommunionHub is your go-to platform for discovering and joining exciting events!
        Whether you're looking for community gatherings, social meetups, or special occasions,
        CommunionHub makes event exploration seamless and engaging. Stay connected, find
        new experiences, and be part of something amazing!
      </p>
      <img src="images/image2.png" alt="About Us" className="about-image" />
      <p>**CommunionHub** is a platform designed to bring people together through meaningful events, fostering connections across different communities, interests, and faiths. Whether you're looking to attend a social gathering, a professional workshop, or a faith-based event, CommunionHub makes it easy to discover and participate in events that matter to you. Our goal is to create a seamless and engaging experience where individuals can connect, share, and grow. By offering a diverse range of events and a user-friendly interface, CommunionHub ensures that everyone has the opportunity to find and join events that align with their passions and beliefs.</p>
      <p> Easy Event Discovery - Find events tailored to your interests with just a few clicks.
Community Engagement - Connect with like-minded people and expand your network.
 Seamless Experience -Enjoy a user-friendly interface designed for effortless navigation.
 Diverse Categories - From social meetups to professional networking, there's something .At CommunionHub, we believe in the power of connections and shared experiences. Our platform is built to bring people together through events that inspire, educate, and entertain. Whether you're looking to network, learn, celebrate, or worship, CommunionHub makes it easier to discover and participate in events that align with your interests.</p>
    </Container>
  );
};

export default About;
