import React, { useState, useEffect } from "react";
import Alert from "@/utils/alert";
import { deleteBusinessAccount } from "@/pages/profile/ProfileController";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const BusinessAccountsCards = () => {
     const navigate = useNavigate();
     const { user } = useAuth();
     
     // State para sa current location ng user
     const [userLocation, setUserLocation] = useState({ lat: null, lon: null });

     // load user location on component mount
     useEffect(() => {
          if (navigator.geolocation) {
               navigator.geolocation.getCurrentPosition(
                    (position) => {
                         setUserLocation({
                              lat: position.coords.latitude,
                              lon: position.coords.longitude,
                         });
                    },
                    (error) => {
                         console.error("Error getting user location:", error);
                    }
               );
          }
     }, []);

     // Function to convert text to title case
     const toTitleCase = (text) => {
          if (!text) return "";
          return text.replace(/\w\S*/g, (word) =>
               word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          );
     };

     // calculate distance between user and business
     const calculateDistance = (lat2, lon2) => {
          if (!userLocation.lat || !userLocation.lon || !lat2 || !lon2) return null;

          const R = 6371; // Radius ng Earth sa km
          const dLat = (lat2 - userLocation.lat) * (Math.PI / 180);
          const dLon = (lon2 - userLocation.lon) * (Math.PI / 180);
          
          const a =
               Math.sin(dLat / 2) * Math.sin(dLat / 2) +
               Math.cos(userLocation.lat * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
               Math.sin(dLon / 2) * Math.sin(dLon / 2);
               
          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          return (R * c).toFixed(1);
     };

     // delete business account with confirmation
     const handleDelete = async (id) => {
          const isConfirmed = await Alert.confirm(
               "Are you sure?", 
               "Once deleted, you will not be able to recover this business account!"
          );

          if (isConfirmed) {
               try {
                    await deleteBusinessAccount(id);
                    Alert.toast.success("Business account deleted successfully!");
                    
                    setTimeout(() => {
                         navigate("/business-accounts");
                         window.location.reload();
                    }, 2000);
               } catch (err) {
                    Alert.toast.error("Failed to delete the business account.");
                    console.error(err);
               }
          }
     };
          

     return (
          <>
               {user?.user?.business_details?.map((list, index) => {
                    // lat/lon of business
                    const distance = calculateDistance(list.latitude, list.longitude);

                    return (
                         <div className="card shadow-none border py-0 px-2 my-3" key={index}>
                              <div className="card-body">
                                   <div className="row">
                                        <div className="col-12 text-left">
                                             <div className="row align-items-center">
                                                  <div className="col-10">
                                                       <div className="row align-items-center">
                                                            <div className="col-12 pe-0">
                                                                 <span className="text-gray-600 font-bold! me-2">
                                                                      {list.business_name}
                                                                 </span>
                                                            </div>
                                                       </div>
                                                  </div>

                                                  <div className="col-1 text-md! text-center p-0 text-muted">
                                                       <button className="no-underline! text-yellow-500!" variant="primary" onClick={() => navigate(`/business-accounts/edit/${list.id}`)}>
                                                            <Icon className="inline-block shrink-0 mb-1" icon="solar:pen-2-bold-duotone" />
                                                       </button>
                                                  </div>
                                                  <div className="col-1 text-md! text-center p-0 text-muted">
                                                       <button className="no-underline! text-red-500!" variant="primary" onClick={handleDelete.bind(null, list.id)}>
                                                            <Icon className="inline-block shrink-0 mb-1" icon="solar:trash-bin-2-bold-duotone" />
                                                       </button>
                                                  </div>
                                             </div>

                                             <div className="row align-items-center">
                                                  <div className="col-12">
                                                       <span className="text-xs! text-[#0D6EFD]! font-semibold me-2">
                                                            {list.business_category}
                                                       </span>
                                                  </div>
                                             </div>

                                             {/* Business Services Badges */}
                                             <div className="row align-items-center mt-2">
                                                  <div className="col-12">
                                                       <div className="d-flex flex-wrap gap-1 me-2">
                                                            {(Array.isArray(list.business_services) 
                                                                 ? list.business_services 
                                                                 : typeof list.business_services === 'string' 
                                                                      ? JSON.parse(list.business_services) 
                                                                      : []
                                                            ).map((service, sIndex) => (
                                                                 <span key={sIndex} className="badge bg-light text-dark border px-2 py-1 text-xs!">
                                                                      {service}
                                                                 </span>
                                                            ))}
                                                       </div>
                                                  </div>
                                             </div>

                                             {/* Business Address */}
                                             <div className="row align-items-center mt-2">
                                                  <div className="col-12 ps-2">
                                                       <Icon className="text-2x2 me-2 inline-block shrink-0 text-[#4CAF50]" icon="solar:map-bold-duotone" />
                                                       <span className="text-xs! text-muted! me-2">
                                                            {toTitleCase(list.barangay?.barangay_name)}, {toTitleCase(list.municipality?.municipality_name)}, {toTitleCase(list.province?.province_name)}
                                                       </span>
                                                  </div>
                                             </div>

                                             {/* Distance from Current Location */}
                                             <div className="row align-items-center">
                                                  <div className="col-12 ps-2">
                                                       <Icon className="text-2xw me-2 inline-block shrink-0 text-[#4CAF50]" icon="solar:map-point-bold-duotone" />
                                                       <span className="text-xs! text-muted! me-2">
                                                            {distance ? `${distance} km away` : userLocation.lat ? "Calculating..." : "Getting location..."}
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    );
               })}
          </>
     );
};

export default BusinessAccountsCards;