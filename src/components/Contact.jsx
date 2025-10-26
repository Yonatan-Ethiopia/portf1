import React from "react";

function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Get in Touch</h2>
      <p style={styles.subtitle}>
        Let's collaborate or just say hello.
      </p>
      <div style={styles.info}>
        <p>Email: <a href="mailto:nadielgetu@gmail.com">nadielgetu@gmail.com</a></p>
        <p>Instagram: <a href="https://instagram/nadi__e_t">@nadi__e_t</a></p>
        <p>Telegram: <a href="https://t.me/nadielll">@nadielll</a></p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 80px",
    backgroundColor: "#f7f8fa",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    color: "#222",
  },
  subtitle: {
    color: "#777",
    marginBottom: "30px",
  },
  info: {
    color: "#333",
    lineHeight: 1.8,
  },
};

export default Contact;

