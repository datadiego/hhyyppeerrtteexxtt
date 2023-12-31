let body
let a
let main_val = 0
let wait_time = 0
let limitHeight = 0
let art
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
    'color': '#f7ba02',
    'background-color': '#2c0157',
},
theme_8 = {
    'color': '#00ff00',
    'background-color': '#000000',
},
theme_9 = {
    'color': '#000000',
    'background-color': '#ff0000',
},
theme_10 = {
    'color': '#0000ff',
    'background-color': '#ffff00',
},
theme_11 = {
    'color': '#f70299',
    'background-color': '#000000',
},
]



let current_theme
let next_theme

function showLastTheme(){
    // Show last added theme
    body.style('background-color', themes[themes.length-1]['background-color'])
    body.style('color', themes[themes.length-1]['color'])
}

function showTheme(index){
    // Show this theme
    if(index >= themes.length){
        index = 0
    }
    body.style('background-color', themes[index]['background-color'])
    body.style('color', themes[index]['color'])
}

function setup(){
    noCanvas();
    a = selectAll("a")
    body = select('body');
    art = select('pre');
    body.style('background-color', '#000000');
    body.style('color', '#ffffff');
    // a.style('color', '#ffffff');
    current_theme = themes[themes.length - 1]
    next_theme = random(themes)
    
    
}

function draw(){
    // console.log(window.scrollY)
    if(main_val < 1){
        main_val += 0.006;
        }
        if (main_val > 1) {
            wait_time += 1;
            if(wait_time > 20){
                main_val = 0;
                wait_time = 0;
                current_theme = next_theme;
                next_theme = random(themes);
                while(next_theme == current_theme){
                    next_theme = random(themes);
                }
            }
        }

    let c_back = lerpColor(color(current_theme['background-color']), color(next_theme['background-color']), main_val);
    let c_text = lerpColor(color(current_theme['color']), color(next_theme['color']), main_val);
    body.style('background-color', c_back);
    body.style('color', c_text);
    for (let i = 0; i < a.length; i++) {
        a[i].style('color', c_text);
    }

}
