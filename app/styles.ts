import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    color: "#1976d2",
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#bbdefb",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
  },
  button: {
    backgroundColor: "#1976d2",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  error: {
    color: "#e53935",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  location: {
    marginBottom: 16,
  },
  locationWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  locationText: {
    color: "#1976d2",
    fontSize: 16,
  },
});
