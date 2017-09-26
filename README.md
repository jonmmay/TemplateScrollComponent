# Design a template cell for ScrollComponents in Framer

TemplateScrollComponent is an extension of Framer's ScrollComponent which simplifies creating lists from array data. 

Use Design view to design your ScrollComponent and template layer. Or simply generate your layers via Code view.

### How To Use [(Try the live demo)](https://framer.cloud/fqUtD/)
<a href='https://open.framermodules.com/Template cell ScrollComponent'>
    <img alt='Install with Framer Modules'
    src='https://www.framermodules.com/assets/badge@2x.png' width='160' height='40' />
</a>

or

- Copy the `TemplateScrollComponent.coffee` file to your prototype's `modules` folder.
- Call `TemplateScrollComponent = require "TemplateScrollComponent"` in your Framer prototype.
- Create a scroll componment as you would otherwise, `scroll = new TemplateScrollComponent`
- Define the number of items for the scroll component `scroll.numberOfItems = 4`
- Optionally point the scroll component at your template layer, `scroll.prototypeItem = prototypeCell`
- Define the function `scroll.forItemAtIndex` which will be called for every item. See the example below.
 
 ![alt screencap](https://github.com/jonmmay/TemplateScrollComponent/blob/master/example.gif?raw=true)

`example.json`
```coffeescript
TemplateScrollComponent = require "TemplateScrollComponent"

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
    }
]

dataFormatter =
    unit: ( val ) -> val.toLowerCase()

templateCell = new Layer
    name: "template cell"
    width: Screen.width
    height: 64
    backgroundColor: null

title = new TextLayer
    parent: templateCell
    x: 10
    y: 10
    fontSize: 18
    text: "{title}"
    color: "#333333"

details = new TextLayer
    parent: templateCell
    x: 10
    y: 37
    fontSize: 14
    text: "{speed} {unit}/hr"
    color: "#ADADAD"

line = new Layer
    parent: templateCell
    x: 10
    height: 1
    maxY: templateCell.height
    width: templateCell.width - 10
    backgroundColor: "#DADADA"

scroll = new TemplateScrollComponent
    frame: Screen.frame
    backgroundColor: null
    scrollHorizontal: false
    numberOfItems: data.length
    templateItem: templateCell

# Original template layer will destroyed from hierarchy
scroll.content.addChild templateCell

scroll.forItemAtIndex = ( index, layer ) ->
    # Copy templateCell layer
    cell = layer.copy()
    TemplateScrollComponent.applyTemplate cell, data[ index ], dataFormatter    
    return cell
```