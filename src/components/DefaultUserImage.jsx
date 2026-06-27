import React from "react";
import defUserImg from '/resources/images/default-profile-img.png';
import { useState, useEffect } from 'react'

const DefaultUserImage = () => {
	return (
		<img src={defUserImg} alt="saKubo" className="w-100 h-auto border-8 border-[#a3d4a5]! rounded-full! shadow-sm" />
	);
};

export default DefaultUserImage;
