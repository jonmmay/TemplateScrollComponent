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
    gutter: 20

# Original template layer will be destroyed from hierarchy
scroll.content.addChild templateCell

scroll.forItemAtIndex = ( index, layer ) ->
    # Copy templateCell layer
    cell = layer.copy()
    TemplateScrollComponent.applyTemplate cell, data[ index ], dataFormatter    
    return cell