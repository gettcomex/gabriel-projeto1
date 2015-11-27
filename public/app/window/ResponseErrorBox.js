Ext.define('AW.window.ResponseErrorBox', {
	alias: 'widget.responseerrorbox',
	extend: 'Ext.window.MessageBox',

	alert: function(cfg, response, fn, scope) {
		var copyOfArgs = Ext.clone(arguments);
		copyOfArgs[1] = this.buildMessageFromResponse(response);

		this.callParent(copyOfArgs);
	},

	buildMessageFromResponse: function(response) {
		var result = Ext.decode(response.responseText),
			errors = result.errors,
			messages = [],
			capitalize = Ext.String.capitalize,
			attrCapitalized = null;

		for (var attr in errors) {
			if (attr !== 'base') {
				attrCapitalized = capitalize(attr);

				messages = messages.concat(
					errors[attr].map(function(value) {
						return attrCapitalized + ' ' + value;
					})
				);
			}
			else {
				messages = messages.concat(errors[attr]);
			}
		}

		return messages.join('<br>');
	}
}, function() {
	AW.ResponseErrorBox = new this();
});