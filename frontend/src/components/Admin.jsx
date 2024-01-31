import Header from "./Header";
import VenueList from "./VenueList";
import VenueReducer from "../services/VenueReducer";
import React from "react";
import VenueDataService from "../services/VenueDataService";


function Admin() {
  React.useEffect(() => {
    dispatchVenues({ type: "FETCH_INIT" });
    try {
      VenueDataService.listAllVenues().then(
        (result) => {
          dispatchVenues({
            type: "FETCH_SUCCESS",
            payload: result.data,
          });
        }
      );
    } catch {
      dispatchVenues({ type: "FETCH_FAILURE" });
    }
  }, []);
  const [venues, dispatchVenues] = React.useReducer(VenueReducer, {
    data: [],
    isLoading: false,
    isSuccess: true,
    isError: false,
    isDeleted: true,
  });
  function handleClick(evt, id) {
    evt.preventDefault();
   //Mekan ekle, sil,güncelle düğmelerine basıldığında
   //olacak olaylar buraya yazılacak
  }
  
  return (
    
    <>
      <Header headerText="Yönetici" motto="Mekanlarınızı Yönetin!" />
      {venues.isError ? (
        <p>
          <strong>Birşeyler ters gitti! ...</strong>
        </p>
      ) : venues.isLoading ? (
        <p>
          <strong>Mekanlar Yükleniyor ...</strong>
        </p>
      ) : (
        venues.isSuccess && (
          <div className="row">
            <VenueList
              venues={venues.data}
              admin={true}
              onClick={handleClick}
            />
          </div>
        )
      )}
    </>
  );
}

export default Admin;
