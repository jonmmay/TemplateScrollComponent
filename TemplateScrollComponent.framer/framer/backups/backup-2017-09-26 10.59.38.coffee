PrototypeScrollComponent = require "PrototypeComponent"
data = require "data"

dataFormatter =
	date: ( val ) -> moment( val ).format( "MMM D" )
	location: ( val ) -> if val.length < 30 then val else val[0..30] + "..."

scroll = new PrototypeScrollComponent
	wrap: scrollView
scroll.props =
	scrollHorizontal: false,
	numberOfItems: data.length,
	prototypeItem: prototypeCell,
	gutter: 0,
	contentInset:
		top: 0

scroll.forItemAtIndex = ( index, layer ) ->
	cell = layer.copy()	
	PrototypeScrollComponent.applyTemplate cell, data[ index ], dataFormatter
	
	cell.backgroundColor = "#DEDEDE" if index % 2
	
	return cell