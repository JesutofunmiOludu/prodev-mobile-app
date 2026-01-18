import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchGroup: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E9E9E9",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 14,
    color: "#7B7B7B",
  },
  searchControl: {
    fontSize: 12,
    color: "#999",
  },
  searchButton: {
    backgroundColor: "#34967C",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 20,
    paddingVertical: 15,
  },
  filterContainer: {
    alignItems: "center",
    gap: 5,
    width: 60,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  paginationContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export { styles };
