# LearnApIs.GradeColumnV2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The primary ID of the grade column. | [optional] 
**externalId** | **String** | The externalId for this grade column | [optional] 
**externalToolId** | **String** | The externalId for this grade column  **Since**: 3500.2.0 | [optional] 
**name** | **String** | The name of the grade column. | [optional] 
**displayName** | **String** | The display name of the grade column. Only applicable for Classic courses. Ultra courses will simply use the &#x60;name&#x60; field.  **Since**: 3300.2.0 | [optional] 
**description** | **String** | The description of the grade column. | [optional] 
**externalGrade** | **Boolean** | Whether this grade column is an external grade column. | [optional] 
**created** | **Date** | The date this grade column was created. | [optional] 
**contentId** | **String** | For grade columns associated with a content item, the ID of the content item.  **Since**: 3000.11.0 | [optional] 
**score** | [**Score1**](Score1.md) |  | [optional] 
**availability** | [**Availability5**](Availability5.md) |  | [optional] 
**grading** | [**Grading6**](Grading6.md) |  | [optional] 
**gradebookCategoryId** | **String** | The gradebook category ID for the grade column.  **Since**: 3400.2.0 | [optional] 
**formula** | [**GradingFormulaV2**](GradingFormulaV2.md) |  | [optional] 
**includeInCalculations** | **Boolean** | Indicates whether or not this column is included in gradebook calculations. Cannot be set for Ultra courses. Default: true  **Since**: 3800.4.0 | [optional] 
**showStatisticsToStudents** | **Boolean** | Indicates whether or not column statistics are shown to students. Read-only for Ultra courses. Default: false  **Since**: 3800.4.0 | [optional] 
**scoreProviderHandle** | **String** | The score provider handle for the grade column.  **Since**: 3900.3.0 | [optional] 
