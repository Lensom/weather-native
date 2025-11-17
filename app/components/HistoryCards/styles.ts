import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    width: 40,
    height: 40,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  city: {
    fontSize: 16,
    fontWeight: "600",
  },
  desc: {
    color: "#555",
    fontSize: 13,
  },
  temp: {
    fontSize: 20,
    fontWeight: "700",
  },
});
