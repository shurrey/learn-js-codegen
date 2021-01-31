# LearnApIs.Grading2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**due** | **Date** | The date on which attempts are due for the grade column. | [optional] 
**attemptsAllowed** | **Number** | Number of attempts allowed for the grade column. | [optional] 
**scoringModel** | **String** | The scoring model for the submitted grade column attempts.   | Type      | Description  | --------- | --------- | | Last |  | | Highest |  | | Lowest |  | | First |  | | Average |  |  | [optional] 
**schemaId** | **String** | The ID of the grade schema associated with this grade column. Mutable since 3400.2.0  **Since**: 3200.13.0 | [optional] 
**anonymousGrading** | [**AnonymousGrading1**](AnonymousGrading1.md) |  | [optional] 

<a name="ScoringModelEnum"></a>
## Enum: ScoringModelEnum

* `Last` (value: `"Last"`)
* `Highest` (value: `"Highest"`)
* `Lowest` (value: `"Lowest"`)
* `First` (value: `"First"`)
* `Average` (value: `"Average"`)

