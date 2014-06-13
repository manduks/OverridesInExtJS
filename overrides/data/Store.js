/**
 * @class Overrides.data.Store
 * @overrides Ext.data.Store
 * This is the code for overriding the store`s removeAll method
 */
Ext.define('Overrides.data.Store', {
    override:'Ext.data.Store',

    removeAll: function () {
    	this.clearFilter();  //clear any filters than remove
    	this.callParent(arguments);
    }
});