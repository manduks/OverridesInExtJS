Ext.define('OverridesInExtJS.controller.Main', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'usersGrid',
        selector: 'usersgrid'
    }],
    init: function() {
        var me = this;
        me.control({
            'usersgrid #filter': {
                click: me.onFilterGrid
            },
            'usersgrid #clearFilter': {
                click: me.onClearFilter
            },
            'usersgrid #removeAll': {
                click: me.onRemoveAllUsers
            }
        })
    },
    onFilterGrid: function(btn) {
        Ext.getStore('Users').filterBy(function(record) {
            return record.get('id') > 10;
        });
    },
    onClearFilter: function() {
        Ext.getStore('Users').clearFilter();
    },
    onRemoveAllUsers: function() {
        Ext.getStore('Users').removeAll();
    }
});