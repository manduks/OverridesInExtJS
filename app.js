/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/

Ext.Loader.setConfig({
    paths: {        
        'Overrides': 'overrides'
    }
});

Ext.application({
    name: 'OverridesInExtJS',
    extend: 'OverridesInExtJS.Application',

    requires:['Overrides.data.Store'],// importing our overrides

    autoCreateViewport: true
});