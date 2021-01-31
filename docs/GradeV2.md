# LearnApIs.GradeV2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | The user ID associated with this grade. | [optional] 
**columnId** | **String** | The grade column ID for this grade. | [optional] 
**status** | **String** | The status of this grade.   | Type      | Description  | --------- | --------- | | Graded | Grade has been graded, corresponding to dbValue 1 | | NeedsGrading | Grade needs grading, corresponding to dbValue 2 |  | [optional] 
**displayGrade** | [**DisplayGrade**](DisplayGrade.md) |  | [optional] 
**text** | **String** | The text representation of this grade. | [optional] 
**score** | **Number** | The score associated with this grade. | [optional] 
**overridden** | **Date** | The date on which the score associated with this grade was last overridden.  An ISODate value is only returned if this grade is currently overridden; otherwise, returns null. | [optional] 
**notes** | **String** | The instructor notes associated with this grade. This notes field is used for grades on manual grade columns.   That is, when column.grading.type &#x3D; Manual.  It is also used when column.grading.type &#x3D; Attempts and the grade has been manually overridden. | [optional] 
**feedback** | **String** | The instructor feedback associated with this grade.  This feedback is used for grades on manual grade columns.   That is, when column.grading.type &#x3D; Manual.  It is also used when column.grading.type &#x3D; Attempts and the grade has been manually overridden. | [optional] 
**exempt** | **Boolean** | Whether the score associated with this grade is ignored when computing the course grade. | [optional] 
**corrupt** | **Boolean** | Whether the grade for a calculated column could be successfully computed. | [optional] 
**gradeNotationId** | **String** | The Id of a Grade Notation which can be optionally associated with this Grade. If a Grade Notation is specified for this Grade, then the DisplayGrade&#x27;s Text attribute will contain the Grade Notation&#x27;s Description. | [optional] 
**changeIndex** | **Number** | The change index associated with this grade which indicates what relative point in time the grade was created or last updated. | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `Graded` (value: `"Graded"`)
* `NeedsGrading` (value: `"NeedsGrading"`)

