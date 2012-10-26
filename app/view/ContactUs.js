
Ext.define("Synerzip.view.ContactUs",
    {
        extend:'Ext.tab.Panel',
        xtype:'contactUs',
        fullscreen: true,
        config: {

            title:'Contact Us',
            iconCls:'user',
            scrollable:true,
            styleHtmlContent:true,
            layout:'card',
//            ui:'light',
            activeItem: 0,
            tabBar: {

                layout: {
                    pack: 'center'
                }
            },
            items: [

                {
                    xtype: 'titlebar',
                    docked: 'top',

                    styleHtmlContent:true,
                    styleHtmlCls:'headerTitle',
                    height:'49pt',
//
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
                    xtype:'tablet-placesContainer'
                },


                {
                    title: 'Enquiry Form',
                    xtype: 'formpanel',
                    id: 'basicform',
                    layout:'vbox',
                    iconCls: 'refresh',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'All Fields Are Important',
//                            instructions: 'Please fill in the required fields below, and a Synerzip representative will be contacting you shortly.',
                            defaults: {
                                required: true,
                                labelAlign: '',
                                labelWidth: '20%'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'name',
                                    label: 'First Name',

                                    autoCapitalize: false
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'name',
                                    label: 'Last Name',

                                    autoCapitalize: false
                                },
                                {
                                    xtype: 'emailfield',
                                    name: 'email',
                                    label: 'Email',
                                    placeHolder: 'sagarsawant700@gmail'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'name',
                                    label: 'Company',
                                    autoCapitalize: false
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'name',
                                    label: 'Phone #',
                                    autoCapitalize: false
                                },
//
                                {
                                    xtype: 'selectfield',
                                    name: 'look',
                                    label: 'How Did You Hear About Us',
                                    valueField: 'look',
                                    displayField: 'title',
                                    store: {
                                        data: [
                                            { look: 'web', title: 'Web'},
                                            { look: 'search', title: 'Search'},
                                            { look: 'email', title: 'E-Mail'},
                                            { look: 'friend', title: 'Friend'},
                                            { look: 'magzine', title: 'Magzine'},
                                            { look: 'other', title: 'Other'}
                                        ]
                                    }
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'name',
                                    label: 'Address',
                                    autoCapitalize: false
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'name',
                                    label: 'City',
                                    autoCapitalize: false
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'name',
                                    label: 'Zip',
                                    autoCapitalize: false
                                },
                                {
                                    xtype: 'checkboxfield',
                                    name: 'cool',
                                    label: 'Notifications Through Mail',
                                    value: true
                                }
                            ]
                        },

                        {
                            xtype: 'panel',
                            defaults: {
                                xtype: 'button',
                                style: 'margin: 0.1em',
                                width: 177,
                                flex : 1
                            },
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    text: 'Submit Form',
                                    scope: this,
                                    hasDisabled: false,
                                    ui: 'confirm',
                                    handler: function(btn){
                                        var form = Ext.getCmp('basicform');

                                        if (btn.hasDisabled) {
                                            form.enable();
                                            btn.hasDisabled = false;
                                            btn.setText('Submit Form');
                                            btn.setUi("confirm");
                                        } else {
                                            form.disable();
                                            btn.hasDisabled = true;
                                            btn.setText('New Form');
                                            btn.setUi('normal');
                                            Ext.getCmp('basicform').reset();
                                            Ext.Msg.alert(' ', 'Form Sent.', Ext.emptyFn);
                                        }
                                    }
                                },
                                {
                                    text: 'Reset',
                                    ui:'action',   //decline
                                    handler: function(){
                                        Ext.getCmp('basicform').reset();
                                    }
                                }
                            ]
                        }
                    ]
                }

            ]

        }

    })