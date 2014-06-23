Ext.define('OverridesInExtJS.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.layout.container.Border',
        'OverridesInExtJS.view.users.UsersGrid'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    defaults:{
        padding:4
    },
    

    items: [{
        region: 'west',
        xtype: 'panel',
        title: 'Menu',
        width: 150
    },{
        region: 'center',
        xtype: 'usersgrid'
    }]
});