# LearnApIs.Body66

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **String** | An optional externally-defined unique ID for the course. Defaults to the courseId.  Formerly known as &#x27;batchUid&#x27;. | [optional] 
**dataSourceId** | **String** | The ID of the data source associated with this course. This may optionally be the data source&#x27;s externalId using the syntax \&quot;externalId:math101\&quot;. | [optional] 
**name** | **String** | The name of the course. | [optional] 
**description** | **String** | The description of the course. | [optional] 
**allowGuests** | **Boolean** | Whether guests (users with the role guest) are allowed access to the course. Defaults to true. | [optional] 
**readOnly** | **Boolean** | This status does not affect availability of the course for viewing in any way. readOnly is valid for both Ultra and Classic courses. If an Ultra course is in readOnly mode, updates are not possible. For a Classic course in readOnly mode, updates are still possible (through Web UI but not through REST i.e. closed is enforced for original courses when updated through REST the same way Ultra courses are blocked) but new notifications are not generated.  **Deprecated**: since 3400.8.0; use the v2 endpoint&#x27;s closedComplete property instead | [optional] 
**termId** | **String** | The ID of the term associated to this course. This may optionally be the term&#x27;s externalId using the syntax \&quot;externalId:spring.2016\&quot;. | [optional] 
**availability** | [**Availability11**](Availability11.md) |  | [optional] 
**enrollment** | [**Enrollment3**](Enrollment3.md) |  | [optional] 
**locale** | [**Locale2**](Locale2.md) |  | [optional] 
