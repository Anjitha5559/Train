
document.addEventListener('DOMContentLoaded', function() {
    var i=document.getElementById("inform");
    i.style.display = "none";
    var q=document.getElementById("query");
    q.style.display = "none";
  }, false);

var trainss =  [
      
    {
    "Trainid": "16526",
    "name": "KSR BENGALURU - KANNIYAKUMARI EXPRESS",
    "start" : "Thrissur",
    "end": "Thiruvananthapuram",
    "departure" : "5:45",
    "arrival" : "12:35",
    "nagc" : ["D1","d3","D5","D6","D7","D8","D9"],
    "name_of_station" : "Thrissur",
    "ngc" : 2,
    "sogc" :"normal",
    },
    {
    "Trainid": "22660",
    "name": "YOG NAGARI RISHIKESH KOCHUVELI EXPRESS",
    "start" : "Thrissur",
    "end": "Thiruvananthapuram",
    "departure" : "6:30",
    "arrival" : "12:30",
    "nagc" : ["D1","D3","D5","D6"],
    "name_of_station" : "Thrissur",
    "ngc" : 4,
    "sogc" :"normal",
    },
    {
    "Trainid": "16841",
    "name": "Kannur -TVM central Jana shata",
    "start" : "Thrissur",
    "end": "Thiruvananthapuram",
    "departure" : "8:30",
    "arrival" : "14:10",
    "nagc" : ["D13","D1"],
    "name_of_station" : "Thrissur",
    "ngc" : 3,
    "sogc" :"normal",
    },
    
    {
    
    "name": "Kerala Express",
    "Trainid":"12626",
    "start" : "Thrissur",
    "end": "Thiruvananthapuram",
    "departure" : "15:35",
    "arrival" : "21:55",
    "nagc" : ["D1","D2","D3"],
    "name_of_station" : "thrissur",
    "ngc" : 3,
    "sogc" : "good",
    
    },
    {
    
    "name": "Bilaspur-Tirunelveli-Express",
    "Trainid": "22619",
    "start" : "Thrissur",
    "end": "Thiruvananthapuram",
    "departure" : "18:20",
    "arrival" : "00:01",
    "nagc" : ["D6","D5","D4","D3","D2","D1"],
    "name_of_station" : "thrissur",
    "ngc" : 6,
    "sogc" :"very conjusted",
    },
    {
    
    "name": "Gandhidham-Nagarcoil Expres",
    "Trainid": "16335",
    "start" : "Thrissur",
    "end": "Thiruvananthapuram",
    "departure" : "21:45",
    "arrival" : "03:25",
    "nagc" : ["D2","D1"],
    "name_of_station" : "Thrissur",
    "ngc" : 2,
    "sogc" : "very good",
    
    
    },
    
    
    {
    
    "name": "HAZRAT NIZAMUDDIN TVM EXP",
    "Trainid": "12644",
    "start" : "Thrissur",
    "end": "Thiruvananthapuram",
    "departure" : "1:05",
    "arrival" : "07:05",
    "nagc" : ["D1", "D2"],
    "name_of_station" : "Thrissur",
    "ngc" : 2,
    "sogc" : "Conjusted"
    
    },
    {
    
    "name": "MALABAR EXP",
    "Trainid": "16630",
    "start" : "Thrissur",
    "end": "Thiruvananthapuram",
    "departure" : "1:55",
    "arrival" : "09:05",
    "nagc" : ["D1", "D2", "D3", "D4"],
    "name_of_station" : "Thrissur",
    "ngc" : 4,
    "sogc" : "Conjusted"
    
    },
    {
    "name": "MUMBAI_CMST-KANNIYAKUMARI EXP",
    "Trainid": "16381",
    "start" : "Thrissur",
    "end": "Thiruvananthapuram",
    "departure" : "2:25",
    "arrival" : "09:00",
    "nagc" : ["D1", "D2"],
    "name_of_station" : "Thrissur",
    "ngc" : 2,
    "sogc" :"Good",
    
    },
    {
    
    "name": "AMRITHA EXPRESS",
    "Trainid": "16344",
    "start" : "Thrissur",
    "end": "Thiruvananthapuram",
    "departure" : "23:15",
    "arrival" : "05:15",
    "nagc" : ["D1", "D2"],
    "name_of_station" : "Thrissur",
    "ngc" : 2,
    "sogc" :"Normal"
    
    },
    {
    
    "name" : "MAVELI EXP",
    "Trainid": "16603",
    "start" : "Thrissur",
    "end" : "Thiruvananthapuram",
    "departure" : "23:55",
    "arrival" : "06:20",
    "nagc" : ["D1", "D2", "D3", "D4"],
    "name_of_station" : "Thrissur",
    "ngc" : 4,
    "sogc" : "v.good",
    
    },
       
    ];
    ////////////////////////////////////////////////////////////////////////
    
    function qshow()
    {
        var q = document.getElementById("query");
        q.style.display = "none";
        var i=document.getElementById("inform");
        i.style.display = "none";

    }
    function ishow()
    {
        var i=document.getElementById("inform");
        i.style.display = "block";
        var q = document.getElementById("query");
        q.style.display = "none";
    }
    
    
    function search_query() {
        var tid = document.getElementById('txtipt').value;
        
        var FOUND = -1;
        for(var i=0; i<trainss.length; i++) {
            if(trainss[i].Trainid == tid) {
                FOUND = i;
                break;
            }
        }
    if(FOUND == -1)  
    {
        alert("enter a valid number")
    }
    else{
    document.getElementById('tname').innerHTML = trainss[i].name;
    document.getElementById('tnum').innerHTML = trainss[i].Trainid;
    document.getElementById('tsrc').innerHTML = trainss[i].start;
    document.getElementById('tdst').innerHTML = trainss[i].end;
    document.getElementById('tcmp').innerHTML = trainss[i].nagc;
    document.getElementById('tscmp').innerHTML = trainss[i].sogc;
    document.getElementById('nagc').innerHTML = trainss[i].ngc;
    }
    }
    
    
     function fbck(rank)
    {
       // alert(rank);
        tid=document.getElementById('txtipt').value;
        var FOUND = -1;
        for(var i=0; i<trainss.length; i++) {
            if(trainss[i].Trainid == tid) {
                FOUND = i;
                break;
            }
        }
    if(FOUND == -1)  
    {
        alert("enter a valid number")
    }
    else{
    trainss[i].sogc=rank;
    document.getElementById('tscmp').innerHTML =rank;
    }
    var q = document.getElementById("query");
    q.style.display = "block";
    var i=document.getElementById("inform");
        i.style.display = "none";
    }
         