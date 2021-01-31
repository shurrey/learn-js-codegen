# LearnApIs.Enrollment2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Specifies the enrollment options for the course. Defaults to InstructorLed.   | Type      | Description  | --------- | --------- | | InstructorLed | Enrollment tasks for the course can only performed by the instructor | | SelfEnrollment | Instructors have the ability to enroll users, and students can also enroll themselves in the course | | EmailEnrollment | Instructors have the ability to enroll users, and students can email requests to the instructor for enrollment |  | [optional] 
**start** | **Date** | The date on which enrollments are allowed for the course. May only be set if enrollment.type is SelfEnrollment. | [optional] 
**end** | **Date** | The date on which enrollment in this course ends. May only be set if enrollment.type is SelfEnrollment. | [optional] 
**accessCode** | **String** | The enrollment access code associated with this course. May only be set if enrollment.type is SelfEnrollment. | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `InstructorLed` (value: `"InstructorLed"`)
* `SelfEnrollment` (value: `"SelfEnrollment"`)
* `EmailEnrollment` (value: `"EmailEnrollment"`)

