const axios = require("axios");
const Weather = require("../model/Weather");
require("dotenv").config();
//const API_KEY = "2817b9f070d1b85500f9ff826d3f7013";

const API_KEY = process.env.API_KEY;

exports.renderHomePage = (req, res) => {
	res.render("index");
};

exports.getWeather = (req, res) => {
	const city = req.body.city;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
	const weather = new Weather(req.body.city);

	weather.validateUserInput();

	if (weather.errors.length) {
		res.render("index", {
			error: weather.errors.toString(),
		});
	} else {
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
	}
};
