# LearnApIs.Enrollment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Whether the Group allows self enrollment or only enrolled by instructor. This can only be set on creation.   | Type      | Description  | --------- | --------- | | InstructorOnly | Students are added to the Group by the instructor | | SelfEnrollment | Students are added to the Group by self enrollment |  | [optional] 
**limit** | **Number** | The maximum allowed enrollment size for self enrolled groups. | [optional] 
**signupSheet** | [**SignupSheet**](SignupSheet.md) |  | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `InstructorOnly` (value: `"InstructorOnly"`)
* `SelfEnrollment` (value: `"SelfEnrollment"`)

