PrototypeScrollComponent = require "PrototypeComponent"
data = require "data"

dataFormatter =
	speed: ( val ) -> Utils.round val

scroll = new PrototypeScrollComponent
	wrap: scrollView
scroll.props =
	scrollHorizontal: false,
	numberOfItems: data.length,
	prototypeItem: prototypeCell,
	gutter: 0

scroll.forItemAtIndex = ( index, layer ) ->
	cell = layer.copy()	
	PrototypeScrollComponent.applyTemplate cell, data[ index ], dataFormatter	
	return cell