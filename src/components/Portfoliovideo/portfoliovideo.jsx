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
          <source src="public/assets/vidoes/headies-ezgif.com-gif-to-mp4-converter.mp4" type="video/mp4" />
        </video>
        <p style={{ textAlign: "center", color: "#fff", marginTop: "8px" }}>Represnting Vybz TV at Headies Awards.</p>
      </div>

      <div style={{ maxWidth: "300px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "auto", borderRadius: "12px", objectFit: "cover" }}
        >
          <source src="public/assets/vidoes/longroad-ezgif.com-gif-to-mp4-converter.mp4" type="video/mp4" />
        </video>
        <p style={{ textAlign: "center", color: "#fff", marginTop: "8px" }}>Long road to equity(short film)</p>
      </div>

      
      <div style={{ maxWidth: "300px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "auto", borderRadius: "12px", objectFit: "cover" }}
        >
          <source src="public\assets\vidoes\sheerlife-ezgif.com-gif-to-mp4-converter.mp4" type="video/mp4" />
        </video>
        <p style={{ textAlign: "center", color: "#fff", marginTop: "8px" }}>sheerlife(high school series)</p>
      </div>

      {/* Add more previews similarly */}
    </div>
  );
}

export default PortfolioVideo;

