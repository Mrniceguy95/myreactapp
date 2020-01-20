import $ from 'jquery';
import List from 'list.js'

function Refresh(){
    $.get("https://zealous-snyder-fe1913.netlify.com/.netlify/functions/index/conductores",
    function(data){
        $("i.fa-refresh").toggleClass("fa-spin");
        document.getElementById("posts-content").innerHTML=data.toString();
        var max=0;
        var className = document.querySelectorAll('.date-month');
        
        function monthDate(param) {
            let dateValue  = Date.parse(param)/1000;
            return -(dateValue-max);
        }

        for(let i = 0; i < className.length; i++) {
            var attributeaux = document.querySelectorAll('.date-month')[i].innerText;
            attributeaux = attributeaux.substring(3, 5)+"-"+attributeaux.substring(0, 2)+"-"+attributeaux.substring(6, 10);
            let dateValueaux  = Date.parse(attributeaux)/1000;
            if(dateValueaux>max) max=dateValueaux;
        }

        for(let i = 0; i < className.length; i++) {
            var attribute = document.querySelectorAll('.date-month')[i].innerText;
            attribute = attribute.substring(3, 5)+"-"+attribute.substring(0, 2)+"-"+attribute.substring(6, 10);
            document.querySelectorAll('.date-month')[i].setAttribute('data-timestamp', monthDate(attribute));
        }

        var options = {
            valueNames: [ 'origin', 'destination', 'pname' ]
        };
        
        var options2 = {
            valueNames: [ { name: 'date-month', attr: 'data-timestamp' } ]
        };

        var posts = new List('users', options);
        var posts2 = new List('users', options2);
        var posts3 = new List('users2', options);
        var posts4 = new List('users2', options2);

        $(".filter").keyup(function(){
            posts.filter(item => {
            return options.valueNames.every(name => {
                var value = $("#"+name).val().toLowerCase();
                return item.values()[name].toLowerCase().includes(value)
                });
            });
            posts3.filter(item => {
            return options.valueNames.every(name => {
                var value = $("#"+name).val().toLowerCase();
                return item.values()[name].toLowerCase().includes(value)
                });
            });
            
            
        });
    });

    $.get("https://zealous-snyder-fe1913.netlify.com/.netlify/functions/index/pasajeros",
    function(data){
        document.getElementById("users-content").innerHTML=data.toString();
        var max=0;
        var className = document.querySelectorAll('.date-month');
        function monthDate(param) {
            let dateValue  = Date.parse(param)/1000;
            return -(dateValue-max);
        }

        for(let i = 0; i < className.length; i++) {
            var attributeaux = document.querySelectorAll('.date-month')[i].innerText;
            attributeaux = attributeaux.substring(3, 5)+"-"+attributeaux.substring(0, 2)+"-"+attributeaux.substring(6, 10);
            let dateValueaux  = Date.parse(attributeaux)/1000;
            if(dateValueaux>max) max=dateValueaux;
        }

        for(let i = 0; i < className.length; i++) {
            var attribute = document.querySelectorAll('.date-month')[i].innerText;
            attribute = attribute.substring(3, 5)+"-"+attribute.substring(0, 2)+"-"+attribute.substring(6, 10);
            document.querySelectorAll('.date-month')[i].setAttribute('data-timestamp', monthDate(attribute));
        }

        var options = {
            valueNames: [ 'origin', 'destination', 'pname' ]
        };
        
        var options2 = {
            valueNames: [ { name: 'date-month', attr: 'data-timestamp' } ]
        };

        var posts = new List('users', options);
        var posts2 = new List('users', options2);
        var posts3 = new List('users2', options);
        var posts4 = new List('users2', options2);
        

        $(".filter").keyup(function(){
            posts.filter(item => {
            return options.valueNames.every(name => {
                var value = $("#"+name).val().toLowerCase();
                return item.values()[name].toLowerCase().includes(value)
            });
            });
            posts3.filter(item => {
            return options.valueNames.every(name => {
                var value = $("#"+name).val().toLowerCase();
                return item.values()[name].toLowerCase().includes(value)
            });
            });
            
            
        });
        setTimeout(function() {
            console.log('off');
            $("i.fa-refresh").toggleClass("fa-spin");
        }, 1500);
    });
    
}

export default Refresh;
