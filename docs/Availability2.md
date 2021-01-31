# LearnApIs.Availability2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **String** | Whether the content is currently available to students.  Instructors can always access the content.  If set to &#x27;PartiallyVisible&#x27;, the title will be available to students but the body will not.  Defaults to Yes.   | Type      | Description  | --------- | --------- | | Yes |  | | No |  | | PartiallyVisible |  |  | [optional] 
**allowGuests** | **Boolean** | Whether this content is available to users with the &#x27;guest&#x27; role. Defaults to true. | [optional] 
**adaptiveRelease** | [**AdaptiveRelease**](AdaptiveRelease.md) |  | [optional] 

<a name="AvailableEnum"></a>
## Enum: AvailableEnum

* `Yes` (value: `"Yes"`)
* `No` (value: `"No"`)
* `PartiallyVisible` (value: `"PartiallyVisible"`)

