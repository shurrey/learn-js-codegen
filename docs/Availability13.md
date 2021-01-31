# LearnApIs.Availability13

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **String** | Whether the course role is currently available to course enrollments, organization enrollments, both or neither.  Valid values are:  - Course: Course Role is available to Course Enrollments - Organization: Course Role is available to Organization Enrollments - Both: Course Role is available to both Course and Organization Enrollments - None: Course Role is not available   | Type      | Description  | --------- | --------- | | Course | Course only | | Organization | Organization only | | CourseAndOrganization | Both Course and Organization | | No | Neither Course nor Organization |  | [optional] 

<a name="AvailableEnum"></a>
## Enum: AvailableEnum

* `Course` (value: `"Course"`)
* `Organization` (value: `"Organization"`)
* `CourseAndOrganization` (value: `"CourseAndOrganization"`)
* `No` (value: `"No"`)

