# LearnApIs.Body30

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **String** | The text representation of this grade. | [optional] 
**score** | **Number** | The score associated with this grade. | [optional] 
**notes** | **String** | The instructor notes associated with this grade. This notes field is used for grades on manual grade columns.   That is, when column.grading.type &#x3D; Manual.  It is also used when column.grading.type &#x3D; Attempts and the grade has been manually overridden. | [optional] 
**feedback** | **String** | The instructor feedback associated with this grade.  This feedback is used for grades on manual grade columns.   That is, when column.grading.type &#x3D; Manual.  It is also used when column.grading.type &#x3D; Attempts and the grade has been manually overridden. | [optional] 
**exempt** | **Boolean** | Whether the score associated with this grade is ignored when computing the course grade. | [optional] 
**gradeNotationId** | **String** | The Id of a Grade Notation which can be optionally associated with this Grade. If a Grade Notation is specified for this Grade, then the DisplayGrade&#x27;s Text attribute will contain the Grade Notation&#x27;s Description. | [optional] 
