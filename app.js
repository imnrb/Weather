
        const curDate=document.getElementById("date");
        let weathercon=document.getElementById("weathercon");
        const tempStatus=document.getElementById("status").textContent;
        // const message=document.getElementsByClassName("message");
        // console.log(tempStatus=="Clouds");
        if(tempStatus=="Sunny"|| tempStatus=="Clear")
        {
            weathercon.innerHTML="<i class='fas fa-sun' style='color: #eccc68;'></i>"
            document.getElementById("box").style.backgroundColor ="#f0f0b2";
            // message.innerHTML=tempStatus+" !";
        }
        else if(tempStatus=="Clouds")
        {
            weathercon.innerHTML="<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
            // boxbg.innerHTML="<style='background-color:blue'>"
            document.getElementById("box").style.backgroundColor ="#5CB7E4";
            // message.innerHTML=tempStatus+" !";

        }
        else if(tempStatus=="Rain")
        {
            weathercon.innerHTML="<i class='fas fa-cloud-rain' style='color: #f1f3f6;'></i>"
            // boxbg.innerHTML="<style='background-color:violet'>"
            document.getElementById("box").style.backgroundColor ="#7B90D6";
            // message.innerHTML=tempStatus+" !";
        }
        else{
            weathercon.innerHTML='<i class="fas fa-cloud-sun" style="color:#cce6ff"></i>'
            // boxbg.innerHTML="<style='background-color:pink'>"
            document.getElementById("box").style.backgroundColor ="#F18742";
            // message.innerHTML=tempStatus+" !";
        }
        const getCurrentDay=()=>{
            var weekday=new Array(7);
            weekday[0]="Sun";
            weekday[1]="Mon";
            weekday[2]="Tues";
            weekday[3]="Wed";
            weekday[4]="Thrus";
            weekday[5]="Fri";
            weekday[6]="Sat";
            let currentTime=new Date();
            let day =weekday[currentTime.getDay()];
            return day;

        };
        const getCurrentTime=()=>{
            var months=[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "June",
                "July",
                "Aug",
                "Sept",
                "Oct",
                "Nov",
                "Dec"
            ];
            var now=new Date();
            var month=now.getMonth();
            var day=now.getDate();
            let hours=now.getHours();
            let mins=now.getMinutes();
            let periods="AM";
            if(hours>11)
            {
                periods="PM";
                if(hours>12)
                {
                    hours-=12;     //to get time in normal format
                }
            }
            if(mins<10)
            {
                mins="0"+mins;
            }
            let datte=months[month]+" "+day+" "+"| "+hours+":"+mins+" "+periods;
            return datte;
        };
        curDate.innerHTML=getCurrentDay()+" | "+getCurrentTime() ;    

 