# LearnApIs.RestException

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | Represents HTTP Status code in the response header. | [optional] 
**code** | **String** | The error code specific to a particular REST API. It is usually something that conveys information specific to the problem domain. For cases where the HTTP Status code conveys all the information required (such as a 404-Not Found) then the code may be omitted. | [optional] 
**message** | **String** | Error message that should be easy to understand and convey a concise reason as to why the error occurred | 
**developerMessage** | **String** | Represents any technical information that a developer calling REST API might find useful. | [optional] 
**extraInfo** | **String** | Indicates a URL that anyone seeing the error message can click in a browser. The target web page should describe the error condition fully, as well as potential solutions to help them resolve the error condition | [optional] 
