# LearnApIs.Attempt

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The primary ID for this attempt. | [optional] 
**userId** | **String** | The user ID associated with this attempt. | [optional] 
**groupAttemptId** | **String** | The group attempt ID associated with this student attempt. | [optional] 
**groupOverride** | **Boolean** | Whether the score associated with this student attempt was overridden from the associated group attempt score. A value is only returned if the attempt grade is currently overridden. | [optional] 
**status** | **String** | The status of this attempt.   | Type      | Description  | --------- | --------- | | NotAttempted | none of the students in a group has submitted an attempt; applies only to group assessments | | Abandoned |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. | | InProgress | attempt activity has commenced, but has not been submitted for grading | | Suspended |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. | | Canceled |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. | | NeedsGrading | attempt has been submitted for grading, but has not been fully graded | | Completed | a grade has been entered for the attempt | | InProgressAgain | attempt has been graded, but more student activity occurred after the grade was entered; applies only to collaborative tools such as discussions | | NeedsGradingAgain | additional student activity occurring after a grade was entered requires that the attempt be regraded; applies only to collaborative tools such as discussions |  | [optional] 
**text** | **String** | The text representation of grade for this attempt. | [optional] 
**score** | **Number** | The score associated with this attempt. | [optional] 
**notes** | **String** | The instructor notes associated with this attempt. | [optional] 
**feedback** | **String** | The instructor feedback associated with this attempt. | [optional] 
**studentComments** | **String** | The student comments associated with this attempt. | [optional] 
**studentSubmission** | **String** | The student submission text associated with this attempt. | [optional] 
**exempt** | **Boolean** | Whether the score associated with this attempt is ignored when computing the user&#x27;s grade for the associated grade column. | [optional] 
**created** | **Date** | The date on which this attempt was created. | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `NotAttempted` (value: `"NotAttempted"`)
* `Abandoned` (value: `"Abandoned"`)
* `InProgress` (value: `"InProgress"`)
* `Suspended` (value: `"Suspended"`)
* `Canceled` (value: `"Canceled"`)
* `NeedsGrading` (value: `"NeedsGrading"`)
* `Completed` (value: `"Completed"`)
* `InProgressAgain` (value: `"InProgressAgain"`)
* `NeedsGradingAgain` (value: `"NeedsGradingAgain"`)

