# LearnApIs.Duration2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The intended length of the course. Possible values are:  - Continuous: The course is active on an ongoing basis. This is the default. - DateRange: The course will only be available between specific date ranges. - FixedNumDays: The course will only be available for a set number of days. - Term: The course&#x27;s parent term duration settings will be used.   | Type      | Description  | --------- | --------- | | Continuous | Course is active on an ongoing basis. | | DateRange | Course is only intended to be available between specific date ranges | | FixedNumDays | Course is only available for a set number of days | | Term | Course availablity is dictated by its associated term |  | [optional] 
**start** | **Date** | The date this course starts. May only be set if availability.duration.type is DateRange. | [optional] 
**end** | **Date** | The date this course ends. May only be set if availability.duration.type is DateRange. | [optional] 
**daysOfUse** | **Number** | The number of days this course can be used. May only be set if availability.duration.type is FixedNumDays. | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `Continuous` (value: `"Continuous"`)
* `DateRange` (value: `"DateRange"`)
* `FixedNumDays` (value: `"FixedNumDays"`)
* `Term` (value: `"Term"`)

