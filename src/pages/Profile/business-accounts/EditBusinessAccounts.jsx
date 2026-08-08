import React from "react";
import Logo from "@/components/Logo";
import { Icon } from "@iconify/react";

import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation, useParams } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { getAddressMaintenance } from "@/pages/register/RegisterController";
import { updateBusinessAccount } from "@/pages/profile/ProfileController";

import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import Select2Dropdown from "@/components/Select2Dropdown";
import Tabs from "@/components/Tabs";
import Alert from "@/utils/alert";
import DefaultUserImage from "@/components/DefaultUserImage";
import UserCardHeader from "@/components/UserCardHeader";

export default function EditBusinessAccounts() {
     const navigate = useNavigate();
     const location = useLocation();
     const { id } = useParams(); // Kukuha ng ID mula sa URL (para sa pag-edit)
     const { user } = useAuth(); // Kukuha ng user at business details galing sa auth

     const [regions, setRegions] = useState([]);
     const [provinces, setProvinces] = useState([]);
     const [municipalities, setMunicipalities] = useState([]);
     const [barangays, setBarangays] = useState([]);

     const [businessStep, setBusinessStep] = useState(1);
     const [errors, setErrors] = useState({});

     const getDaysArray = (count) => {
          const allDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
          const num = parseInt(count) || 0;
          return allDays.slice(0, num);
     };

     const [businessForm, setBusinessForm] = useState({
          // Step #1
          business_name: "",
          business_category: "",
          business_type: "",
          business_email: "",
          business_website: "",
          business_address: "",

          region_id: "",
          barangay_id: "",
          municipality_id: "",
          province_id: "",
          business_contact_number: "",

          days_of_operation: "",
          open_time: "",
          close_time: "",
          business_notes: "",

          // Step #2
          tiktok_link: "",
          facebook_link: "",
          instagram_link: "",
          website_link: "",

          business_permit: null,
          store_front_photo: null,
          bir_certificate_of_registration: null,
          dti_registration: null,
          sec_registration: null,
          sanitary_registration: null,

          products: [],
          additional_product: ""
     });

     useEffect(() => {
          loadAddressMaintenance();
     }, []);

     // Awtomatikong hahanapin at ipapasok sa form ang details ng business kapag may ID sa URL
     useEffect(() => {
          if (id && user?.user?.business_details && regions.length > 0) {
               const foundBusiness = user.user.business_details.find(
                    (item) => String(item.id) === String(id)
               );

               if (foundBusiness) {
                    // I-setup ang provinces kung may region_id
                    const regId = foundBusiness.region_id || foundBusiness.region?.region_id;
                    const selectedRegion = regions.find(r => r.region_id == regId);
                    const loadedProvinces = selectedRegion?.provinces || [];
                    setProvinces(loadedProvinces);

                    // I-setup ang municipalities kung may province_id
                    const provId = foundBusiness.province_id || foundBusiness.province?.province_id;
                    const selectedProvince = loadedProvinces.find(p => p.province_id == provId);
                    const loadedMunicipalities = selectedProvince?.municipalities || [];
                    setMunicipalities(loadedMunicipalities);

                    // I-setup ang barangays kung may municipality_id
                    const munId = foundBusiness.municipality_id || foundBusiness.municipality?.municipality_id;
                    const selectedMun = loadedMunicipalities.find(m => m.municipality_id == munId);
                    setBarangays(selectedMun?.barangays || []);

                    // I-parse ang mga JSON/Array fields mula sa DB kung string man ito
                    const rawServices = typeof foundBusiness.business_services === 'string' 
                         ? JSON.parse(foundBusiness.business_services) 
                         : foundBusiness.business_services || [];

                    const rawPayments = typeof foundBusiness.payments_accepted === 'string' 
                         ? JSON.parse(foundBusiness.payments_accepted) 
                         : foundBusiness.payments_accepted || [];

                    // Siguraduhing array ang bagsak (suportado ang parehong array at object formats galing sa DB)
                    const servicesArray = Array.isArray(rawServices) ? rawServices : Object.keys(rawServices).filter(k => rawServices[k]);
                    const paymentsArray = Array.isArray(rawPayments) ? rawPayments : Object.keys(rawPayments).filter(k => rawPayments[k]);

				// --- Kuhanin ang bilang ng araw ---
				let daysCount = "";
				const rawDays = foundBusiness.days_of_operation || foundBusiness.days_open;

				if (Array.isArray(rawDays)) {
					daysCount = String(rawDays.length);
				} else if (typeof rawDays === 'string') {
					try {
						const parsed = JSON.parse(rawDays);
						daysCount = Array.isArray(parsed) ? String(parsed.length) : rawDays;
					} catch (e) {
						daysCount = rawDays;
					}
				}

                    const formatTime = (timeString) => {
                         if (!timeString) return "";
                         return String(timeString).substring(0, 5);
                    };
				
                    setBusinessForm((prev) => ({
                         ...prev,
                         ...foundBusiness,
                         region_id: regId || "",
                         province_id: provId || "",
                         municipality_id: munId || "",
                         barangay_id: foundBusiness.barangay_id || foundBusiness.barangay?.barangay_id || "",
                         
                         // Checkboxes: Sinusuri kung kasama ang pangalan sa array galing sa DB
                         cash: paymentsArray.some(p => String(p).toLowerCase() === 'cash') ? 1 : 0,
                         gcash: paymentsArray.some(p => String(p).toLowerCase() === 'gcash') ? 1 : 0,
                         paymaya: paymentsArray.some(p => String(p).toLowerCase() === 'paymaya') ? 1 : 0,
                         utang_ok: paymentsArray.some(p => String(p).toLowerCase() === 'utang' || String(p).toLowerCase() === 'utang ok') ? 1 : 0,
                         
                         delivery: servicesArray.some(s => String(s).toLowerCase() === 'delivery') ? 1 : 0,
                         meetup: servicesArray.some(s => String(s).toLowerCase() === 'meetup' || String(s).toLowerCase() === 'meet up') ? 1 : 0,
                         pickup: servicesArray.some(s => String(s).toLowerCase() === 'pickup' || String(s).toLowerCase() === 'pick up') ? 1 : 0,

					open_time: formatTime(foundBusiness.open_time || ""),
                         close_time: formatTime(foundBusiness.close_time || ""),

                         days_of_operation: daysCount,

                         // Products / Services
                         products: servicesArray
                    }));
               }
          }
     }, [id, user, regions]);

     const loadAddressMaintenance = async () => {
          try {
               const res = await getAddressMaintenance();
               setRegions(res || []);
          } catch (err) {
               console.error(err);
          }
     };

     const handleAddressChange = (e) => {
          const { name, value, type, checked, files } = e.target;

          let finalValue;

          if (type === "checkbox") finalValue = checked ? 1 : 0;
          else if (type === "file") finalValue = files?.[0] ?? null;
          else finalValue = value;

          switch (name) {
               case "region_id": {
                    const region = regions.find(
                         r => r.region_id == finalValue
                    );

                    setProvinces(region?.provinces || []);
                    setMunicipalities([]);
                    setBarangays([]);

                    const updated = {
                         ...businessForm,
                         region_id: finalValue,
                         province_id: "",
                         municipality_id: "",
                         barangay_id: "",
                    };

                    setBusinessForm(updated);
                    geocodeCurrentAddress(updated);

                    break;
               }

               case "province_id": {
                    const province = provinces.find(
                         p => p.province_id == finalValue
                    );

                    setMunicipalities(province?.municipalities || []);
                    setBarangays([]);

                    const updated = {
                         ...businessForm,
                         province_id: finalValue,
                         municipality_id: "",
                         barangay_id: "",
                    };

                    setBusinessForm(updated);
                    geocodeCurrentAddress(updated);

                    break;
               }

               case "municipality_id": {
                    const municipality = municipalities.find(
                         m => m.municipality_id == finalValue
                    );

                    setBarangays(municipality?.barangays || []);

                    const updated = {
                         ...businessForm,
                         municipality_id: finalValue,
                         barangay_id: "",
                    };

                    setBusinessForm(updated);
                    geocodeCurrentAddress(updated);

                    break;
               }

               case "barangay_id": {
                    const updated = {
                         ...businessForm,
                         barangay_id: finalValue,
                    };

                    setBusinessForm(updated);
                    geocodeCurrentAddress(updated);

                    break;
               }

               default: {
                    setBusinessForm(prev => ({
                         ...prev,
                         [name]: finalValue,
                    }));
               }
          }
     };

     const geocodeCurrentAddress = async ({ region_id, province_id, municipality_id, barangay_id }) => {
          const region = regions.find(r => r.region_id == region_id);
          const province = provinces.find(p => p.province_id == province_id);
          const municipality = municipalities.find(
               m => m.municipality_id == municipality_id
          );
          const barangay = barangays.find(
               b => b.barangay_id == barangay_id
          );

          const address = [
               barangay?.barangay_name,
               municipality?.municipality_name,
               province?.province_name,
               region?.region_name,
               "Philippines",
          ]
               .filter(Boolean)
               .join(", ");

          if (!address) return;

          try {
               const res = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
               );

               const data = await res.json();

               if (data.length > 0) {
                    setBusinessForm(prev => ({
                         ...prev,
                         latitude: data[0].lat,
                         longitude: data[0].lon,
                    }));
               }
          } catch (err) {
               console.error(err);
          }
     };

     const options = [
          { value: "option1", label: "Groceries" },
          { value: "option2", label: "Cooked Meals" },
          { value: "option3", label: "Delivery" },
          { value: "option4", label: "Piso Wifi" },
     ];

     const handleChange = (e) => {
          const { name, value, type, checked, files } = e.target;

          let finalValue;

          if (type === "checkbox") finalValue = checked ? 1 : 0;
          else if (type === "file") finalValue = files?.[0] ?? null;
          else finalValue = value;

          if (name in businessForm) {
               setBusinessForm((prev) => ({ ...prev, [name]: finalValue }));
               return;
          }
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          setErrors({});
          const formData = new FormData();

          const daysOpenArray = getDaysArray(businessForm.days_of_operation);

          const paymentsArray = [];
          if (businessForm.cash) paymentsArray.push("Cash");
          if (businessForm.gcash) paymentsArray.push("GCash");
          if (businessForm.paymaya) paymentsArray.push("PayMaya");
          if (businessForm.utang_ok) paymentsArray.push("Utang OK");

          const servicesArray = [];
          if (businessForm.delivery) servicesArray.push("Delivery");
          if (businessForm.meetup) servicesArray.push("Meet Up");
          if (businessForm.pickup) servicesArray.push("Pick Up");

          const submissionData = {
               ...businessForm,
               days_of_operation: daysOpenArray,
               payments_accepted: paymentsArray,
               business_services: servicesArray,
          };

          Object.entries(submissionData).forEach(([key, value]) => {
               if (['cash', 'gcash', 'paymaya', 'utang_ok', 'delivery', 'meetup', 'pickup'].includes(key)) {
                    return;
               }

               if (value instanceof File) {
                    formData.append(key, value);
               }
               else if (Array.isArray(value)) {
                    value.forEach(v => formData.append(`${key}[]`, v));
               }
               else if (typeof value === "boolean") {
                    formData.append(key, value ? "1" : "0");
               }
               else {
                    formData.append(key, value ?? "");
               }
          });

          if (id) {
               formData.append("_method", "PUT");
          }

          try {
               await updateBusinessAccount(id, formData);
               Alert.toast.success("Business account updated successfully!");
                              
               setTimeout(() => {
                    navigate("/business-accounts");
                    window.location.reload();
               }, 2000);

          } catch (err) {
               if (err.response?.data?.error?.fields) {
                    setErrors(err.response.data.error.fields);
               }
          }
     };

     return (
          <div className="container-fluid">
               <div className="row px-0">
                    <UserCardHeader />

                    <div className="col-12">
                         <form className="w-full mt-6 flex flex-col gap-3 pb-10" onSubmit={handleSubmit}>

                              <div className="flex justify-center gap-2">
                                   {[1, 2, 3, 4, 5].map((dot) => (
                                        <span key={dot} onClick={() => setBusinessStep(dot)} className={`w-3 h-3 rounded-full cursor-pointer ${businessStep === dot ? "bg-[#4CAF50]" : "bg-gray-300"
                                             }`}
                                        ></span>
                                   ))}
                              </div>

                              {/* Step 1: Basic Info */}
                              {businessStep === 1 && (
                                   <>
                                        <span className="text-xl font-bold text-gray-500">
                                             {id ? "Edit Business Information" : "Business Information"}
                                        </span>

                                        <TextInput
                                             form={businessForm}
                                             errors={errors}
                                             handleChange={handleChange}
                                             name="business_name"
                                             label="Business Name"
                                             variant="primary"
                                             type="text"
                                             placeHolder="Business Name"
                                        />

                                        <TextInput
                                             form={businessForm}
                                             errors={errors}
                                             handleChange={handleChange}
                                             name="business_category"
                                             label="Business Category"
                                             variant="primary"
                                             type="text"
                                             placeHolder="Business Category"
                                        />

                                        <TextInput
                                             form={businessForm}
                                             errors={errors}
                                             handleChange={handleChange}
                                             name="business_type"
                                             label="Business Type"
                                             type="select"
                                             variant="primary"
                                             placeHolder="Business Type"
                                             options={[
                                                  { value: "Local", label: "Local" },
                                                  { value: "International", label: "International" },
                                             ]}
                                        />

                                        <TextInput
                                             form={businessForm}
                                             errors={errors}
                                             handleChange={handleChange}
                                             name="business_email"
                                             label="Business Email (Optional)"
                                             variant="primary"
                                             type="email"
                                             placeHolder="Email"
                                        />

                                        <TextInput
                                             form={businessForm}
                                             errors={errors}
                                             handleChange={handleChange}
                                             name="business_website"
                                             label="Website (Optional)"
                                             variant="primary"
                                             type="text"
                                             placeHolder="Website"
                                        />

                                        <TextInput
                                             form={businessForm}
                                             errors={errors}
                                             handleChange={handleChange}
                                             name="business_address"
                                             label="Street Address"
                                             variant="primary"
                                             type="text"
                                             placeHolder="Street Address"
                                        />

                                        <div className="flex gap-2">
                                             <div className="flex-1">
                                                  <TextInput
                                                       form={businessForm}
                                                       errors={errors}
                                                       name="region_id"
                                                       label="Region"
                                                       type="select"
                                                       variant="primary"
                                                       placeHolder="Region"
                                                       handleChange={handleAddressChange}
                                                       options={regions.map(r => ({
                                                            value: r.region_id,
                                                            label: r.region_name,
                                                       }))}
                                                  />
                                             </div>
                                        </div>

                                        <div className="flex gap-2">
                                             <div className="flex-1">
                                                  <TextInput
                                                       form={businessForm}
                                                       errors={errors}
                                                       name="province_id"
                                                       label="Province"
                                                       type="select"
                                                       variant="primary"
                                                       placeHolder="Province"
                                                       handleChange={handleAddressChange}
                                                       options={provinces.map(p => ({
                                                            value: p.province_id,
                                                            label: p.province_name,
                                                       }))}
                                                  />
                                             </div>
                                        </div>

                                        <div className="flex gap-2">
                                             <div className="flex-1">
                                                  <TextInput
                                                       form={businessForm}
                                                       errors={errors}
                                                       name="municipality_id"
                                                       label="City"
                                                       type="select"
                                                       variant="primary"
                                                       placeHolder="City"
                                                       handleChange={handleAddressChange}
                                                       options={municipalities.map(m => ({
                                                            value: m.municipality_id,
                                                            label: m.municipality_name,
                                                       }))}
                                                  />
                                             </div>
                                        </div>

                                        <div className="flex gap-2">
                                             <div className="flex-1">
                                                  <TextInput
                                                       form={businessForm}
                                                       errors={errors}
                                                       name="barangay_id"
                                                       label="Barangay"
                                                       type="select"
                                                       variant="primary"
                                                       placeHolder="Barangay"
                                                       handleChange={handleAddressChange}
                                                       options={barangays.map(b => ({
                                                            value: b.barangay_id,
                                                            label: b.barangay_name,
                                                       }))}
                                                  />
                                             </div>
                                        </div>

                                        <TextInput
                                             form={businessForm}
                                             errors={errors}
                                             handleChange={handleChange}
                                             name="business_contact_number"
                                             label="Contact Number"
                                             variant="primary"
                                             type="number"
                                             placeHolder="Contact Number"
                                        />
                                        <div className="flex gap-2">
                                             <div className="flex-1">
                                                  <TextInput
                                                       form={businessForm}
                                                       errors={errors}
                                                       handleChange={handleChange}
                                                       name="days_of_operation"
                                                       label="Days"
                                                       type="select"
                                                       variant="primary"
                                                       placeHolder="Select Days"
                                                       options={[
                                                            { value: "1", label: "1" },
                                                            { value: "2", label: "2" },
                                                            { value: "3", label: "3" },
                                                            { value: "4", label: "4" },
                                                            { value: "5", label: "5" },
                                                            { value: "6", label: "6" },
                                                            { value: "7", label: "7" },
                                                       ]}
                                                  />
                                             </div>
                                        </div>
                                        <div className="flex gap-2">
                                             <div className="flex-1">
                                                  <TextInput
                                                       form={businessForm}
                                                       errors={errors}
                                                       handleChange={handleChange}
                                                       name="open_time"
                                                       label="Open Time"
                                                       variant="primary"
                                                       type="time"
                                                       placeHolder=""
                                                  />
                                             </div>
                                             <div className="flex-1">
                                                  <TextInput
                                                       form={businessForm}
                                                       errors={errors}
                                                       handleChange={handleChange}
                                                       name="close_time"
                                                       label="Close Time"
                                                       variant="primary"
                                                       type="time"
                                                       placeHolder=""
                                                  />
                                             </div>
                                        </div>

                                        <span className="text-sm text-left font-bold text-gray-700">
                                             Payment Method Accepted
                                        </span>

                                        <div className="flex gap-2">
                                             <div className="flex-1 border p-3 border-gray-500 rounded-lg">
                                                  <TextInput
                                                       form={businessForm}
                                                       errors={errors}
                                                       handleChange={handleChange}
                                                       name="cash"
                                                       label="Cash"
                                                       variant="primary"
                                                       type="checkbox"
                                                  />
                                             </div>
                                             <div className="flex-1 border p-3 border-gray-500 rounded-lg">
                                                  <TextInput
                                                       form={businessForm}
                                                       errors={errors}
                                                       handleChange={handleChange}
                                                       name="gcash"
                                                       label="GCash"
                                                       variant="primary"
                                                       type="checkbox"
                                                  />
                                             </div>
                                        </div>
                                        <div className="flex gap-2">
                                             <div className="flex-1 border p-3 border-gray-500 rounded-lg">
                                                  <TextInput
                                                       form={businessForm}
                                                       errors={errors}
                                                       handleChange={handleChange}
                                                       name="paymaya"
                                                       label="PayMaya"
                                                       variant="primary"
                                                       type="checkbox"
                                                  />
                                             </div>
                                             <div className="flex-1 border p-3 border-gray-500 rounded-lg">
                                                  <TextInput
                                                       form={businessForm}
                                                       errors={errors}
                                                       handleChange={handleChange}
                                                       name="utang_ok"
                                                       label="Utang OK"
                                                       variant="primary"
                                                       type="checkbox"
                                                  />
                                             </div>
                                        </div>
                                        <span className="text-sm text-left font-bold text-gray-700">
                                             Service Option (Optional)
                                        </span>
                                        <div className="flex gap-2">
                                             <div className="flex-1 border p-3 border-gray-500 rounded-lg">
                                                  <TextInput
                                                       form={businessForm}
                                                       errors={errors}
                                                       handleChange={handleChange}
                                                       name="delivery"
                                                       label="Delivery"
                                                       variant="primary"
                                                       type="checkbox"
                                                  />
                                             </div>
                                             <div className="flex-1 border p-3 border-gray-500 rounded-lg">
                                                  <TextInput
                                                       form={businessForm}
                                                       errors={errors}
                                                       handleChange={handleChange}
                                                       name="meetup"
                                                       label="Meet Up"
                                                       variant="primary"
                                                       type="checkbox"
                                                  />
                                             </div>
                                        </div>
                                        <div className="flex gap-2">
                                             <div className="flex-1 border p-3 border-gray-500 rounded-lg">
                                                  <TextInput
                                                       form={businessForm}
                                                       errors={errors}
                                                       handleChange={handleChange}
                                                       name="pickup"
                                                       label="Pick Up"
                                                       variant="primary"
                                                       type="checkbox"
                                                  />
                                             </div>
                                             <div className="flex-1 p-3"></div>
                                        </div>
                                        <TextInput
                                             form={businessForm}
                                             errors={errors}
                                             handleChange={handleChange}
                                             name="business_notes"
                                             label="Additional Information (Optional)"
                                             variant="primary"
                                             type="textarea"
                                             placeHolder="Additional notes"
                                        />
                                   </>
                              )}

                              {/* Step 2: Social Media */}
                              {businessStep === 2 && (
                                   <>
                                        <span className="text-xl font-bold text-gray-500">
                                             Social Media
                                        </span>
                                        <span className="text-md text-gray-500">
                                             Help customers find you on social media
                                        </span>
                                        <TextInput
                                             form={businessForm}
                                             errors={errors}
                                             handleChange={handleChange}
                                             name="tiktok_link"
                                             label="Tiktok Username"
                                             variant="primary"
                                             type="text"
                                             placeHolder="@yourbusiness"
                                        />
                                        <TextInput
                                             form={businessForm}
                                             errors={errors}
                                             handleChange={handleChange}
                                             name="facebook_link"
                                             label="Facebook Page/Profile"
                                             variant="primary"
                                             type="text"
                                             placeHolder="facebook.com/yourbusiness"
                                        />
                                        <TextInput
                                             form={businessForm}
                                             errors={errors}
                                             handleChange={handleChange}
                                             name="instagram_link"
                                             label="Instagram"
                                             variant="primary"
                                             type="text"
                                             placeHolder="@yourbusiness"
                                        />
                                        <TextInput
                                             form={businessForm}
                                             errors={errors}
                                             handleChange={handleChange}
                                             name="website_link"
                                             label="Website URL"
                                             variant="primary"
                                             type="text"
                                             placeHolder="http://yourbusiness.com"
                                        />
                                   </>
                              )}

                              {/* Step 3: Business Requirements */}
                              {businessStep === 3 && (
                                   <>
                                        <span className="text-lg font-bold text-gray-500">
                                             Business Requirements
                                        </span>
                                        <div className="alert text-left alert-warning border-start border-4 border-warning d-flex align-items-start gap-3 rounded-3">
                                             <i className="bx bx-error-circle mt-1"></i>While providing documents is optional,
                                             You're welcome to register without them. You can easily upload any necessary
                                             documents at your convenience within your Business Account settings.
                                        </div>
                                        <p className="text-muted text-center">
                                             Uploading business documents helps build trust with customers and improves your business credibility on saKubo.
                                        </p>

                                        <TextInput
                                             form={businessForm}
                                             errors={errors}
                                             handleChange={handleChange}
                                             name="business_permit"
                                             label="Business Permit / LGU Permit"
                                             variant="primary"
                                             type="file"
                                        />
                                        <TextInput
                                             form={businessForm}
                                             errors={errors}
                                             handleChange={handleChange}
                                             name="store_front_photo"
                                             label="Store Front Photo"
                                             variant="primary"
                                             type="file"
                                        />
                                        <TextInput
                                             form={businessForm}
                                             errors={errors}
                                             handleChange={handleChange}
                                             name="bir_certificate_of_registration"
                                             label="BIR Certificate of Registration"
                                             variant="primary"
                                             type="file"
                                        />
                                        <TextInput
                                             form={businessForm}
                                             errors={errors}
                                             handleChange={handleChange}
                                             name="dti_registration"
                                             label="DTI Registration (for sole proprietorship)"
                                             variant="primary"
                                             type="file"
                                        />
                                        <TextInput
                                             form={businessForm}
                                             errors={errors}
                                             handleChange={handleChange}
                                             name="sec_registration"
                                             label="SEC Registration (for sole corporation/partnership)"
                                             variant="primary"
                                             type="file"
                                        />
                                        <TextInput
                                             form={businessForm}
                                             errors={errors}
                                             handleChange={handleChange}
                                             name="sanitary_registration"
                                             label="Sanitary Permit (for food businesses)"
                                             variant="primary"
                                             type="file"
                                        />
                                   </>
                              )}

                              {/* Step 4: Product & Services */}
                              {businessStep === 4 && (
                                   <>
                                        <span className="text-xl font-bold text-gray-500">
                                             Product & Services
                                        </span>
                                        <p className="text-muted text-center">
                                             Search and select what you offer to help customers find you.
                                        </p>
                                        <Select2Dropdown
                                             form={businessForm}
                                             errors={errors}
                                             handleChange={handleChange}
                                             name="products"
                                             label="Search Product/Services"
                                             options={options}
                                             isMulti={true}
                                             variant="primary"
                                             type="select"
                                             placeHolder="Type to search offering"
                                        />
                                        <TextInput
                                             form={businessForm}
                                             errors={errors}
                                             handleChange={handleChange}
                                             name="additional_product"
                                             label="Additional Product/Services (Optional)"
                                             variant="primary"
                                             type="textarea"
                                             placeHolder="Describe any additional products or services not listed above..."
                                        />
                                   </>
                              )}

                              {/* Step 5: Review the Informations */}
                              {businessStep === 5 && (
                                   <>
                                        <span className="text-xl font-bold text-gray-500">
                                             Review your Information
                                        </span>
                                   </>
                              )}

                              {/* Navigation Buttons */}
                              <div className="flex justify-between mt-4">
                                   {businessStep > 1 && (
                                        <Button variant="outline" type="button" onClick={() => setBusinessStep(businessStep - 1)}>
                                             Back
                                        </Button>
                                   )}

                                   {businessStep < 5 && (
                                        <Button variant="primary" type="button" onClick={() => setBusinessStep(businessStep + 1)}>
                                             Next
                                        </Button>
                                   )}

                                   {businessStep === 5 && (
                                        <Button variant="primary" type="submit">
                                             Update Business Account
                                        </Button>
                                   )}
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
}