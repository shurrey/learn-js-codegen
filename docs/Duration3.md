# LearnApIs.Duration3

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The intended length of the term.  Possible values are:   | Type      | Description  | --------- | --------- | | Continuous | The term is active on an ongoing basis. This is the default. | | DateRange | The term will only be available between specific date ranges. | | FixedNumDays | The term will only be available for a set number of days. |  | [optional] 
**start** | **Date** | The date this term starts.  May only be set if availability.duration.type is DateRange. | [optional] 
**end** | **Date** | The date this term ends.  May only be set if availability.duration.type is DateRange. | [optional] 
**daysOfUse** | **Number** | The number of days courses within this term can be used.  May only be set if availability.duration.type is FixedNumDays. | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `Continuous` (value: `"Continuous"`)
* `DateRange` (value: `"DateRange"`)
* `FixedNumDays` (value: `"FixedNumDays"`)

