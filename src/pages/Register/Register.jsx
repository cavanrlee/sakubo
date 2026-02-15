import React, { useState, useEffect } from "react";
import saKuboLogo from "/saKubo.svg";
import { registerUser } from "@/pages/register/RegisterController";
import { useNavigate } from "react-router-dom";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button"; 
import Tabs from "@/components/Tabs";
import Logo from "@/components/Logo";
import Alert from "@/utils/alert";

export default function SaKuboRegister() {
  const [activeTab, setActiveTab] = useState("personal");
  const [businessStep, setBusinessStep] = useState(1); // Step state for Business tab
  const navigate = useNavigate();

  const tabList = [
    { key: "personal", label: "Personal" },
    { key: "business", label: "Business" },
  ];

  const [form, setForm] = useState({
    account_type: "personal",

    // personal
    lastname: "",
    nickname: "",
    email: "",
    password: "",
    number: 0,
    barangay: "",
    city: "",
    province: "",

    // business
    business_name: "",
    business_category: "",
    business_type: "",
    business_email: "",
    business_website: "",
    business_address: "",
    business_barangay: "",
    business_city: "",
    business_province: "",
    business_number: 0,
    business_notes: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      account_type: activeTab,
    }));
    if(activeTab === "business") setBusinessStep(1); // reset step on tab change
  }, [activeTab]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const accountType = form.account_type;

    // Dynamically pick relevant fields
    const payload = Object.fromEntries(
      Object.entries(form).filter(([key, value]) => {
        if (key === "account_type") return true; // always include account_type
        return accountType === "personal"
          ? !key.startsWith("business_")
          : key.startsWith("business_");
      })
    );

    try {
      const res = await registerUser(payload);
      localStorage.setItem("api_token", res.token);
      Alert.success(
        "Thank you!",
        <small>Your submission was received successfully.</small>
      );
      navigate("/login")
    } catch (err) {
      if (err.response?.data?.error?.fields) {
        setErrors(err.response.data.error.fields);
      }
    }
  };

  return (
    <div className="row">
      <div className="col-12 max-w-xl mx-auto">
        <Logo/>

        {/* TITLE */}
        <div className="row mb-4 text-center">
          <div className="col-12">
            <span className="text-2xl text-gray-600 font-bold">
              Create Account
            </span>
          </div>
          <div className="col-12">
            <span className="text-md text-gray-500">
              Join our community today
            </span>
          </div>
        </div>

        {/* TABS */}
        <Tabs tabs={tabList} activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* FORM */}
        <form className="w-full mt-6 flex flex-col gap-4 pb-10">
          {activeTab === "personal" ? (
            <>
              {/* Personal tab unchanged */}
              <div className="flex gap-2">
                <div className="flex-1">
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="firstname"
                    label="First Name"
                    variant="primary"
                    type="text"
                    placeHolder="First Name"
                  />
                </div>
                <div className="flex-1">
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="middlename"
                    label="Middle Name"
                    variant="primary"
                    type="text"
                    placeHolder="Middle Name"
                  />
                </div>
                <div className="flex-1">
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="lastname"
                    label="Last Name"
                    variant="primary"
                    type="text"
                    placeHolder="Last Name"
                  />
                </div>
              </div>

              <div>
                <TextInput
                  form={form}
                  errors={errors}
                  handleChange={handleChange}
                  name="nickname"
                  label="Nickname (Optional)"
                  variant="primary"
                  type="text"
                  placeHolder="Nickname"
                />
              </div>

              <div>
                <TextInput
                  form={form}
                  errors={errors}
                  handleChange={handleChange}
                  name="number"
                  label="Number"
                  variant="primary"
                  type="number"
                  placeHolder="Number"
                />
              </div>

              <div>
                <TextInput
                  form={form}
                  errors={errors}
                  handleChange={handleChange}
                  name="email"
                  label="Email (Optional)"
                  variant="primary"
                  type="email"
                  placeHolder="Email"
                />
              </div>

              <div>
                <TextInput
                  form={form}
                  errors={errors}
                  handleChange={handleChange}
                  name="password"
                  label="Password"
                  variant="primary"
                  type="password"
                  placeHolder="Password"
                />
              </div>

              <div className="flex gap-2">
                <div className="flex-1">
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="barangay"
                    label="Barangay"
                    variant="primary"
                    type="text"
                    placeHolder="Barangay"
                  />
                </div>
                <div className="flex-1">
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="city"
                    label="City"
                    variant="primary"
                    type="text"
                    placeHolder="City"
                  />
                </div>
                <div className="flex-1">
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="province"
                    label="Province"
                    variant="primary"
                    type="text"
                    placeHolder="Province"
                  />
                </div>
              </div>
              <Button variant="primary" type="submit" onClick={handleSubmit}>Create Personal Account</Button>
            </>
          ) : (
            <>
              {/* Business tab with 4 steps */}
              {/* Navigation Dots */}
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4].map((dot) => (
                  <span key={dot} onClick ={() => setBusinessStep(dot)} className={`w-3 h-3 rounded-full ${
                      businessStep === dot ? "bg-[#4CAF50]" : "bg-gray-300"
                    }`}
                  ></span>
                ))}
              </div>

              {/* Step 1: Basic Info */}
              {businessStep === 1 && (
                <>
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="business_name"
                    label="Business Name"
                    variant="primary"
                    type="text"
                    placeHolder="Business Name"
                  />
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="business_category"
                    label="Business Category"
                    variant="primary"
                    type="text"
                    placeHolder="Business Category"
                  />
                </>
              )}

              {/* Step 2: Type & Email/Website */}
              {businessStep === 2 && (
                <>
                  <TextInput
                    form={form}
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
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="business_email"
                    label="Business Email (Optional)"
                    variant="primary"
                    type="email"
                    placeHolder="Email"
                  />
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="business_website"
                    label="Website (Optional)"
                    variant="primary"
                    type="text"
                    placeHolder="Website"
                  />
                </>
              )}

              {/* Step 3: Address */}
              {businessStep === 3 && (
                <>
                  <TextInput
                    form={form}
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
                        form={form}
                        errors={errors}
                        handleChange={handleChange}
                        name="business_barangay"
                        label="Barangay"
                        variant="primary"
                        type="text"
                        placeHolder="Barangay"
                      />
                    </div>
                    <div className="flex-1">
                      <TextInput
                        form={form}
                        errors={errors}
                        handleChange={handleChange}
                        name="business_city"
                        label="City"
                        variant="primary"
                        type="text"
                        placeHolder="City"
                      />
                    </div>
                    <div className="flex-1">
                      <TextInput
                        form={form}
                        errors={errors}
                        handleChange={handleChange}
                        name="business_province"
                        label="Province"
                        variant="primary"
                        type="text"
                        placeHolder="Province"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Step 4: Contact & Notes */}
              {businessStep === 4 && (
                <>
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="business_number"
                    label="Contact Number"
                    variant="primary"
                    type="number"
                    placeHolder="Contact Number"
                  />
                  <TextInput
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    name="business_notes"
                    label="Notes (Optional)"
                    variant="primary"
                    type="textarea"
                    placeHolder="Additional notes"
                  />
                </>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-4">
                {businessStep > 1 && (
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => setBusinessStep(businessStep - 1)}
                  outline>
                    Back
                  </Button>
                )}

                {businessStep < 4 && (
                  <Button
                    variant="primary"
                    type="button"
                    onClick={() => setBusinessStep(businessStep + 1)}
                  >
                    Next
                  </Button>
                )}

                {businessStep === 4 && (
                  <Button variant="primary" type="submit" onClick={handleSubmit}>Create Business Account</Button>
                )}
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
