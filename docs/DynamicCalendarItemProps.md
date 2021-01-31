# LearnApIs.DynamicCalendarItemProps

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attemptable** | **Boolean** | The dynamic calendar item can be attempted (can have attempts made against it) and the current user (in context) has permission/entitlement to grade attempts for the object represented by this calendar item. | [optional] 
**categoryId** | **String** | Returns the gradeableItem categoryId value .it is only set if the calendar event is dynamically created based on a single grade book column | [optional] 
**dateRangeLimited** | **Boolean** | The dynamic calendar item is only visible during a specific windows of time. | [optional] 
**eventType** | **String** | Returns a human readable string describing the type of calendar item represented (e.g. assignment, test, etc.). | [optional] 
**gradable** | **Boolean** | The dynamic calendar item can be graded and the current user (in context) has permission/entitlement to grade attempts for the object represented by this calendar item. | [optional] 
