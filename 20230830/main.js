let myGraph = document.getElementById('myGraph')
let trace1 = {};
let data = [];
trace1.mode = "markers";
trace1.type = "scatter";
trace1.x = [];
trace1.y = [];
for (let i = 0; i < set1.length;i++){
    trace1.x[i] = set1[i][0];
    trace1.y[i] = set1[i][1];
} 
data.push(trace1);

let trace2 = {};
trace2.mode = "lines+texts";
trace2.type = "scatter";
trace2.x = [];
trace2.y = [];


for (let i = 0; i < set2.length;i++){
    trace2.x[i] = set2[i][0];
    trace2.y[i] = set2[i][1];
} 


// let data2 = [];
data.push(trace2);

let trace3 = {};
trace3.mode = "line + markers";
trace3.type = "scatter";
trace3.x = [];
trace3.y = [];
trace3.text=[];
for (let i = 0; i < set3.length;i++){
    trace3.x[i] = set3[i][0];
    trace3.y[i] = set3[i][1];
    trace3.text[i] = set3[i][2]
} 
trace3.name = 'teamC'
data.push(trace3);
trace3.marker={
    size:15
}

let layout = {
    margin:{
        t:150
    }
};

Plotly.newPlot(myGraph, data, layout)
// Plotly.newPlot(myGraph, data2, layout)





