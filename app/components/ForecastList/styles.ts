import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginTop: 10,
  },
  card: {
    flexDirection: "row",
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#f5f7fa",
    marginBottom: 12,
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  date: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    marginBottom: 4,
  },
  temp: {
    fontSize: 15,
    fontWeight: "500",
    color: "#444",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});
