# LearnApIs.Grading

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**due** | **Date** | Date and time that the created assignment will be due. If not specified, this will default to the specified \&quot;availability.adaptiveRelease.end\&quot; date. If that is also not specified, due date defaults to null. | [optional] 
**attemptsAllowed** | **Number** | The number of attempts allowed on the created assignment. Defaults to 1. Maximum allowed is 10 for an Ultra Assignment. Value will be ignored if isUnlimitedAttemptsAllowed is set to true. | [optional] 
**gradeSchemaId** | **String** | The grading schema to use for the created assignment. Defaults to Score. | [optional] 
**isUnlimitedAttemptsAllowed** | **Boolean** | Determines if the assignment has unlimited number of attempts.  **Since**: 3400.8.0 | [optional] 
