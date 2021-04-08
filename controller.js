const axios = require("axios");

require("dotenv").config();


const API_KEY = process.env.API_KEY;

exports.renderHomePage = (req, res) => {
	res.render("index");
};

exports.getWeather = (req, res) => {
	const city = req.body.city;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

	axios
		.get(url)
		.then((response) => {
			const { description, icon } = response.data.weather[0];
			const { name: cityname } = response.data;
			const temp = response.data.main.temp;
			locals = {
				icon: icon,
				description: description,
				cityname: cityname,
				temp: temp,
			};

			res.render("index", {
				locals: locals,
			});
		})
		.catch((error) => {});
};
