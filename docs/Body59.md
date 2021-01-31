# LearnApIs.Body59

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **String** | An optional externally-defined unique ID for the user.  Defaults to the userName.  Formerly known as &#x27;batchUid&#x27;. | [optional] 
**dataSourceId** | **String** | The ID of the data source associated with this user.  This may optionally be the data source&#x27;s externalId using the syntax \&quot;externalId:math101\&quot;. | [optional] 
**userName** | **String** | The userName property, shown in the UI. | [optional] 
**studentId** | **String** | The user&#x27;s student ID name or number as defined by the school or institution. | [optional] 
**password** | **String** | The user&#x27;s login password. | [optional] 
**educationLevel** | **String** | The education level of this user.   | Type      | Description  | --------- | --------- | | K8 | Kindergarten through 8th grade | | HighSchool | Grades 9 through 12. | | Freshman | College or university freshman. | | Sophomore | College or university sophomore. | | Junior | College or university junior. | | Senior | College or university senior. | | GraduateSchool | Graduate school student. | | PostGraduateSchool | Post-graduate school student. | | Unknown | Education Level is not known, or not specified. |  | [optional] 
**gender** | **String** | The gender of this user.   | Type      | Description  | --------- | --------- | | Female | Female | | Male | Male | | Unknown | Gender is not known, or not specified. |  | [optional] 
**birthDate** | **Date** | The birth date of this user. | [optional] 
**institutionRoleIds** | **[String]** | The primary and secondary institution roles assigned to this user. The primary institution role is the first item in the list, followed by all secondary institution roles sorted alphabetically.  **Since**: 3300.3.0 | [optional] 
**systemRoleIds** | [**[SystemRoleEnum]**](SystemRoleEnum.md) | The system roles (the administrative user roles in the UI) for this user.  The first role in this list is the user&#x27;s primary system role, while the remaining are secondary system roles. | [optional] 
**availability** | [**Availability10**](Availability10.md) |  | [optional] 
**name** | [**Name1**](Name1.md) |  | [optional] 
**job** | [**Job**](Job.md) |  | [optional] 
**contact** | [**Contact**](Contact.md) |  | [optional] 
**address** | [**Address**](Address.md) |  | [optional] 
**locale** | [**Locale1**](Locale1.md) |  | [optional] 
**avatar** | [**Avatar**](Avatar.md) |  | [optional] 

<a name="EducationLevelEnum"></a>
## Enum: EducationLevelEnum

* `K8` (value: `"K8"`)
* `HighSchool` (value: `"HighSchool"`)
* `Freshman` (value: `"Freshman"`)
* `Sophomore` (value: `"Sophomore"`)
* `Junior` (value: `"Junior"`)
* `Senior` (value: `"Senior"`)
* `GraduateSchool` (value: `"GraduateSchool"`)
* `PostGraduateSchool` (value: `"PostGraduateSchool"`)
* `Unknown` (value: `"Unknown"`)


<a name="GenderEnum"></a>
## Enum: GenderEnum

* `Female` (value: `"Female"`)
* `Male` (value: `"Male"`)
* `Unknown` (value: `"Unknown"`)

