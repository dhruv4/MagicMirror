/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "0.0.0.0", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.255", "::ffff:192.168.1.18", "::ffff:192.168.1.10", "::ffff:192.168.1.9", "192.168.1.10", "192.168.1.9"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				showSunTimes: true,
				displayType: "both"
			}
		},
		{
			module: "calendar",
			header: "Calendar",
			position: "top_left",
			config: {
				maximumNumberOfDays: 5,
				// limitDays: 3,
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/dhruv4%40gmail.com/private-58a0f98c7317f74fd837a62d88ff2f3a/basic.ics",
						color: "#002633"
					},
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/dhruv%40axleapi.com/private-39e5c59792bf3c543e7807ea756a75c4/basic.ics",
						color: "#FF0000"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Boston",
				//locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "8ea1189561130ddae7824922da356469"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Boston",
				//locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "8ea1189561130ddae7824922da356469",
				// maxNumberOfDays: 10,
				maxEntries: 10
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				showDescription: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		//{
		//  module: 'MMM-awesome-alexa',
		//  position: 'bottom_bar',
		//  config: {
		//    wakeWord: 'Smart Mirror',
		//    clientId: 'amzn1.application-oa2-client.b40e3c966ba142d088d3c966c09a24d2',
		//    clientSecret: 'e895d6829cdfa0ba993366055c80738aaf8c811944e0ccb198c12bac24d5ee91',
		//    deviceId: 'SmartMirror',
		//    refreshToken: 'Atzr|IwEBIGo0CJO2jcpla_ixSMPF4KjBJLWqd9zlyT1yTPJuE2y63WfcGL2k-zkp4T1P4_A_gTh1tVMAMZlGx2AWwcxkqMYQZO0fvQuSepLbZmCWrEa_Y-9J8EKvGKIxKF0t0iPnxk57_QDysbaJlzEEZNjR832GA5Jc7Xdl1GhAb3HpAjJC4LCFV21J5cZ8GrQ02q_uwHMcBoqSVRNoTZ8bP8kw8wQ8LiJWCHs1V6Mk58CvPUxHg9iYbPQG8mIw5iAaQ2hYOeVYcvI1qeQ_oVhIViznB2Z8h60OeM44KJSwOmXoV6FTROLKElfweIgvBQ4_L2yRoUPgUPUIEncXJ4MHdi2s1iiUODAWKjsgTgFxArQjN8eGBw',
		//    lite: false,
		//    isSpeechVisualizationEnabled: true
		//  }
		//},
		{
			module: 'MMM-Remote-Control',
			// uncomment the following line to show the URL of the remote control on the mirror
			// position: 'bottom_left',
			// you can hide this module afterwards from the remote control itself
			config: {
				customCommand: {},  // Optional, See "Using Custom Commands" below
				showModuleApiMenu: true, // Optional, Enable the Module Controls menu
				secureEndpoints: true, // Optional, See API/README.md
				// uncomment any of the lines below if you're gonna use it
				// customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
				// apiKey: "", // Optional, See API/README.md for details
				// classes: {} // Optional, See "Custom Classes" below
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
