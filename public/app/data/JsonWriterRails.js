Ext.define('AW.data.JsonWriterRails', {
	extend: 'Ext.data.JsonWriter',
	alias: 'writer.jsonrails',

	modelName: null,

	getRecordData: function(record) {
		var data = {};
		data[this.modelName] = record.data;
		return data;
	}
});