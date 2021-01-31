# LearnApIs.Availability7

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **String** | Whether the course is currently available to students. Instructors can always access the course if they have &#x27;Access unavailable course&#x27; entitlement. If set to &#x27;Term&#x27;, the course&#x27;s parent term availability settings will be used.   | Type      | Description  | --------- | --------- | | Yes | Students may access the course. | | No | Students may not access the course. | | Disabled | Disabled by the SIS. Students may not access the course. @since 3100.0.0 | | Term | Availability is inherited from the term settings. Requires a termId be set. |  | [optional] 
**duration** | [**Duration2**](Duration2.md) |  | [optional] 

<a name="AvailableEnum"></a>
## Enum: AvailableEnum

* `Yes` (value: `"Yes"`)
* `No` (value: `"No"`)
* `Disabled` (value: `"Disabled"`)
* `Term` (value: `"Term"`)

