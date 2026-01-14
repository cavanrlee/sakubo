import { React } from 'react'
import './Home.css'


function HomePage() {

	return (
		<div className="w-full p-8">
			<div className="bg-white shadow-md rounded-2xl p-6">
				<h1 className="text-4xl text-green-600 font-bold mb-4">saKubo</h1>
				<p className="text-gray-600 text-md">
					Discover local businesses in your community.
				</p>

				<div className="bg-green-50 border-2 border-green-600 rounded-2xl p-4 mt-6 text-center">
					<p className="text-green-600 text-lg font-medium">Current Location:</p>
					<p className="text-gray-600 text-lg font-bold">Ibayo, Marilao, Bulacan</p>
					<p className="text-green-600 text-md font-bold">
						34 <span className="font-normal">businesses found in your area.</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default HomePage
