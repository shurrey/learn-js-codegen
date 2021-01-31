# LearnApIs.Body39

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**childCourseId** | **String** | The primary ID of the child, cross-listed course, in which the user is directly enrolled. &lt;/p&gt; This field is read only in Learn versions 3000.11.0 through 3400.0.0. As of 3400.1.0, this field is mutable.  &lt;/p&gt; If this membership&#x27;s course is a parent course in a cross-listed set, the childCourseId can be updated to move the membership enrollment between child courses and the parent course in  the set.  Patching the childCourseId to \&quot;null\&quot; will move the membership to the parent course.  **Since**: 3000.11.0 | [optional] 
**dataSourceId** | **String** | The ID of the data source associated with this course.  This may optionally be the data source&#x27;s externalId using the syntax \&quot;externalId:math101\&quot;. | [optional] 
**availability** | [**Availability**](Availability.md) |  | [optional] 
**courseRoleId** | **String** | The user&#x27;s role in the course.  These roles are also valid for an organization, although they are named differently in the UI.  Custom course roles may also be referenced by their IDs.   | Type      | Description  | --------- | --------- | | Instructor | Has access to all areas in the Control Panel. This role is generally given to those developing, teaching, or facilitating the class. Instructors may access a course that is unavailable to students. This role is customizable and may have different capabilities from what is documented here. | | BbFacilitator | The facilitator is an instructor like role. Facilitators are restricted versions of an instructor, in that they are able to deliver course instruction and administer all aspects of a pre-constructed course, but are not allowed to modify or alter the course. This role is customizable and may have different capabilities from what is documented here. | | TeachingAssistant | The teaching assistant role is that of a co-teacher. Teaching assistants are able to administer all areas of a course. Their only limitations are those imposed by the instructor or Blackboard administrator at your school. This role is customizable and may have different capabilities from what is documented here. | | CourseBuilder | Manages the course without having access to student grades. This role is customizable and may have different capabilities from what is documented here. | | Grader | Assists the instructor in the creation, management, delivery, and grading of items. This role is customizable and may have different capabilities from what is documented here. | | Student |  | | Guest | Has no access to the Control Panel. Areas within the course are made available to guests, but typically they can only view course materials; they do not have access to tests or assessments, and do not have permission to post on discussion boards. This role&#x27;s behavior is immutable. |  | [optional] 

<a name="CourseRoleIdEnum"></a>
## Enum: CourseRoleIdEnum

* `Instructor` (value: `"Instructor"`)
* `BbFacilitator` (value: `"BbFacilitator"`)
* `TeachingAssistant` (value: `"TeachingAssistant"`)
* `CourseBuilder` (value: `"CourseBuilder"`)
* `Grader` (value: `"Grader"`)
* `Student` (value: `"Student"`)
* `Guest` (value: `"Guest"`)

