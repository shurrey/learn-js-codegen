# LearnApIs.Grading5

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of Grading settings for this Grade Column.   | Type      | Description  | --------- | --------- | | Attempts | Indicates score and grade values are determined based on user attempts | | Calculated | Indicates score and grade values are determined by applying a calculated formula. | | Manual | Indicates score and grade values are manually entered. |  | [optional] 
**due** | **Date** | The date on which attempts are due for the grade column. | [optional] 
**attemptsAllowed** | **Number** | Number of attempts allowed for the grade column. | [optional] 
**scoringModel** | **String** | The scoring model for the submitted grade column attempts.   | Type      | Description  | --------- | --------- | | Last |  | | Highest |  | | Lowest |  | | First |  | | Average |  |  | [optional] 
**anonymousGrading** | [**AnonymousGrading1**](AnonymousGrading1.md) |  | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `Attempts` (value: `"Attempts"`)
* `Calculated` (value: `"Calculated"`)
* `Manual` (value: `"Manual"`)


<a name="ScoringModelEnum"></a>
## Enum: ScoringModelEnum

* `Last` (value: `"Last"`)
* `Highest` (value: `"Highest"`)
* `Lowest` (value: `"Lowest"`)
* `First` (value: `"First"`)
* `Average` (value: `"Average"`)

