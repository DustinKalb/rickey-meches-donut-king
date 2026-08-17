import { BsMouse } from "react-icons/bs";

function MyComponent() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        padding: "8px 0 16px 0",
        filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.6))",
      }}
    >
      <BsMouse size={32} color="white" />
    </div>
  );
}

export default MyComponent;
