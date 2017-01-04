var React = require('react');

var WeatherFeedback = ({temp, location}) => {
	//temps & location is similar to (props) and var {temp, location} = props inside

	return (
		<div>
			<p>And the weather in {location} is {temp}</p>
		</div>
	);

}

module.exports = WeatherFeedback;