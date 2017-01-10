var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
	return (
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Here are a few example locations!</p>
			<ol>
				<li>
					<Link to='/?location=Warsaw'>Warsaw, Poland</Link>
				</li>
				<li>
					<Link to='/?location=Berlin'>Berlin, Germany</Link>
				</li>
			</ol>
		</div>	
	);
	
}

module.exports = Examples;