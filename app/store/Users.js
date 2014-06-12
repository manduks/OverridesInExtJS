/**
 * @class OverridesInExtJS.store.Users
 * @extends Ext.data.Store
 * The Users store for our application
 */
Ext.define('OverridesInExtJS.store.Users', {
    extend: 'Ext.data.Store',
    requires: [
        'OverridesInExtJS.model.User'
    ],

    model:'OverridesInExtJS.model.User',
    autoLoad: true,

    data:[
    	{id:1, name:'Patrick Sheridan', twitter:'@sheridap'},
    	{id:2, name:'Jay Garcia', twitter:'@ModusJesus'},
    	{id:3, name:'Aaron N. Smith', twitter:'@aaron_n_smith'},
    	{id:4, name:'Alexandru Lazar', twitter:'@alexlazar86'},
    	{id:5, name:'Bharath Khambadkone', twitter:'@bkhambadkone'},
    	{id:7, name:'Brice Mason', twitter:'@bricemason'},
    	{id:8, name:'Bryan Rosenthal', twitter:'@ModusBryan'},
    	{id:9, name:'Chris Weissenberger', twitter:'@caweissen'},
    	{id:10, name:'Crysfel Villa', twitter:'@crysfel'},
    	{id:11, name:'Dave Ackerman', twitter:'@dmackerman'},
    	{id:12, name:'Ernesto Ramírez', twitter:'@_ErnestoR '},
    	{id:13, name:'Geoff Bishop', twitter:'@gabishop'},
    	{id:14, name:'Grgur Grisogono', twitter:'@ggrgur'},
    	{id:15, name:'Heather Ackerman', twitter:'@______Heather'},
    	{id:16, name:'Howard Freidman', twitter:'@hbart'},
    	{id:17, name:'Jason Lunsford', twitter:'@jasonlunsford'},
    	{id:18, name:'Jaymes Jones', twitter:''},
    	{id:19, name:'Kristen Williams', twitter:'@KristenAtModus'},
    	{id:20, name:'Mary Ellen Bowman', twitter:'@MEllenBowman'},
    	{id:21, name:'Michael Schwartz', twitter:'@ModusSchwartz'},
    	{id:22, name:'Mimi Flynn', twitter:'@mimiflynn'},
    	{id:23, name:'Raj Tirbany', twitter:''},
    	{id:24, name:'R.Bullington-McGuire', twitter:'@obscurerichard'},
    	{id:26, name:'Sandra Waihuini', twitter:'@swahuini'},
    	{id:27, name:'Simon Prickett', twitter:'@simon_prickett'},
    	{id:28, name:'Stan Bershadsky', twitter:'@stan229'},
    	{id:29, name:'Steve Dalgetty', twitter:'@stevedalgetty'},
    	{id:30, name:'Timothy Eagan', twitter:'@TimothyEagan'},
    	{id:31, name:'Tyler Knappe', twitter:'@tknappe'}
    ]
});