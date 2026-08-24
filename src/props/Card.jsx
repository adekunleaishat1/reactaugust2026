import React, { useState } from 'react'

const Card = ({songtitle, songimage , songartist}) => {
  const [hover, setHover] = useState(false)

  const cardStyle = {
    width: "180px",
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: hover ? "#282828" : "#181818",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
    position: "relative",
    fontFamily: "Arial, Helvetica, sans-serif"
  }

  const imageStyle = {
    width: "100%",
    height: "148px",
    objectFit: "cover",
    borderRadius: "6px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.5)"
  }

  const titleStyle = {
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "700",
    margin: "16px 0 6px 0",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }

  const artistStyle = {
    color: "#b3b3b3",
    fontSize: "14px",
    margin: "0",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }

  const playButtonStyle = {
    position: "absolute",
    right: "24px",
    top: "132px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#1db954",
    color: "#000000",
    border: "none",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 8px 16px rgba(0,0,0,0.4)",
    opacity: hover ? 1 : 0,
    transform: hover ? "translateY(0)" : "translateY(8px)",
    transition: "all 0.3s ease"
  }

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
        <img src={songimage} alt={songtitle} style={imageStyle} />
        <button style={playButtonStyle}>▶</button>
        <h3 style={titleStyle}>{songtitle}</h3>
        <p style={artistStyle}>{songartist}</p>
    </div>
  )
}

export default Card
