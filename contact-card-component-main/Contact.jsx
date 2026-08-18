export default function Contact(props) {
  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${props.name}\nEMAIL:${props.email}\nTEL:${props.phone}\nEND:VCARD`;
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${props.name.replace(/\s+/g, '_')}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <article className="contact-card">
      <img className="contact-photo" src={props.profile_picture} alt={props.name} width="150" />

      <h2>{props.name}</h2>
      <p style={{ color: '#4b5563', margin: '8px 0' }}>✉️ {props.email}</p>
      <p style={{ color: '#4b5563', margin: '8px 0' }}>📞 {props.phone}</p>

      <div className="contact-actions" style={{ marginTop: '20px' }}>
        <button type="button" onClick={() => window.location.href = `mailto:${props.email}`}>
          Email Me
        </button>
        <button type="button" onClick={() => window.location.href = `tel:${props.phone}`}>
          Call Me
        </button>
        <button type="button" onClick={downloadVCard}>
          Save Contact
        </button>
      </div>
    </article>
  );
}
