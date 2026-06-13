import React from "react";

const testimonials = [
  {
    quote:
      "I had a fantastic experience working with EliteEstatw. Their agents were professional, knowledgeable, and always available to answer my questions. I highly recommend them!",
    author: "ANJALI SHARMA",
  },
  {
    quote:
      "I recently sold my home with EliteEstatw and I couldn't be happier with their service. They took care of everything from start to finish and found a buyer in record time!",
    author: "RAMESH CHANDRA",
  },
  {
    quote:
      "I was looking for a rental property in Mumbai and EliteEstatw helped me find the perfect one. Their agents were friendly and helpful throughout the process. Thank you!",
    author: "RAJESH KUMAR",
  },
];

const ClientsWordPage = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/download.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "3rem",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        What Our Clients Say
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          maxWidth: "1200px",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 300px",
              maxWidth: "350px",
              padding: "1.5rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontStyle: "italic",
                marginBottom: "1.5rem",
                fontSize: "1.1rem",
                lineHeight: "1.6",
              }}
            >
              {`"${testimonial.quote}"`}
            </p>
            <p
              style={{
                fontWeight: "bold",
                color: "#a7c7e7",
                textTransform: "uppercase",
              }}
            >
              {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsWordPage;
