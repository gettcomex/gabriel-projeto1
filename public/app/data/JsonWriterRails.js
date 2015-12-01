Ext.define('AW.data.JsonWriterRails', {
	alias: 'writer.jsonrails',
	extend: 'Ext.data.JsonWriter',

	modelName: null,

	_validateAttr: function(obj, attr) {
		return obj.hasOwnProperty(attr) && attr !== 'id';
	},

	_validateValue: function(value) {
		return typeof value !== 'undefined' && value !== null;
	},

	getRecordData: function(record) {
		var oldData = record.data,
			data = {},
			model = {},
			value = null;

		for (var attr in oldData) {
			value = oldData[attr];

			if (this._validateAttr(oldData, attr) && this._validateValue(value)) {
				model[attr] = oldData[attr];
			}
		}

		data[this.modelName] = model;
		return data;
	}
});