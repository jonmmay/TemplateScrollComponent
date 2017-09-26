PrototypeScrollComponent = require "PrototypeComponent"
data = require "data"

dataFormatter =
	unit: ( val ) -> val.toLowerCase()

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