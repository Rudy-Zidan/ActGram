# ActGram
A simple Javascript library that provides Digrams like (flowchart, ERD) with actions like (inputs, output, data flow, .. etc).

# Build

- Simply you can build dev by ```npm run build-dev```
- Simply you can build prod by ```npm run build```

# Examples

You can always open the ```index.html``` page in the root directory

## How to use it

- Add this ```<script src= './dist/bundle.js'> </script>``` to your html page
- Add a simple board with a process element like this

```
<script>
    let actGram = new ActGram('#{any-css-selector-for-main-svg-container}', {width: "100%", height: "100%"});
    actGram.draw();

    let actGramProcess = new ActGramProcess(
        "Get Data",
        actGram.svg,
        200,
        50,
        {fill: '#fff', rx: "5"},
        {
            color: '#000',
            opacity: 0.6,
            width: 2
        }
    );
    actGramProcess.draw(200, 50)

</script>
```

## Basic Demo

![Board and Process dragging demo](https://github.com/Rudy-Zidan/ActGram/blob/master/demo/basic_demo.gif)
