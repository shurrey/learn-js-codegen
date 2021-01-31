# LearnApIs.AnonymousGrading1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of AnonymousGrading settings for this Attempts based Grade Column.   | Type      | Description  | --------- | --------- | | None | Indicates anonymous grading is not enabled. | | AfterAllGraded | Indicates anonymized grades are released after all attempts have been graded. | | Date | Indicates anonymized grades are released after a specified release date. |  | [optional] 
**releaseAfter** | **Date** | Date after which grades are released from being anonymized, if AnonymousGrading type is &#x27;Date&#x27;. | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `None` (value: `"None"`)
* `AfterAllGraded` (value: `"AfterAllGraded"`)
* `Date` (value: `"Date"`)

