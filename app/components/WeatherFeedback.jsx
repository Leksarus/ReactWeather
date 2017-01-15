var React = require('react');

var WeatherFeedback = ({temp, location}) => {
	//temps & location is similar to (props) and var {temp, location} = props inside

	return (
		<h3 className="text-center">And the weather in {location} is {temp}</h3>
	);

}

module.exports = WeatherFeedback;