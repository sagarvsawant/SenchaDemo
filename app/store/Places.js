Ext.define('Synerzip.store.Places',{
    extend:'Ext.data.Store',
    config:{  model : 'Synerzip.model.Place',
//        sorters : 'lastName',
//        grouper : function(record) {
//            return record.get('lastName')[0];
//        },
        data : [

            {
                firstName : "Synerzip  USA",
                lastName : "Dallas Usa",
                address:"<html><body>" +

                                "<ul id='list'>"+
                                "<img src='resources/images/synerzip-logo-1.png'>" +
                                "<br><br>"+
                                "<li><b>14228 Midway Road, Suite #130</b> </li>"+
                                "<li><b>Dallas, TX 75244 </li></b> "+
                                "<li>Tel: +1.469.322.0349 </li>"+
                                "<li>Fax: +1.469.322.0490 </li>"+
                                "<li style='text-decoration: underline; color: blue;'>contact@synerzip.com</li>"+

                                "</ul>"+

                        "</body></html> ",
                latitude : 32.943645,
                longitude : -96.837959,
                zoomSize:3

            },
            {
                firstName : "Synerzip  Pune   ",
                lastName : "Pune",
                address:"<html><body>" +

                    "<ul id='list'>" +
                    "<img src='resources/images/synerzip-logo-1.png'>" +
                    "<br><br>"+
                    "<li><b>Dnyanvatsal Commercial Complex</b> </li>"+
                    "<li><b>Survey No. 23, Plot No. 189, </b></li> "+
                    "<li><b>Karve Nagar, </b></li>"+
                    "<li><b>Pune, India 411 052 </b></li>"+
                    "<li>Tel: +91.20.41023477</li>"+
                    "<li>Fax: +91.20.41023481</li>"+
                    "<br>"+
                    "<li><b>Office No. 6 to 14,</b></li>"+
                    "<li><b>3rd Floor, Revolution Mall,</b></li>"+
                    "<li><b>Plot No. CC-3, S.No. 20/2,</b></li>"+
                    "<li><b>Above Big Bazzar, Kothrud,</b></li>"+
                    "<li><b>Pune, India 411 038</b></li>"+
                    "<li>Tel: +91.20.67283222</li>"+
                    "<li>Fax: +91.20.41023481</li>" +
                    "<br>"+
                    "<li style='text-decoration: underline; color: blue;' >contact@synerzip.com</li>"+

                    "</ul>"+

                    "</body></html> ",
                latitude : 18.500427 ,
                longitude : 73.821044,
                zoomSize:3
            }

        ]
    }
})