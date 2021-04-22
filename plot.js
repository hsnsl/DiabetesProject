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
    if(!ar){d.innerText="للأسف لا يوجد لديك قراءات يمكنك التسجيل الآن";}
    if(sum < 70){d.innerText="مستوى السكر في الدم شبه منخفض يفضل  السيطرة عليه أكثر"}
    if(sum >= 70 && sum <= 170){d.innerText="مستوى السكر في الدم تحت السيطرة"}
    if(sum >= 171 && sum <= 250){d.innerText="مستوى السكر في الدم ليس تحت السيطرة"}
    if(sum >= 251){d.innerText="مستوى السكر في الدم غير مناسب عليك مراجعة الطبيب"}
    av.innerText="المتوسط:"+Math.floor(sum);
    clearInterval(myVar);
}
function f() {
    myVar = setInterval(function(){pro();},5000);
}  
f();