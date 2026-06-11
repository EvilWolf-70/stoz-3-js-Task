import React from 'react'

function Header({title, style}) {
    const styles = {
    primary: {
      backgroundColor: "#2563eb",
      color: "white",
      padding: "15px",
      textAlign: "center",
    },
    secondary: {
      backgroundColor: "#f3f4f6",
      color: "#111827",
      padding: "15px",
      textAlign: "center",
      borderBottom: "2px solid #d1d5db",
    },
  };
  return (
    
    <header style={styles[style]}>
      <h1>{title}</h1>
      {/* <h1>{styles.primary}</h1> */}
    </header>
  )
}

export default Header
