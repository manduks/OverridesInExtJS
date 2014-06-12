/**
 * @class OverridesInExtJS.view.users.UsersGrid
 * @extends Ext.grid.Panel
 * The grid to show our user
 */
Ext.define('OverridesInExtJS.view.users.UsersGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'usersgrid',

    title: 'Users',
    store: 'Users',
    columns: [{
        text: 'ID',
        dataIndex: 'id'
    }, {
        header: 'NAME',
        flex: 3,
        dataIndex: 'name'
    }, {
        header: 'TWITTER',
        flex: 2,
        dataIndex: 'twitter'
    }],
    tbar:['->',{
        text:'Filter',
        itemId:'filter'
    },{
        text: 'Clear Filter',
        itemId:'clearFilter'
    },{
        text: 'Remove All',
        itemId:'removeAll'
    }]
});