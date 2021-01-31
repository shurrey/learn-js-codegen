# LearnApIs.CourseRole

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The primary ID of the course role | [optional] 
**roleId** | **String** | The identifier used to assign the course role to a course enrollment.  For system defined course roles, this value will be one of Student, Instructor, TeachingAssistant, CourseBuilder, Grader or Guest  For custom course roles, this will be the roleId entered during the creation of the role. Allowed characters for the custom course roleId&#x27;s are any letter, number, period, underscore and dash. | [optional] 
**nameForCourses** | **String** | The role name presented to users when the course role is associated with a course. | [optional] 
**nameForOrganizations** | **String** | The role name presented to users when the course role is associated with an organization. | [optional] 
**description** | **String** | Optional description of the course role | [optional] 
**custom** | **Boolean** | False if the course role exists as a system generated course role. True if the course role was created by an admin user.  Both custom and system generated course roles can be modified, but only custom course roles can be deleted. | [optional] 
**actAsInstructor** | **Boolean** | Implies access to unavailable courses, display in the Course catalog, and receiving email enrollment requests | [optional] 
**availability** | [**Availability13**](Availability13.md) |  | [optional] 
