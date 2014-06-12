/**
 * @class OverridesInExtJS.model.User
 * @extends Ext.data.Model
 * The user model of our application
 */
Ext.define('OverridesInExtJS.model.User', {
    extend: 'Ext.data.Model',

    fields:[{
    	name:'id',
    	type:'int'
    },{
    	name:'name'
    },{
    	name:'twitter'
    }]
});