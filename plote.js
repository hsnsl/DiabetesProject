localStorage.setItem("reads",localStorage.getItem("reads"));
var reads=localStorage.getItem("reads");
var ctx = document.getElementById('myChart').getContext('2d');
var loader = document.getElementById('loader');
var lbl = document.getElementById('lbl');
var d = document.getElementById('des');
var av = document.getElementById('av');
function view(){
            myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [1,2,3,4,5,6,7,8,9,10],
                    datasets: [{
                        label: 'رقم القراءة',
                        data: reads.split(" "),
                        backgroundColor: [
                            'rgba(27, 143, 54, 0.5)',
                        ],
                        borderColor: [
                            'rgba(27, 143, 54, 0.5)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }
var myVar;var sum=0;var ar;
function pro(){
    loader.style.display='none';
    lbl.style.display='none';
    view();
    ar=reads.split(" ");
    for(var i=0;i<=ar.length-1;i++)
    {
        sum+=Number(ar[i]);
    }
    sum = sum/(ar.length);
    if(!ar){d.innerText="Unfortunately, there are no readings. You can record a reading now"}
    if(sum < 70){d.innerText="The blood sugar level is nearing a decrease, the better you control it"}
    if(sum >= 70 && sum <= 170){d.innerText="The blood sugar level is under control"}
    if(sum >= 171 && sum <= 250){d.innerText="The blood sugar level is not under control"}
    if(sum >= 251){d.innerText="The level of glucose in the blood is not suitable, please see a doctor"}
    av.innerText="Average:"+Math.floor(sum);
    clearInterval(myVar);
}
function f() {
    myVar = setInterval(function(){pro();},5000);
}  
f();