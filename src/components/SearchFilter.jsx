import { useState } from "react";

export default function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");

  const items = [
    "Srujana",
    "Mahesh",
    "Varshitha",
    "Vasu",
    "Harshita",
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        padding: "40px 30px",
        maxWidth: "650px",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ color: "#222", marginBottom: "25px", fontSize: "26px" }}>
        Search Filter Example
      </h2>

      <input
        type="text"
        placeholder="Search names..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "12px 18px",
          width: "85%",
          maxWidth: "450px",
          borderRadius: "12px",
          border: "2px solid #4cafef",
          outline: "none",
          fontSize: "16px",
          marginBottom: "30px",
          transition: "0.3s all ease",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#2196f3")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "#4cafef")}
      />

      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          display: "grid",
          gap: "15px",
        }}
      >
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li
              key={index}
              style={{
                padding: "15px 25px",
                borderRadius: "12px",
                background: `linear-gradient(135deg, ${
                  index % 2 === 0 ? "#64b5f6" : "#81c784"
                }, #2196f3)`,
                color: "#fff",
                fontWeight: "600",
                fontSize: "17px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.12)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.12)";
              }}
            >
              {item}
            </li>
          ))
        ) : (
          <li
            style={{
              color: "#888",
              fontStyle: "italic",
              fontSize: "16px",
              padding: "15px 0",
            }}
          >
            No results found
          </li>
        )}
      </ul>
    </div>
  );
}
