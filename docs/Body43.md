# LearnApIs.Body43

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **String** | An optional externally-defined unique ID for the course. Defaults to the courseId.  Formerly known as &#x27;batchUid&#x27;. | [optional] 
**dataSourceId** | **String** | The ID of the data source associated with this course. This may optionally be the data source&#x27;s externalId using the syntax \&quot;externalId:math101\&quot;. | [optional] 
**courseId** | **String** | The Course ID attribute, shown to users in the UI. | 
**name** | **String** | The name of the course. | 
**description** | **String** | The description of the course. | [optional] 
**organization** | **Boolean** | Whether this object represents an Organization. Defaults to false. | [optional] 
**ultraStatus** | **String** | Whether the course is rendered using Classic or Ultra Course View.   | Type      | Description  | --------- | --------- | | Undecided | The ultra status is not decided. | | Classic | The course is decided as classic. | | Ultra | The course is decided as ultra | | UltraPreview | The course is currently in Ultra mode but during the preview state where it may still be reverted via a Restore to the classic state |  | [optional] 
**allowGuests** | **Boolean** | Whether guests (users with the role guest) are allowed access to the course. Defaults to true. | [optional] 
**closedComplete** | **Boolean** | This status does not affect availability of the course for viewing in any way. closedComplete is valid for both Ultra and Classic courses. If an Ultra course is in closedComplete mode, updates are not possible. For a Classic course in closedComplete mode, updates are still possible (through Web UI but not through REST i.e. closed is enforced for original courses when updated through REST the same way Ultra courses are blocked) but new notifications are not generated. | [optional] 
**termId** | **String** | The ID of the term associated to this course. This may optionally be the term&#x27;s externalId using the syntax \&quot;externalId:spring.2016\&quot;. | [optional] 
**availability** | [**Availability7**](Availability7.md) |  | [optional] 
**enrollment** | [**Enrollment2**](Enrollment2.md) |  | [optional] 
**locale** | [**Locale**](Locale.md) |  | [optional] 

<a name="UltraStatusEnum"></a>
## Enum: UltraStatusEnum

* `Undecided` (value: `"Undecided"`)
* `Classic` (value: `"Classic"`)
* `Ultra` (value: `"Ultra"`)
* `UltraPreview` (value: `"UltraPreview"`)

