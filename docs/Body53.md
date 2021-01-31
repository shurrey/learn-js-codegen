# LearnApIs.Body53

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the placement. Not required to be unique. Maximum length of 50 characters, BAD_REQUEST error with message is returned if greater than 50 characters. | [optional] 
**description** | **String** | The description of the placement. Not required to be unique. Maximum length is 1000 characters, BAD_REQUEST error with message is returned if greater than 1000 characters. | [optional] 
**iconUrl** | **String** | The URL of the icon for this placement, if any. Not required to be unique, must be a complete and valid URL. Maximum length is 255 characters, BAD_REQUEST error with message is returned if greater than 255 characters or incomplete URL. | [optional] 
**url** | **String** | The URL of the tool provider. Not required to be unique, must be a complete and valid URL. Maximum length is 1024 characters, BAD_REQUEST error with message is returned if greater than 1024 characters or incomplete URL. | [optional] 
**key** | **String** |  | [optional] 
**secret** | **String** |  | [optional] 
**authorId** | **String** | Id of the creator of the placement  **Deprecated**: since 3900.0 not used | [optional] 
**instructorCreated** | **Boolean** | Whether an instructor created the placement or not (otherwise admin)  **Deprecated**: since 3900.0 not used | [optional] 
**allowStudents** | **Boolean** | Whether the course tool is visible by students, or only to non-students (e.g. instructors). Defaults to true, allowing students to see the tool. | [optional] 
**allowGrading** | **Boolean** | Whether this placement can accept grades from the tool provider and a grade column can be created for it. This only applies to Enum[Type]#&#x60;ContentHandler&#x60; types. All others don&#x27;t support grading and will be set to false. | [optional] 
**availability** | [**Availability8**](Availability8.md) |  | [optional] 
**launchInNewWindow** | **Boolean** | Whether this placement link should be opened in a new window or not. | [optional] 
**customParameters** | **{String: String}** | Custom launch parameters for the tool. | [optional] 
