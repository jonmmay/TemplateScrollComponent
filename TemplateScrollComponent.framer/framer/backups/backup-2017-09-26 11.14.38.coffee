PrototypeScrollComponent = require "PrototypeComponent"
data = [
    {
        title: "Hennessey Venom GT",
        speed: 270.0,
        unit: "M"
    },
    {
        title: "Bugatti Chiron",
        speed: 261.0,
        unit: "M"
    },
    {
        title: "Bugatti Veyron Super Sport",
        speed: 268.0,
        unit: "M"
    },
    {
        title: "SSC Ultimate Aero",
        speed: 256.0,
        unit: "M"
    },
    {
        title: "Saleen S7 Twin Turbo",
        speed: 248.0,
        unit: "M"
    },
    {
        title: "Koenigsegg CCR",
        speed: 242.0,
        unit: "M"
    },
    {
        title: "McLaren F1",
        speed: 241.0,
        unit: "M"
    },
    {
        title: "Pagani Huayra BC",
        speed: 238.0,
        unit: "M"
    },
    {
        title: "Zenvo ST1",
        speed: 233.0,
        unit: "M"
    },
    {
        title: "Noble M600",
        speed: 225.0,
        unit: "M"
    }
]

dataFormatter =
	unit: ( val ) -> val.toLowerCase()
	
example_prototypeCell 


scroll = new PrototypeScrollComponent
	wrap: scrollView

scroll.props =
	scrollHorizontal: false,
	numberOfItems: data.length,
	prototypeItem: prototypeCell,
	gutter: 20

scroll.forItemAtIndex = ( index, layer ) ->
	cell = layer.copy()	
	PrototypeScrollComponent.applyTemplate cell, data[ index ], dataFormatter	
	return cell