let body

let theme_0 = {
    'background-color': '#000000',
    'color': '#ffffff'
}
let theme_1 = {
    'background-color': '#ffffff',
    'color': '#000000'
}
let theme_2 = {
    'background-color': '#000000',
    'color': '#ff0000'
}
function setup(){
    noCanvas();
    body = select('body');
    body.style('background-color', '#000000');
    body.style('color', '#ffffff');   
}

function draw(){
    // do a linear interpolation of colors using sine
    let c_back = lerpColor(color(theme_0['background-color']), color(theme_1['background-color']), cos(frameCount/100));
    let c_text = lerpColor(color(theme_0['color']), color(theme_1['color']), cos(frameCount/100));
    body.style('background-color', c_back);
    body.style('color', c_text);
}
