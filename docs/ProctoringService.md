# LearnApIs.ProctoringService

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID associated with this proctoring service. | [optional] 
**name** | **String** | The name of the proctoring service. | [optional] 
**handle** | **String** | The handle that uniquely identifies this proctoring service. | [optional] 
**vendor** | **String** | The vendors of the proctoring service.   | Type      | Description  | --------- | --------- | | Respondus |  | | Internal |  |  | [optional] 
**assessmentSettingsUrl** | **String** | The url for the vendors assessment settings LTI tool. | [optional] 
**assessmentSettingsCustomParameters** | **{String: String}** | Custom launch parameters for the vendors assessment settings LTI tool. | [optional] 
**browserDownloadUrl** | **String** | The download url for the vendors secure browser. | [optional] 
**availability** | [**Availability14**](Availability14.md) |  | [optional] 

<a name="VendorEnum"></a>
## Enum: VendorEnum

* `Respondus` (value: `"Respondus"`)
* `Internal` (value: `"Internal"`)

