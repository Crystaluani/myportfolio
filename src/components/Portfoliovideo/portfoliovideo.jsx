function PortfolioVideo() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
      <div style={{ maxWidth: "300px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "auto", borderRadius: "12px", objectFit: "cover" }}
        >
          <source src="/assets/vidoes/headies.mp4" type="video/mp4" />
        </video>
        <p style={{ textAlign: "center", color: "#fff", marginTop: "8px" }}>Representing Vybz TV at Headies Awards.</p>
      </div>

      <div style={{ maxWidth: "300px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "auto", borderRadius: "12px", objectFit: "cover" }}
        >
          <source src="/assets/vidoes/longroad.mp4" type="video/mp4" />
        </video>
        <p style={{ textAlign: "center", color: "#fff", marginTop: "8px" }}>Long road to equity short film</p>
      </div>

      <div style={{ maxWidth: "300px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "auto", borderRadius: "12px", objectFit: "cover" }}
        >
          <source src="/assets/vidoes/sheerlife.mp4" type="video/mp4" />
        </video>
        <p style={{ textAlign: "center", color: "#fff", marginTop: "8px" }}>Sheerlife high school series</p>
      </div>
    </div>
  );
}

export default PortfolioVideo;
