export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "rocportal40559dab": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "storage": {
        "rocTestTable": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "SortKeyName": "string",
            "SortKeyType": "string",
            "Region": "string"
        }
    },
    "function": {
        "rybakLambda": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "rocprojectportaladb5954f": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "SampleLambda": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "rybakAPI": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "api143ce26c": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "SampleAPI": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}