import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Vehicles = ({ vehicle }) => {
    const { store, actions } = useContext(Context)
    const isFavorite = () => { return store.favorites.some(item => item.name === vehicle.name) ? true : false }
    return (
        <div className="card mx-2 bg-dark text-white" style={{ minWidth: "250px" }}>
            <Link to={`/detail-vehicle/${vehicle.uid}`}>
                <img
                    src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/${vehicle.type}/${vehicle.uid}.jpg`}
                    className="card-img-top" alt="..."
                    width={248} height={270}
                />

            </Link>
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title">{vehicle.name}</h5>
                    <p className="card-text">
                        Vehicle Class:  {vehicle.vehicle_class} <br />
                        Passengers: {vehicle.passengers} <br />

                    </p>
                </div>
                <div className="d-flex justify-content-between ">
                    <Link to={`/detail-vehicle/${vehicle.uid}`} className="btn btn-primary my-3 btn-lg">Learn more!</Link>

                    {/* <p className="btn card-text m-3 border border-warning px-2" */}
                    <p className={`btn card-text m-3 border-white px-2 ${isFavorite() ? "border-danger" : "border-warning"}`}

                        onClick={() => {
                            if (isFavorite()) {
                                actions.deleteFavoriteCharacter(vehicle.name)
                            }
                            else {
                                actions.addFavoriteCharacter(vehicle)
                            }
                        }
                        }
                    >
                        <i className={`${isFavorite() ? "fa-solid text-danger" : "fa-regular text-white"} fa-heart`}></i>
                    </p>

                </div>

            </div>
        </div>
    )
}