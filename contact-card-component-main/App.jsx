import Contact from "./Contact";
import tupacImage from "./tupac.jpg";

export default function App() {
  return (
    <main className="page">
      <style>{`
        :root {
          color-scheme: light;
          font-family: Inter, system-ui, sans-serif;
          background:
            radial-gradient(circle at top, #dbeafe 0%, #f8fafc 42%, #eef2ff 100%);
        }

        body {
          margin: 0;
          min-height: 100vh;
          display: grid;
          place-items: center;
          background: transparent;
          color: #0f172a;
        }

        .page {
          width: min(100%, 640px);
          padding: 32px 20px;
        }

        .contact-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(148, 163, 184, 0.25);
          border-radius: 24px;
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
          padding: 28px;
          text-align: center;
        }

        .contact-photo {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 999px;
          border: 4px solid white;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.18);
        }

        .contact-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 18px;
        }

        button {
          border: 0;
          border-radius: 999px;
          padding: 10px 16px;
          font-weight: 600;
          background: #1d4ed8;
          color: white;
          cursor: pointer;
        }

        button:hover {
          background: #1e40af;
        }

        .status {
          margin-top: 16px;
          color: #0f766e;
          font-weight: 600;
        }
      `}</style>
      <Contact
        name="Yoshef Deriba"
        email="Yoshefderiba@gmail.com"
        phone="0911454545"
        profile_picture={tupacImage}
      />
    </main>
  );
}
