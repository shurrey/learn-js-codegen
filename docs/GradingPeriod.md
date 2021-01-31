# LearnApIs.GradingPeriod

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The REST Id object that uniquely identifies this grading period for REST usage | [optional] 
**title** | **String** | The title of the grading period. Length is limited to 64 characters. | [optional] 
**description** | **String** | The description of the grading period. Length is limited to 1000 characters. | [optional] 
**position** | **Number** | The relative position of the grading period to other grading periods when viewed in the grade book. | [optional] 
**dateMode** | **String** | Property may be set to DoNotUseDates to explicitly blank dates,  in which case startDate and endDate are ignored; otherwise set to  UseDates; in this case startDate and endDate must be included and valid.   | Type      | Description  | --------- | --------- | | DoNotUseDates | Do not use dates | | UseDates | Use dates |  | [optional] 
**start** | **Date** | If start and end are set, and start is before end, these define temporal  coverage of grading period which may be used to associate GradableItems (Columns) by due date. Start dates will be persisted as starting at  00:00:00 on the submitted day. | [optional] 
**end** | **Date** | If start and end are set, and start is before end, these define temporal  coverage of grading period which may be used to associate GradableItems (Columns) by due date. End dates will be persisted as ending at  23:59:59 on the submitted day. | [optional] 

<a name="DateModeEnum"></a>
## Enum: DateModeEnum

* `DoNotUseDates` (value: `"DoNotUseDates"`)
* `UseDates` (value: `"UseDates"`)

