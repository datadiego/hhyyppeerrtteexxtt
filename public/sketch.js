let body
let main_val = 0
let wait_time = 0
let themes = [
theme_0 = {
    'background-color': '#000000',
    'color': '#ffffff'
},
theme_1 = {
    'background-color': '#ffffff',
    'color': '#000000'
},
theme_2 = {
    'background-color': '#000000',
    'color': '#ff0000'
},
theme_3 = {
    'background-color': '#fffccc',
    'color': '#0000ff'
},
theme_4 = {
    'background-color': '#0000ff',
    'color': '#fffccc',
},
theme_5 = {
    'background-color': '#ffffff',
    'color': '#f00783',
},
theme_6 = {
    'background-color': '#f00783',
    'color': '#ffffff',
},
theme_7 = {
    'background-color': '#fffccc',
    'color': '#0000ff',
},
theme_8 = {
    'background-color': '#3c0059',
    'color': '#00ff00',
},

]



let current_theme
let next_theme
function setup(){
    noCanvas();
    body = select('body');
    body.style('background-color', '#000000');
    body.style('color', '#ffffff');
    current_theme = themes[themes.length - 1]
    next_theme = random(themes)
    while(next_theme == current_theme){
        next_theme = random(themes)
    }
}

function draw(){
    // do a linear interpolation of colors using sine
    if(main_val < 1){
    main_val += 0.02;
    }
    if (main_val > 1) {
        wait_time += 1;
        if(wait_time > 100){
            main_val = 0;
            wait_time = 0;
            current_theme = next_theme;
            next_theme = random(themes);
        }
    }
    let c_back = lerpColor(color(current_theme['background-color']), color(next_theme['background-color']), main_val);
    let c_text = lerpColor(color(current_theme['color']), color(next_theme['color']), main_val);
    body.style('background-color', c_back);
    body.style('color', c_text);

}
