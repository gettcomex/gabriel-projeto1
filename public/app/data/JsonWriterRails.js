Ext.define('AW.data.JsonWriterRails', {
	alias: 'writer.jsonrails',
	extend: 'Ext.data.JsonWriter',

	modelName: null,

	getRecordData: function(record) {
		var data = {};
		data[this.modelName] = record.data;
		return data;
	}
});