import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: "#1e213a",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  city: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
  },
  time: {
    fontSize: 14,
    color: "#ccc",
    marginTop: 4,
  },
  icon: {
    width: 64,
    height: 64,
  },
  temp: {
    fontSize: 56,
    fontWeight: "800",
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },
  feels: {
    fontSize: 16,
    color: "#b0c4de",
    textAlign: "center",
  },
  condition: {
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
    marginTop: 4,
    fontStyle: "italic",
  },
  infoGrid: {
    marginTop: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  infoItem: {
    width: "48%",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 10,
    padding: 8,
    marginBottom: 10,
  },
  label: {
    color: "#ccc",
    fontSize: 14,
  },
  value: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  updated: {
    color: "#aaa",
    fontSize: 12,
    textAlign: "center",
    marginTop: 12,
  },
  deleteButton: {
    position: "absolute",
    top: -8,
    right: -8,
    zIndex: 9999,
  },
  closeIcon: {
    color: "white",
    fontSize: 24,
  },
  get: {
    color: "#fff",
    marginTop: 12,
    fontSize: 18,
    textAlign: "center",
  },
});
