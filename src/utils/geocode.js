const request = require('request')

const geocode = (address, callback) => {
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYXNoaGFyazMxIiwiYSI6ImNrcmFwMDF0NzAzZXMybnBlY2d2MzRhamcifQ._xD-6T5vSsiol5tKF4XkZw&limit=1'
	request({ url, json:true }, (error, { body } = {} ) => {
		if(error){
			callback('Unable to connect weather service!', undefined)
		} else if(!body.features.length){
			callback('Unable to find location', undefined)
		} else {
			callback(undefined, {
				longitute: body.features[0].center[0],
				latitude: body.features[0].center[1],
				location: body.features[0].place_name
			})
		}
	})
}

module.exports = geocode