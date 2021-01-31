# LearnApIs.CourseTask

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of this task. | [optional] 
**status** | **String** | The status of the task.   | Type      | Description  | --------- | --------- | | Queued | initial state of a task | | Assigned |  | | Running |  | | Complete |  | | CompleteWithErrors |  | | Incomplete |  |  | [optional] 
**percentComplete** | **Number** | Task progress, with 0 representing not started and 100 representing done. | [optional] 
**started** | **Date** | The date the task was started. | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `Queued` (value: `"Queued"`)
* `Assigned` (value: `"Assigned"`)
* `Running` (value: `"Running"`)
* `Complete` (value: `"Complete"`)
* `CompleteWithErrors` (value: `"CompleteWithErrors"`)
* `Incomplete` (value: `"Incomplete"`)

