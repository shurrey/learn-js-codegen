# LearnApIs.Availability3

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **String** | Whether the created assignment is available to students. Instructors can always access the created assignment. If set to &#x27;PartiallyVisible&#x27;, the title will be available to students but the body will not. Defaults to Yes.   | Type      | Description  | --------- | --------- | | Yes |  | | No |  | | PartiallyVisible |  |  | [optional] 
**allowGuests** | **Boolean** | Whether the created assignment is available to users with the &#x27;guest&#x27; role. Defaults to true. | [optional] 
**adaptiveRelease** | [**AdaptiveRelease1**](AdaptiveRelease1.md) |  | [optional] 

<a name="AvailableEnum"></a>
## Enum: AvailableEnum

* `Yes` (value: `"Yes"`)
* `No` (value: `"No"`)
* `PartiallyVisible` (value: `"PartiallyVisible"`)

