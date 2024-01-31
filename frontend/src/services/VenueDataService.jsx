import http from "./http-common";

class VenueDataService {
  
  listAllVenues() {
    //Backend kısmında bu isteğe karşılık
    // gelen API metodu (Backend kısmı için ödev) 
    return http.get("/admin");
  }

  nearbyVenues(lat,long) {
    return http.get(`/venues?lat=${lat}&long=${long}`);
  }

  getVenue(id) {
    return http.get(`venues/${id}`);
  }

  addVenue(data) {
    return http.post("/venues", data);
  }

  updateVenue(id, data) {
    return http.put(`/venues/${id}`, data);
  }

  removeVenue(id) {
    return http.delete(`/venues/${id}`);
  }

  login(data){
    return http.post("/login",data);
  }

  register(data){
    return http.post("/register",data);
  }
  deleteAllVenues() {
    return http.delete("/venues");
  }
  getComment(venueID, commentID) {
    return http.get(`/venues/${venueID}/comments/${commentID}`);
  }
  updateComment(venueID, commentID, data) {
    return http.put(`/venues/${venueID}/comments/${commentID}`, data);
  }
  addComment(venueID, data) {
    return http.post(`/venues/${venueID}/comments`, data);
  }
  removeComment(venueID, commentID) {
    return http.delete(`/venues/${venueID}/comments/${commentID}`);
  }
}

export default new VenueDataService();
