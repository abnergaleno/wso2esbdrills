wm.types = {
	"types": {
		"boolean": {
			"internal": true,
			"primitiveType": "Boolean"
		},
		"byte": {
			"internal": true,
			"primitiveType": "Number"
		},
		"char": {
			"internal": true,
			"primitiveType": "String"
		},
		"com.edcintegra.integra.GregTask": {
			"liveService": false,
			"internal": false,
			"service": "integra",
			"fields": {
				"description": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": false
				},
				"endDate": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"type": "java.util.Date",
					"isList": false,
					"required": false
				},
				"gregUser": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"type": "com.edcintegra.integra.GregUser",
					"isList": false,
					"required": true
				},
				"lastUpdateBy": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 12,
					"fieldSubType": null,
					"type": "java.lang.Integer",
					"isList": false,
					"required": true
				},
				"lastUpdateDatetime": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 11,
					"fieldSubType": null,
					"type": "java.util.Date",
					"isList": false,
					"required": true
				},
				"name": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": true
				},
				"parentTaskId": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"type": "java.lang.Integer",
					"isList": false,
					"required": false
				},
				"projectId": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"type": "java.lang.Integer",
					"isList": false,
					"required": true
				},
				"referenceTicket": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": false
				},
				"startDate": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"type": "java.util.Date",
					"isList": false,
					"required": true
				},
				"status": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": true
				},
				"taskId": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"type": "java.lang.Integer",
					"isList": false,
					"required": true
				},
				"taskTypeId": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"type": "java.lang.Integer",
					"isList": false,
					"required": false
				}
			}
		},
		"com.edcintegra.integra.GregUser": {
			"liveService": false,
			"internal": false,
			"service": "integra",
			"fields": {
				"customerCode": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": false
				},
				"emailAddress": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": true
				},
				"gregTasks": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"type": "com.edcintegra.integra.GregTask",
					"isList": true,
					"required": false
				},
				"mobilePassword": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": false
				},
				"name": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": true
				},
				"userId": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"type": "java.lang.Integer",
					"isList": false,
					"required": true
				}
			}
		},
		"double": {
			"internal": true,
			"primitiveType": "Number"
		},
		"float": {
			"internal": true,
			"primitiveType": "Number"
		},
		"int": {
			"internal": true,
			"primitiveType": "Number"
		},
		"java.lang.Boolean": {
			"internal": false,
			"primitiveType": "Boolean"
		},
		"java.lang.Byte": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Character": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.Double": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Float": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Integer": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Long": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Short": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.String": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.StringBuffer": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.math.BigDecimal": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.math.BigInteger": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.sql.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Time": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Timestamp": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.util.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"long": {
			"internal": true,
			"primitiveType": "Number"
		},
		"org.joda.time.LocalDateTime": {
			"internal": true,
			"primitiveType": "DateTime"
		},
		"short": {
			"internal": true,
			"primitiveType": "Number"
		}
	}
};