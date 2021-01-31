# LearnApIs.GradeSchema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The id associated with this grade schema. | [optional] 
**externalId** | **String** | The externalId associated with this grade schema. | [optional] 
**title** | **String** | The title of this grade schema. | [optional] 
**description** | **String** | The description of this grade schema. | [optional] 
**scaleType** | **String** | The scale type of this grade schema.   | Type      | Description  | --------- | --------- | | Percent |  | | Score |  | | Tabular |  | | Text |  | | CompleteIncomplete |  |  | [optional] 
**symbols** | [**[GradeSymbol]**](GradeSymbol.md) | The list of grade symbols for this grade schema. Only returned for Tabular scaleType schemas. | [optional] 

<a name="ScaleTypeEnum"></a>
## Enum: ScaleTypeEnum

* `Percent` (value: `"Percent"`)
* `Score` (value: `"Score"`)
* `Tabular` (value: `"Tabular"`)
* `Text` (value: `"Text"`)
* `CompleteIncomplete` (value: `"CompleteIncomplete"`)

