
Ext.define("Synerzip.view.Home",{
    extend:'Ext.Panel',
    xtype:'home',
    fullscreen: true,
    requires: [
        'Ext.carousel.RotatingCarousel'
    ],

    config:{
        title:'Home',
        iconCls:'home',
        // layout:'fit',
        scrollable:true,
        styleHtmlContent:true,

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
                        align:'center'
                    }
                ]
            },

            {
                xtype:'container',
                layout:'hbox',
                items:[
                    {
                        styleHtmlContent:true,
                        styleHtmlCls:'homePageContainer',
                        html:['<h3> Synerzip is a leading dual shore - US and India - outsource software product development and software testing company, based in Dallas, TX. Using the Agile development method, we create cutting-edge software products exclusively for small to mid-size technology companies. </h6><br>'].join(""),
                        flex: 1

                    }
                ]
            },
            {
                xtype:'container',
                layout:'hbox',

                items:[
                    {
                        styleHtmlContent:true,
                        styleHtmlCls:'homePageContainer',
                        html:['<h4> WE FOCUS ON SOFTWARE PRODUCT DEVELOPMENT & QA</h4>'].join(""),
                        flex: 1

                    },
                    {
                        styleHtmlContent:true,
                        styleHtmlCls:'homePageContainer',
                        html:['<h4> WE DELIVER USING DUAL SHORE AGILE MODEL</h4>'].join(""),
                        flex: 1
                    },
                    {
                        styleHtmlContent:true,
                        styleHtmlCls:'homePageContainer',
                        html:['<h4> WE WORK COLLABORATIVELY WITH OUR CLIENTS</h4>'].join(""),
                        flex: 1
                    }
                ]
            },
            {
                xtype:'container',
                layout:'hbox',

                items:[
                    {
                        styleHtmlContent:true,
                        styleHtmlCls:'homePageContainer',
                        html:[
                            '<p><li>Lead by an executive team with in-depth expertise in the software products business</li></p>',
                            '<p><li>Extensive experience in the full software development life-cycle - prototyping, design, development, QA testing & deployment</li></p>',
                            '<p><li>Breadth of experience across industry domains and software technologies</li></p>',
                            '<p><li>Working with evolving requirements, we do not require a detailed software specifications document upfront from the client</li></p>'].join(""),
                        //  style: 'background-color: #5E99CC;',
                        flex: 1

                    },
                    {
                        styleHtmlContent:true,
                        styleHtmlCls:'homePageContainer',
                        html:[
                            '<p><li>Our US based product/project management team dove-tails with our top-tier India based software design, development, and QA team ensuring quality development software output</li></p>',
                            '<p><li>Skilled in Agile development best practices– our mature and seasoned software professionals work effectively with evolving requirements, delivering working software every 2-weeks</li></p>',
                            '<p><li>We bring in the appropriate level of engineering discipline and rigor - enabling responsive yet robust software delivery</li></p>'].join(""),
                        //  style: 'background-color: #5E99CC;',
                        flex: 1
                    },
                    {
                        styleHtmlContent:true,
                        styleHtmlCls:'homePageContainer',
                        html:[
                            '<p><li>We work more as a trusted partner, rather than as a vendor, offering full transparency</li></p>',
                            '<p><li>Each of our client teams are dedicated to respective clients, working as an extension of their US based teams</li></p>',
                            '<p><li>Free flowing, two-way communications - using-email, IM, conf-calls, video-conf, desktop sharing, and in-person meetings</li></p>',
                            '<p><li>We allow and facilitate converting your team with Synerzip to your own captive team - the Build - Operate - Transfer model</li></p>'].join(""),
                        //  style: 'background-color: #5E99CC;',
                        flex: 1
                    }
                ]
            },


            {
                xtype: 'rotatingcarousel',
                height: '50px',
                styleHtmlContent:true,
                styleHtmlCls:'homeCarousel',
                indicator:false,
                delay: 9000,

                items: [
                    {
//                        xtype: 'image',
//                        src: "resources/images/syn1.png"

                        html : "<div style='text-decoration: underline; color: #003d99; text-align: center; padding-top: 5px'> <a href=''> <b>  Dallas, TX, September 18, 2012 - SYNERZIP Makes Inc. Magazine's Annual Exclusive List of America's Fastest-Growing Private Companies - the Inc.500|5000, Two Years Straight</b>  </div>"
//                        style: 'background-color: #ff8100'
                    },
                    {
//                        xtype: 'image',
//                        src: "resources/images/syn2.png"

                        html : "<div style='text-decoration: underline; color: #ff1a1a; text-align: center; padding-top: 5px'> <a href=''> <b>TechCrunch, Tuesday 5, 2012 - With Quickoffice acquisition, Google is now Synerzip's customer</b> </div>"
//                        style: 'background-color: #ff8100'
                    },
                    {
//                        xtype: 'image',
//                        src: "resources/images/syn3.png"
                        html : "<div style='text-decoration: underline; color: #bf00ff; text-align: center; padding-top: 5px'> <a href=''> <b>PUNE, INDIA, December 7, 2011 - PDX to Ramp Up their Business with Synerzip</b> </div>"
//                        style: 'background-color: #6b8e23'
                    },
                    {
//                        xtype: 'image',
//                        src: "resources/images/syn3.png"
                        html : "<div style='text-decoration: underline; color: #6e9c00; text-align: center; padding-top: 5px'> <a href=''> <b>DALLAS, TX and NEW YORK, September 19, 2011 (Inc. Magazine) - Synerzip on Inc. 500|5000 List - America's Fastest Growing Private Companies</b>  </div>"
//                        style: 'background-color: #5E99CC'
                    },
                    {
//                        xtype: 'image',
//                        src: "resources/images/syn3.png"
                        html : "<div style='text-decoration: underline; color: #ff8100; text-align: center; padding-top: 5px'> <a href=''> <b>Dallas, TX, February 3rd , 2011 - Synerzip Makes si100 Top 10 List For 2010</b> </div>"
//                        style: 'background-color: #759E60'
                    }
                ]
            }
//            ,
//            {
//                xtype:'container',
//                layout:'hbox',
//
//                items:[
//                        {
//                            xtype: 'image',
//                            height: 50,
//                            width: 270,
//                            src:"resources/images/agile-alliance5.jpg",
//                            align:'right',
//                            docked:'bottom',
//                            style:'margin-bottom:5px'
//                        }
//                ]
//            }
        ]
    }

})