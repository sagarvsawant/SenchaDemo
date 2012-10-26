
Ext.define("Synerzip.view.AboutUs",{
    extend:"Ext.tab.Panel",
    xtype:"aboutUs",
    config:{
        title:"About Us",
        iconCls:'info',


        tabBar:{
          layout:{
              pack:'center',
              docked:'left'
//              ui:'light'
          }
        },
        activeTab:1,
        defaultValue:{
            scrollable:true
        },


        items:[
            {
                xtype: 'titlebar',
                docked: 'top',

                styleHtmlContent:true,
                styleHtmlCls:'headerTitle',
                height:'49pt',
//                id:'headerBar',

                items: [
                    {
                        xtype: 'image',
                        height: 50,
                        width: 270,
                        src:"resources/images/syn-logo-withTagLine.png",
                        align:'left'
                    }
                ]
            },
            {
                title:'Founders',
                xtype:'carousel',
                scrollable:true,
                layout:'vbox',
                scrollable:true,
                items:[
                    {
                        xtype:'container',
                        layout:'hbox',
                        scrollable:true,
                        items:[

                            {
                                styleHtmlContent:true,
                                styleHtmlCls:'founders',
                                html:['<center><img src="resources/images/Hemant-Elhence.jpg"/></center> <br/>' +
                                    '<h4>Hemant Elhence</h4>' +
                                    '<h4>Founder & Chief Executive Officer</h4>',
                                    '<p><li>Prior to launching Synerzip, Hemant was the Chief Operating Officer and founding member of ECMi, a software products and services company based in Dallas.</li></p>',
                                    '<p><li>At ECMi, Hemant was instrumental in defining and launching its off-shore product development services business. Prior to ECMi, Hemant was a product line Vice President at i2 Technologies.</li></p>',
                                    '<p><li>At i2 Hemant lead a portfolio of software products managing distributed product teams spread across multiple cities in US and India. Prior to i2, Hemant was with McKinsey & Company where he helped numerous blue-chip clients with operations and business strategy issues.</li></p>',
                                    '<p><li>Hemant has also worked as a consultant at Technology Research Group and as a software engineer at Digital Equipment Corporation. Hemant has an MBA from The University of Chicago, MSEE from the University of Massachusetts, Amherst, and BSEE from IIT, New Delhi.</li></p>'].join(""),
                                flex: 1
                            }

                        ]

                    },
                    {
                        xtype:'container',
                        layout:'hbox',
                        scrollable:true,
                        items:[

                            {
                                styleHtmlContent:true,
                                styleHtmlCls:'founders',
                                html:['<center><img src="resources/images/Vinayak-Joglekar.jpg"/> </center><br/>' +
                                    '<h4>Vinayak Joglekar</h4>' +
                                    '<h4>Founder & Chief Technology Officer</h4>',
                                    '<p><li>Prior to launching Synerzip, Vinayak was Vice President of Engineering, Chief Technology Officer, and founding member of ECMi, a software products and services company based in Dallas.</li></p>',
                                    '<p><li>At ECMi, Vinayak was responsible leading all aspects of ECMi’s off-shore development operations.</li></p>',
                                    '<p><li>Vinayak has over 22 years of experience in software architecture design and product development with demonstrated success in leading teams to deliver products on time and from concept to release. In his prior roles, Vinayak has architected web based systems with focus in B2B-ecommerce transaction, B2C high traffic web applications, and various MRP/ERP type enterprise systems.</li></p>',
                                    '<p><li>He has successfully delivered off-shore software projects for over 20 clients including large companies such as Alfa-Laval and First Guarantty, and early-stage companies like Cyberdrawer, One Network, Worksoft, and Servient. In his tenure, Vinayak has built and mentored over 100 product development teams and has personally hired over 1000 software professionals. Vinayak did his MBA from the IIM, Calcutta, and BSME IIT, Bombay.</li></p>'].join(""),
                                flex: 1
                            }
                        ]
                    },
                    {
                        xtype:'container',
                        layout:'hbox',
                        scrollable:true,
                        items:[

                            {
                                styleHtmlContent:true,
                                styleHtmlCls:'founders',
                                html:['<center><img src="resources/images/Mike-Hall.jpg"/></center> <br/>' +
                                    '<h4>Michael Hall</h4>' +
                                    '<h4>Agile Methods Coach/Trainer</h4>',
                                    '<p><li>Michael Hall is an accomplished Agile Methods trainer and Certified Scrum Master. He is considered an expert at integrating transformative practices such as Agile Methods and disciplined quality into existing corporate cultures. Michael has developed and delivered training on Agile Methods through workshops, tutorials, and speaking engagements. As an early adopter, his practical experience with Agile Methods spans over 8 years. Michael was trained by the inventor of Scrum, Ken Schwaber.</li></p>',
                                    '<p><li>Michael has over 20 years of practical experience leading and transforming both small and large teams to successful commercial product delivery at companies such as WorldLink, Samsung, ESI, Nortel Networks, and E-Systems. Ten of these years involved collaborative offshore outsourcing with development teams located in India and Korea. Michael was part of the leadership team that established Nortel India in Borivali, India as a joint partnership with Tata Consulting Services during the seminal days of offshore outsourcing.</li></p>',
                                    '<p><li>This practical project development and offshore outsourcing experience gives Michael an excellent base of real-world knowledge and an insightful understanding of solutions when combining Agile Methods with distributed and outsourced teams.</li></p>'].join(""),
                                flex: 1
                            }
                        ]
                    }
                ]

            },
            {
                title:'Growth',
                xtype:'carousel',
                layout:'fit',
                scrollable:true,
                fullscreen:true,


                items:[
                    {
                        html : '<center>Employee Growth</center>',
//                        margin:'70 0 0 300',
                        xtype:'empGrowthChart'
                    },
                    {
                        html : '<center>Finance Growth</center>',
//                        margin:'70 0 0 300',
                        xtype:'financeGrowthChart'
                    }
//                    ,
//                    {
//                        html : '<center>Client Growth</center>',
////                        margin:'70 0 0 300',
//                        xtype:'clientGrowthChart'
//                    }

                ]



            },
            {
                title:'Technology',
                xtype:'container',
                styleHtmlContent:true,
                styleHtmlCls:'technology',
                html:[


                    '<center><a href="" style="font-size:22px;text-decoration:none; color: #ff1a1a;">JQuery</a>' +
                    '<a href="" style="font-size:20px;text-decoration:none; color: #4FCAFF;">DotNet</a> ' +
                    '<a href="" style="font-size:24px;text-decoration:none; color: #0CA3A8;">HTML</a>' +
                    '<a href="" style="font-size:36px;text-decoration:none; color: #0CA3A8;">Spring</a><br/>' +
                    '<a href="" style="font-size:28px;text-decoration:none; color: #7c7474;">Apache Tomcat</a>' +
                    '<a href="" style="font-size:20px;text-decoration:none; color: #A747DE;">Hibernate</a> ' +
                    '<a href="" style="font-size:20px;text-decoration:none; color: #ff1a1a;">GWT</a> <br/>' +
                    '<a href="" style="font-size:24px;text-decoration:none; color: #A747DE;">Sql</a> ' +
                    '<a href="" style="font-size:19px;text-decoration:none; color: #4FCAFF;">MySQl</a>' +
                    '<a href="" style="font-size:30px;text-decoration:none; color: #A7AF35;">Java</a> ' +
                    '<a href="" style="font-size:24px;text-decoration:none; color: #0CA3A8;">JBoss</a><br/>' +
                    '<a href="" style="font-size:20px;text-decoration:none; color: #4FCAFF;">PlSql</a> ' +
                    '<a href="" style="font-size:24px;text-decoration:none; color: #000000;">Android</a> ' +
                    '<a href="" style="font-size:30px;text-decoration:none; color: #7c7474;">Mobile Development</a>' +
                    '<a href="" style="font-size:24px;text-decoration:none; color: #A7AF35;">Agile Coaching</a> <br/>' +
                    '<a href="" style="font-size:18px;text-decoration:none; color: #0CA3A8;">SharePoint</a>' +
                    '<a href="" style="font-size:20px;text-decoration:none; color: #ff1a1a;">Test Automation</a> ' +
                    '<a href="" style="font-size:19px;text-decoration:none; color: #000000;">Java J2EE</a><br/>' +
                    '<a href="" style="font-size:24px;text-decoration:none; color: #A7AF35;">Microsoft .Net</a> <br/>' +
                    '<a href="" style="font-size:30px;text-decoration:none; color: #0CA3A8;">IPhone</a>' +
                    '<a href="" style="font-size:20px;text-decoration:none; color: #7c7474;">Security Testing Services</a> ' +
                    '<a href="" style="font-size:30px;text-decoration:none; color: #A7AF35;">Sencha Touch</a></center>'

                ]
//
            }
        ]
    }
})